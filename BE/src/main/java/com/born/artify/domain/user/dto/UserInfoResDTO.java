package com.born.artify.domain.user.dto;

import java.time.LocalDateTime;

public class UserInfoResDTO {

    private final String username;
    private final String email;
    private final String profile_url;
    private final String collection_id;
    private final LocalDateTime createdAt;
    private final LocalDateTime updated_at;

    public UserInfoResDTO(String profile_url, LocalDateTime updated_at, LocalDateTime createdAt, String collection_id, String email, String username) {
        this.profile_url = profile_url;
        this.updated_at = updated_at;
        this.createdAt = createdAt;
        this.collection_id = collection_id;
        this.email = email;
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getProfile_url() {
        return profile_url;
    }

    public String getCollection_id() {
        return collection_id;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdated_at() {
        return updated_at;
    }
}
