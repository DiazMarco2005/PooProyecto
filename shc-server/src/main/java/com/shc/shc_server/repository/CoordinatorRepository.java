package com.shc.shc_server.repository;

import com.shc.shc_server.model.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.shc.shc_server.model.Coordinator;

import java.util.List;

public interface CoordinatorRepository extends JpaRepository<Coordinator, Long> {
    default Coordinator getById(Long id) {
        return findById(id).orElseThrow(() -> new RuntimeException());
    }
}