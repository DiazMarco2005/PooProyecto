package com.shc.shc_server.controller;

import com.shc.shc_server.model.Coordinator;
import com.shc.shc_server.service.CoordinatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/coordinators")
public class CoordinatorController {

    @Autowired
    private CoordinatorService coordinatorService;

    @GetMapping("/")
    public ResponseEntity<List<Coordinator>> getAllCoordinators() {
        List<Coordinator> coordinators = coordinatorService.getAllCoordinators();
        return ResponseEntity.ok(coordinators);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Coordinator> getCoordinatorById(@PathVariable Long id) {
        Coordinator coordinator = coordinatorService.getCoordinatorById(id);
        return ResponseEntity.ok(coordinator);
    }

    @PostMapping("/")
    public ResponseEntity<Coordinator> createCoordinator(@RequestBody Coordinator coordinator) {
        Coordinator createdCoordinator = coordinatorService.saveCoordinator(coordinator);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCoordinator);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Coordinator> updateCoordinator(@PathVariable Long id, @RequestBody Coordinator coordinator) {
        Coordinator updatedCoordinator = coordinatorService.updateCoordinator(id, coordinator);
        return ResponseEntity.ok(updatedCoordinator);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCoordinator(@PathVariable Long id) {
        coordinatorService.deleteCoordinator(id);
        return ResponseEntity.noContent().build();
    }
}