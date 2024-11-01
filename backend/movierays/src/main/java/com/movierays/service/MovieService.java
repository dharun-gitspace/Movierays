package com.movierays.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.movierays.controller.AdminMovieController;
import com.movierays.model.Movie;
import com.movierays.repository.MovieRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;
    private static final Logger logger = LoggerFactory.getLogger(MovieService.class);
    private final HashMap<String, List<Movie>> searchCache = new HashMap<>();
    public Optional<Movie> getMovieById(String id) {
        return movieRepository.findById(id);
    }
    public List<Movie> searchMovies(String query) {
        if (searchCache.containsKey(query)) {
            return searchCache.get(query);
        }
        List<Movie> movies = movieRepository.findByNameContaining(query);
        searchCache.put(query, movies); // Cache the result
        return movies;
    }
    public Boolean searchMovieByName(String movieName) {

        Movie movie = movieRepository.findByName(movieName);
        if (movie!= null) {
            return true;
        }
        return false;
    }


    public Movie createMovie(Movie movie) {
        return movieRepository.save(movie);
    }
    public Resource viewMovie(String id)
    {
        Optional<Movie> movie = movieRepository.findById(id);
        Resource resource = null;
        if(movie.isPresent())
        {
            Movie movieDet = movie.get();
            String trailerUrl = movieDet.getTrailerUrl();

            try {
                Path path = Paths.get(trailerUrl);
                resource = new UrlResource(path.toUri());

            } catch (MalformedURLException e) {
                throw new RuntimeException(e);
            }
        }
        return resource;
    }
    public Resource viewThumbnail(String id) {
        Optional<Movie> movie = movieRepository.findById(id);
        Resource resource = null;
        if (movie.isPresent()) {
            Movie movieDet = movie.get();
            String thumbnailUrl = movieDet.getThumbnailUrl();

            try {
                Path path = Paths.get(thumbnailUrl);
                resource = new UrlResource(path.toUri());

            } catch (MalformedURLException e) {
                throw new RuntimeException(e);
            }
        }
        return resource;
    }
    public Movie updateMovie(String id, Movie movie) {
        movie.setId(id);
        return movieRepository.save(movie);
    }
    public void deleteMovie(String id) {
        Optional<Movie> movie = movieRepository.findById(id);

        if (movie.isPresent()) {
            Movie movieToDelete = movie.get();
            String trailerPath = movieToDelete.getTrailerUrl();  // assuming trailerUrl stores the path
            String thumbnailPath = movieToDelete.getThumbnailUrl();  // assuming thumbnailUrl stores the path

            // Delete the movie from MongoDB
            movieRepository.deleteById(id);

            // Delete the trailer and thumbnail from the file system
            deleteFile(trailerPath);
            deleteFile(thumbnailPath);
        } else {
            throw new RuntimeException("Movie not found with id: " + id);
        }
    }

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    public void uploadMovie(MultipartFile thumbnail, MultipartFile trailer, String movieDetailsJson ) throws IOException {

        Movie movieDetails = null;
        try {
            movieDetails = new ObjectMapper().readValue(movieDetailsJson, Movie.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
        logger.info("started uploading Movie {} by admin",movieDetails.getName());
        // Save files (thumbnail and trailer) to local storage
        String thumbnailUrl = saveFileToLocal(thumbnail, "thumbnail");
        String trailerUrl = saveFileToLocal(trailer, "movie");

        // Update movie details with the URLs
        movieDetails.setThumbnailUrl(thumbnailUrl);
        movieDetails.setTrailerUrl(trailerUrl);

        // Save movie details to MongoDB
        movieRepository.save(movieDetails);

    }
    // Helper method to save files to local storage
    private String saveFileToLocal(MultipartFile file, String folder) throws IOException {
        String fileName = file.getOriginalFilename();
        Path filePath = Paths.get("C:/Users/Dharun.M.R/Desktop/projects/fsad/MovieRays/movies/" + folder + "/" + fileName);
        Files.createDirectories(filePath.getParent()); // Ensure the directory exists
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
        return filePath.toString();
    }

    private void deleteFile(String filePath) {
        if (filePath != null) {
            try {
                Path path = Paths.get(filePath);
                if (Files.exists(path)) {
                    Files.delete(path);  // Deletes the file
                    System.out.println("File deleted: " + filePath);
                }
            } catch (IOException e) {
                throw new RuntimeException("Failed to delete file: " + filePath, e);
            }
        }
    }
}
