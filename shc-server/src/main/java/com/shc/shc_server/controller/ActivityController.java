package com.shc.shc_server.controller;

import com.shc.shc_server.model.Activity;
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
}
