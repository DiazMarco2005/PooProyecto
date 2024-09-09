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
    
    @PostMapping("{addstudentId}")
    public ResponseEntity<Activity> addStudentToActivity(@PathVariable Long addstudentId, @RequestBody Student student) {
        Activity activity = ActivityService.getActivityById(addstudentId);
        activity.getStudents().add(student);
        student.setActivity(activity);
        Activity updatedActivity = ActivityService.saveActivity(activity);
        return new ResponseEntity<>(updatedActivity, HttpStatus.OK);
    }

    @PostMapping("{removeStudentId}")
    public ResponseEntity<Activity> removeStudentFromActivity(@PathVariable Long removeStudentId, @RequestBody Student student) {
        Activity activity = ActivityService.getActivityById(removeStudentId);
        activity.getStudents().remove(student);
        Activity updatedActivity = ActivityService.saveActivity(activity);
        return new ResponseEntity<>(updatedActivity, HttpStatus.OK);
    }

    @GetMapping("{checkStudent}")
    public ResponseEntity<Boolean>checkStudent(
        @RequestParam Long activityId,
        @RequestParam Long studentId){
        
        Activity Activity = ActivityService.getActivityById(activityId);
        boolean isEnrolled = Activity.getStudents().stream().anyMatch(student -> student.getId() == studentId);
    
        return new ResponseEntity<>(isEnrolled, HttpStatus.OK);
    }
    
    @GetMapping("{generateReport}")
    public ResponseEntity<List<Activity>> generateReport(){
        List<Activity> activities = ActivityService.generateReport();
        return new ResponseEntity<>(activities, HttpStatus.OK);
    }
    
}
