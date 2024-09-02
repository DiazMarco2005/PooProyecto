package com.shc.shc_server.controller;

import com.shc.shc_server.model.Activity;
import com.shc.shc_server.model.Student;
import com.shc.shc_server.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import java.util.List;

@RestController
@RequestMapping("/activities")
public class ActivityController {
    
    @Autowired
    @Lazy
    private ActivityService activityService;

    @GetMapping("/ping")
    public ResponseEntity<String> ping() {
        return new ResponseEntity<>("pong", HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<Activity>> getAllActivities() {
        List<Activity> activities = activityService.getAllActivities();
        return new ResponseEntity<>(activities, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Activity> getActivityById(@PathVariable Long id) {
        Activity activity = activityService.getActivityById(id);
        return new ResponseEntity<>(activity, HttpStatus.OK);
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
    

    @GetMapping("/mi_ruta/")
    public ResponseEntity<String> mi_metodo () {
        return new ResponseEntity<>("ejemplo", HttpStatus.OK);
    }
    
    @GetMapping("/{id}/students")
    public List<Student> getStudentsByActivityId(@PathVariable("id") Long activityId) {
        return activityService.getStudentsByActivityId(activityId);
    }

    @GetMapping("/{id}/scholarship_Hour_Value/")
    public ResponseEntity<Integer> scholarship_Hour_Value (@PathVariable Long id) {
        Integer activityhours = 0;
     try{
        activityhours = activityService.getActivityById(id).getScholarshipHoursOffered();
     } catch (Exception e) {
        //
        activityhours = -1;
     }
        return new ResponseEntity<>(activityhours, HttpStatus.OK);
    
    @PostMapping("/add/{addstudentId}")
    public ResponseEntity<Activity> addStudentToActivity(@PathVariable Long addstudentId, @RequestBody Student student) {
        Activity activity = ActivityService.getActivityById(addstudentId);
        activity.getStudents().add(student);
        student.setActivity(activity);
        Activity updatedActivity = ActivityService.saveActivity(activity);
        return new ResponseEntity<>(updatedActivity, HttpStatus.OK);
    }

    @PostMapping("/remove/{removeStudentId}")
    public ResponseEntity<Activity> removeStudentFromActivity(@PathVariable Long removeStudentId, @RequestBody Student student) {
        Activity activity = ActivityService.getActivityById(removeStudentId);
        activity.getStudents().remove(student);
        Activity updatedActivity = ActivityService.saveActivity(activity);
        return new ResponseEntity<>(updatedActivity, HttpStatus.OK);
    }

}
