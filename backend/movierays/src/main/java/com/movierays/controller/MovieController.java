package com.movierays.controller;

import com.movierays.model.Movie;
import com.movierays.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
@CrossOrigin(origins = "http://localhost:3000")
public class MovieController {
    @Autowired
    private MovieService movieService;

    @GetMapping("/search")
    public List<Movie> searchMovies(@RequestParam String query) {
        return movieService.searchMovies(query);
    }

    @GetMapping("/search/name")
    public Boolean isMovieByNameExists(@RequestParam String name) {
        return movieService.searchMovieByName(name);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Movie> getMovieById(@PathVariable String id) {
        return movieService.getMovieById(id).map(movie -> ResponseEntity.ok(movie)).orElseGet(() -> ResponseEntity.status(404).build());
    }


    @GetMapping("/watch/{id}")
    public ResponseEntity<Resource> getMovie(@PathVariable String id) {
        Resource resource = movieService.viewMovie(id);
        return ResponseEntity.ok().contentType(MediaType.parseMediaType("video/mp4")).body(resource);

    }

    @GetMapping("/thumbnail/{id}")
    public ResponseEntity<Resource> getThumbnail(@PathVariable String id) {
        Resource resource = movieService.viewThumbnail(id);
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG)  // Set appropriate media type
                .body(resource);
    }

    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        List<Movie> movies = movieService.getAllMovies();
        return ResponseEntity.ok(movies);
    }


}
