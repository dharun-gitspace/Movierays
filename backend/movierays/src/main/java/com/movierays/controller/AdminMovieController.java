package com.movierays.controller;

import com.movierays.model.Movie;
import com.movierays.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/admin/movies")
public class AdminMovieController {
    @Autowired
    private MovieService movieService;

//    @PostMapping
//    public ResponseEntity<Movie> createMovie(@RequestBody Movie movie) {
//        Movie createdMovie = movieService.createMovie(movie);
//        return ResponseEntity.ok(createdMovie);
//    }

    @PutMapping("/{id}")
    public ResponseEntity<Movie> updateMovie(@PathVariable String id, @RequestBody Movie movie) {
        Movie updatedMovie = movieService.updateMovie(id, movie);
        return ResponseEntity.ok(updatedMovie);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMovie(@PathVariable String id) {
        movieService.deleteMovie(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping
    public ResponseEntity<String> uploadMovie(
            @RequestParam("thumbnail") MultipartFile thumbnail,
            @RequestParam("trailer") MultipartFile trailer,
            @RequestParam("movieDetails") String movieDetailsJson // assuming movie details in JSON format
    ) {
        try {
            movieService.uploadMovie(thumbnail, trailer, movieDetailsJson);
            return ResponseEntity.ok("Movie uploaded successfully!");
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Failed to upload movie");
        }
    }
}
