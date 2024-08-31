package com.shc.shc_server.controller;

import com.shc.shc_server.model.Coordinator;
import com.shc.shc_server.service.CoordinatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/coordinators")
public class CoordinatorController {

    @Autowired
    private CoordinatorService coordinatorService;

    @GetMapping("/ping")
    public ResponseEntity<String> ping() {
        return new ResponseEntity<>("pong", HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<Coordinator>> getAllCoordinators() {
        List<Coordinator> coordinators = coordinatorService.getAllCoordinators();
        return new ResponseEntity<>(coordinators, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Coordinator> getCoordinatorById(@PathVariable Long id) {
        Coordinator coordinator = coordinatorService.getCoordinatorById(id);
        return new ResponseEntity<>(coordinator, HttpStatus.OK);
    }
}
