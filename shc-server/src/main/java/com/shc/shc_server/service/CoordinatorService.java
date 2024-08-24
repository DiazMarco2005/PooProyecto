package com.shc.shc_server.service;

import com.shc.shc_server.model.Activity;
import com.shc.shc_server.model.Coordinator;
import com.shc.shc_server.repository.ActivityRepository;
import com.shc.shc_server.repository.CoordinatorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CoordinatorService {

    @Autowired
    private CoordinatorRepository coordinatorRepository;

    @Autowired
    private ActivityRepository activityRepository;

    // get all cordinators
    public List<Coordinator> getAllCoordinators() {
        return coordinatorRepository.findAll();
    }

    // get coordinator by id
    public Coordinator getCoordinatorById(Long id) {
        return coordinatorRepository.getById(id);
    }

    // save a new coordinator
    public Coordinator saveCoordinator(Coordinator coordinator) {
        return coordinatorRepository.save(coordinator);
    }

    // update cordinator already exist
    public Coordinator updateCoordinator(Long id, Coordinator updatedCoordinator) {

        Coordinator existingCoordinator = coordinatorRepository.getById(id);

        existingCoordinator.setName(updatedCoordinator.getName());
        // ...
        return coordinatorRepository.save(existingCoordinator);
    }

    // delete cordinator
    public void deleteCoordinator(Long id) {
        coordinatorRepository.deleteById(id);
    }
    // añadir actividad
    public void addActivity(Activity activity) {
        activityRepository.save(activity); 
    }
}
