package com.shc.shc_server.service;

import com.shc.shc_server.model.Activity;
import com.shc.shc_server.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityService {

    @Autowired
    private ActivityRepository activityRepository;

    // get all activities
    public List<Activity> getAllActivities() {
        return activityRepository.findAll();
    }

    // get activity by id
    public Activity getActivityById(Long id) {
        return activityRepository.getById(id);
    }

    // save new activity
    public Activity saveActivity(Activity activity) {
        return activityRepository.save(activity);
    }

    // update activity already exist // modify
    public Activity updateActivity(Long id, Activity updatedActivity) {

        Activity existingActivity = activityRepository.findById(id);

        existingActivity.setName(updatedActivity.getName());
        existingActivity.setStartTime(updatedActivity.getStartTime());
        existingActivity.setEndTime(updatedActivity.getEndTime());
        existingActivity.setMultiplier(updatedActivity.getMultiplier());
        existingActivity.setScholarshipHoursOffered(updatedActivity.getScholarshipHoursOffered());
        existingActivity.setCoordinator(updatedActivity.getCoordinator());
        existingActivity.setLocation(updatedActivity.getLocation());
        existingActivity.setMaxCapacity(updatedActivity.getMaxCapacity());
        existingActivity.setDepartment(updatedActivity.getDepartment());
        existingActivity.setDescription(updatedActivity.getDescription());
        existingActivity.setDate(updatedActivity.getDate());

        return activityRepository.save(existingActivity);
    }

    // delete activity
    public void deleteActivity(Long id) {
        activityRepository.deleteById(id);
    }
}
