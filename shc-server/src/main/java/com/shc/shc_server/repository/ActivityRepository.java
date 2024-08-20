package com.shc.shc_server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.shc.shc_server.model.Activity;

import java.util.List;

public interface ActivityRepository extends JpaRepository<Activity, Long> {
    default Activity getById(Long id) {
        return findById(id).orElseThrow(() -> new RuntimeException());
    }
}