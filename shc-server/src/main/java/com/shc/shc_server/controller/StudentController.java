package com.shc.shc_server.controller;

import com.shc.shc_server.model.Student;
import com.shc.shc_server.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("/")
    public ResponseEntity<List<Student>> getAllStudents() {
        List<Student> students = studentService.getAllStudents();
        return ResponseEntity.ok(students);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        Student student = studentService.getStudentById(id);
        return ResponseEntity.ok(student);
    }

    @PostMapping("/")
    public ResponseEntity<Student> createStudent(@RequestBody Student student) {
        Student createdStudent = studentService.saveStudent(student);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdStudent);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable Long id, @RequestBody Student student) {
        Student updatedStudent = studentService.updateStudent(id, student);
        return ResponseEntity.ok(updatedStudent);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{studentId}/join/{activityId}")
    public ResponseEntity<Student> joinActivity(@PathVariable Long studentId, @PathVariable Long activityId) {
        Student updatedStudent = studentService.joinActivity(studentId, activityId);
        return ResponseEntity.ok(updatedStudent);
    }

    @GetMapping("/{id}/completed-hours")
    public ResponseEntity<Integer> getCompletedScholarshipHours(@PathVariable Long id) {
        int hours = studentService.getCompletedScholarshipHours(id);
        return ResponseEntity.ok(hours);
    }

    @PutMapping("/{id}/updateRecord")
    public ResponseEntity<Student> updateStudentRecord(@PathVariable Long id, @RequestBody Student updatedStudent) {
        Student updatedRecord = studentService.updateStudent(id, updatedStudent);
        return ResponseEntity.ok(updatedRecord);
    }
}