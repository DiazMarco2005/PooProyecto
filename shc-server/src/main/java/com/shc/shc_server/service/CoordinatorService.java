package com.shc.shc_server.service;

import com.shc.shc_server.model.Coordinator;
import com.shc.shc_server.repository.CoordinatorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CoordinatorService {

    @Autowired
    private CoordinatorRepository coordinatorRepository;

    // get all
    public List<Coordinator> getAllCoordinators() {
        return coordinatorRepository.findAll();
    }

    // get by id
    public Coordinator getCoordinatorById(Long id) {
        return coordinatorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("not found id: " + id));
    }

    // save a new coordinator
    public Coordinator saveCoordinator(Coordinator coordinator) {
        return coordinatorRepository.save(coordinator);
    }

    // update cordinator already exist
    public Coordinator updateCoordinator(Long id, Coordinator updatedCoordinator) {
        Coordinator existingCoordinator = getCoordinatorById(id);

        existingCoordinator.setName(updatedCoordinator.getName());
        existingCoordinator.setPassword(updatedCoordinator.getPassword());
        existingCoordinator.setEmail(updatedCoordinator.getEmail());
        existingCoordinator.setPosition(updatedCoordinator.getPosition());

        return coordinatorRepository.save(existingCoordinator);
    }

    // delete cordinator
    public void deleteCoordinator(Long id) {
        if (!coordinatorRepository.existsById(id)) {
            throw new RuntimeException("not foundid:  " + id);
        }
        coordinatorRepository.deleteById(id);
    }
}
