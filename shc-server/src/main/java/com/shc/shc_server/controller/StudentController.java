package com.shc.shc_server.controller;

import com.shc.shc_server.model.Student;
import com.shc.shc_server.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {
    
    @Autowired
    @Lazy
    private StudentService studentService;

    @GetMapping("/ping")
    public ResponseEntity<String> ping() {
        return new ResponseEntity<>("pong", HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> students = studentService.getAllStudents();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        Student student = studentService.getStudentById(id);
        return new ResponseEntity<>(student, HttpStatus.OK);
    }
    
    @GetMapping("/studentScholarshipHours/{id}")
    public ResponseEntity<Double> studentScholarshipHours(@PathVariable Long id)
    {
        Student student = studentService.getStudentById(id);
        double hours= student.getCompletedScholarshipHours();
        return new ResponseEntity<>(hours, HttpStatus.OK);
    }
}
