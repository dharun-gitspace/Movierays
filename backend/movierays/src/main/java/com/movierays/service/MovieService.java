package com.movierays.service;

import com.movierays.model.Movie;
import com.movierays.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    // Add a new movie
    public Movie addMovie(Movie movie) {
        return movieRepository.save(movie);
    }

    // Get all movies
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    // Get a movie by ID
    public Optional<Movie> getMovieById(String id) {
        return movieRepository.findById(id);
    }

    // Update an existing movie
    public Movie updateMovie(String id, Movie updatedMovie) {
        Optional<Movie> movieOptional = movieRepository.findById(id);
        if (movieOptional.isPresent()) {
            Movie movie = movieOptional.get();
            movie.setName(updatedMovie.getName());
            movie.setDirector(updatedMovie.getDirector());
            movie.setGenres(updatedMovie.getGenres());
            movie.setAccessType(updatedMovie.getAccessType());
            movie.setThumbnailUrl(updatedMovie.getThumbnailUrl());
            movie.setVideoUrl(updatedMovie.getVideoUrl());
            return movieRepository.save(movie);
        }
        return null;
    }

    // Delete a movie by ID
    public void deleteMovie(String id) {
        movieRepository.deleteById(id);
    }
}
