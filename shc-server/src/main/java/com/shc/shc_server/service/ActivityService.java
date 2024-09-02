package com.shc.shc_server.service;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.qrcode.QRCodeWriter;
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.shc.shc_server.model.Activity;
import com.shc.shc_server.model.Student;
import com.shc.shc_server.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityService {

    @Autowired
    @Lazy
    private ActivityRepository activityRepository;
    
    // get all
    public List<Activity> getAllActivities() {
        return activityRepository.findAll();
    }

    // get actiivity by id
    public Activity getActivityById(Long id) {
        return activityRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("not found id: " + id));
    }

    // save new activity
    public Activity saveActivity(Activity activity) {
        return activityRepository.save(activity);
    }

    // update activity already exist
    public Activity updateActivity(Long id, Activity updatedActivity) {
        Activity existingActivity = getActivityById(id);

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

    // delete activity by id
    public void deleteActivity(Long id) {
        if (!activityRepository.existsById(id)) {
            throw new RuntimeException("not found id: " + id);
        }
        activityRepository.deleteById(id);
    }

    // generate qr code img
    public BufferedImage generateQRCodeImage(String text) throws Exception {
        QRCodeWriter qrCodeWriter = new QRCodeWriter();
        Map<EncodeHintType, Object> hintMap = new HashMap<>();
        hintMap.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.L);
        BitMatrix bitMatrix = qrCodeWriter.encode(text, BarcodeFormat.QR_CODE, 200, 200, hintMap);
        return MatrixToImageWriter.toBufferedImage(bitMatrix);
    }

    // get bytes qr code 
    public byte[] getQRCodeImageBytes(String text) throws Exception {
        BufferedImage qrImage = generateQRCodeImage(text);
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(qrImage, "png", baos);
        return baos.toByteArray();
    }

    public List<Student> getStudentsByActivityId(Long activityId) {
        Activity activity = getActivityById(activityId); 
        return activity.getStudents(); 
    }
}