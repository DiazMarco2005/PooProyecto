package com.shc.shc_server.controller;

import com.shc.shc_server.model.Activity;
import com.shc.shc_server.model.Student;
import com.shc.shc_server.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
public class ActivityController {
    
    @Autowired
    private ActivityService ActivityService;

    @GetMapping("/ping")
    public ResponseEntity<String> ping() {
        return new ResponseEntity<>("pong", HttpStatus.OK);
    }
    

    @PostMapping("{activityId}")
    public ResponseEntity<Activity> addStudentToActivity(@PathVariable Long activityId, @RequestBody Student student) {
        Activity activity = ActivityService.getActivityById(activityId);
        activity.getStudents().add(student);
        student.setActivity(activity);
        Activity updatedActivity = ActivityService.saveActivity(activity);
        return new ResponseEntity<>(updatedActivity, HttpStatus.OK);
    }

}
