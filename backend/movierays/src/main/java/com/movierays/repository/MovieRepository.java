package com.movierays.repository;

import com.movierays.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends MongoRepository<Movie, String> {
    @Query("{ 'name': { $regex: ?0, $options: 'i' } }")
        // Case-insensitive search
    List<Movie> findByNameContaining(String name);
}
