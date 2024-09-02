package com.shc.shc_server.controller;

import com.shc.shc_server.model.Student;
import com.shc.shc_server.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class StudentController {

    @Autowired
    private StudentService StudentService;

    @GetMapping("/verifyBecaHours/{id}")
    public ResponseEntity<Double> verifyBecaHours(@PathVariable Long id){
        Student student = StudentService.getStudentById(id);
        if (student != null){
            Double completedHours = student.getCompletedScholarshipHours();
            return new ResponseEntity<>(completedHours , HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



}
