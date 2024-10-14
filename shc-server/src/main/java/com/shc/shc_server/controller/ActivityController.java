package com.shc.shc_server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shc.shc_server.model.Activity;
import com.shc.shc_server.model.Student;
import com.shc.shc_server.service.ActivityService;

@RestController
@RequestMapping("/api/activities")
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @GetMapping("/")
    public ResponseEntity<List<Activity>> getAllActivities() {
        List<Activity> activities = activityService.getAllActivities();
        return ResponseEntity.ok(activities);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Activity> getActivityById(@PathVariable Long id) {
        Activity activity = activityService.getActivityById(id);
        return ResponseEntity.ok(activity);
    }


    @GetMapping("/coordinator-name/{name}")
    public ResponseEntity<List<Activity>> getActivityByCoordinatorEmail(@PathVariable String name) {
        List<Activity> activities = activityService.getActivitiesByNameCoordinator(name);
        return ResponseEntity.ok(activities);
    }

    @PostMapping("/")
    public ResponseEntity<Activity> createActivity(@RequestBody Activity activity) {
        Activity createdActivity = activityService.saveActivity(activity);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdActivity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Activity> updateActivity(@PathVariable Long id, @RequestBody Activity activity) {
        Activity updatedActivity = activityService.updateActivity(id, activity);
        return ResponseEntity.ok(updatedActivity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteActivity(@PathVariable Long id) {
        activityService.deleteActivity(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}/students")
    public ResponseEntity<List<Student>> getStudentsByActivityId(@PathVariable Long id) {
        List<Student> students = activityService.getStudentsByActivityId(id);
        return ResponseEntity.ok(students);
    }

    @GetMapping("/{id}/scholarshipHourValue")
    public ResponseEntity<Double> getScholarshipHourValue(@PathVariable Long id) {
        Activity activity = activityService.getActivityById(id);
        Double scholarshipHourValue = activity.getMultiplier() * activity.getScholarshipHoursOffered();
        return ResponseEntity.ok(scholarshipHourValue);
    }

    @PostMapping("/{activityId}/addStudent/{studentId}")
    public ResponseEntity<Activity> addStudentToActivity(@PathVariable Long activityId, @PathVariable Long studentId) {
        Activity updatedActivity = activityService.addStudent(activityId, studentId);
        return ResponseEntity.ok(updatedActivity);
    }

    @DeleteMapping("/{activityId}/removeStudent/{studentId}")
    public ResponseEntity<Activity> removeStudentFromActivity(@PathVariable Long activityId, @PathVariable Long studentId) {
        Activity updatedActivity = activityService.removeStudent(activityId, studentId);
        return ResponseEntity.ok(updatedActivity);
    }

    @PutMapping("/{id}/disableJoining")
    public ResponseEntity<Activity> disableJoining(@PathVariable Long id) {
        Activity updatedActivity = activityService.disableJoining(id);
        return ResponseEntity.ok(updatedActivity);
    }

    @GetMapping("/{id}/startQRCode")
    public ResponseEntity<byte[]> generateStartQRCode(@PathVariable Long id) {
        try {
            Activity activity = activityService.getActivityById(id);
            String qrText = "Start activity: " + activity.getName() + " | ID: " + activity.getId();
            byte[] qrImage = activityService.getQRCodeImageBytes(qrText);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_PNG);
            headers.setContentLength(qrImage.length);
            return new ResponseEntity<>(qrImage, headers, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}/endQRCode")
    public ResponseEntity<byte[]> generateEndQRCode(@PathVariable Long id) {
        try {
            Activity activity = activityService.getActivityById(id);
            String qrText = "End activity: " + activity.getName() + " | ID: " + activity.getId();
            byte[] qrImage = activityService.getQRCodeImageBytes(qrText);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.IMAGE_PNG);
            headers.setContentLength(qrImage.length);
            return new ResponseEntity<>(qrImage, headers, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}