package com.movierays.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;

@Document(collection = "movies")
public class Movie {

    @Id
    private String id;
    private String imdbId;
    private String name;
    private String director;
    private List<String> genres;
    private String thumbnailUrl;
    private String videoUrl;
    private String accessType;

    // Default constructor
    public Movie() {
    }

    // Parameterized constructor
    public Movie(String name, String director, List<String> genres,
                 String thumbnailUrl, String videoUrl, String accessType) {
        this.name = name;
        this.director = director;
        this.genres = genres;
        this.thumbnailUrl = thumbnailUrl;
        this.videoUrl = videoUrl;
        this.accessType = accessType;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public List<String> getGenres() {
        return genres;
    }

    public void setGenres(List<String> genres) {
        this.genres = genres;
    }

    public String getThumbnailUrl() {
        return thumbnailUrl;
    }

    public void setThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public String getAccessType() {
        return accessType;
    }

    public void setAccessType(String accessType) {
        this.accessType = accessType;
    }
}
