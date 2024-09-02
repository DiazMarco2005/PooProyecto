package com.shc.shc_server.controller;

import com.shc.shc_server.model.Activity;
import com.shc.shc_server.model.Coordinator;
import com.shc.shc_server.model.Student;
import com.shc.shc_server.service.ActivityService;
import com.shc.shc_server.service.CoordinatorService;
import com.shc.shc_server.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.shc.shc_server.service.ActivityService;

@RestController
@RequestMapping("/coordinators")

public class CoordinatorController {

    @Autowired
    @Lazy
    private CoordinatorService coordinatorService;
    private ActivityService activityService;
    private StudentService studentService;

    @GetMapping("/ping")
    public ResponseEntity<String> ping() {
        return new ResponseEntity<>("pong", HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<Coordinator>> getAllCoordinators() {
        List<Coordinator> coordinators = coordinatorService.getAllCoordinators();
        return new ResponseEntity<>(coordinators, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Coordinator> getCoordinatorById(@PathVariable Long id) {
        Coordinator coordinator = coordinatorService.getCoordinatorById(id);
        return new ResponseEntity<>(coordinator, HttpStatus.OK);
    }

    @PutMapping("/joinActivity")
    public void joinActivity(@RequestBody Long idStudent, Long activity) {

        Activity activit = activityService.getActivityById(activity);
        List<Student> students = activit.getStudents();
        Student studentAdded = studentService.getStudentById(idStudent);
        students.add(studentAdded);
        activit.setStudents(students);
        activityService.updateActivity(activity, activit);

    };

    @PutMapping("/removeStudent/{id}/")
    public void removeStudent(@RequestBody Long idStudent, Long activity) {
        System.out.println(idStudent);
        Activity activit = activityService.getActivityById(activity);
        Student studentRemoved = studentService.getStudentById(idStudent);
        List<Student> students = activit.getStudents();
        if (students.contains(studentRemoved)) {

            students.remove(studentRemoved);
            activit.setStudents(students);
            activityService.updateActivity(idStudent, activit);
        }

        else
            throw new RuntimeException("Student not found: " + idStudent);

    }

    @GetMapping("/Generar_Reporte/{id}")
    public ResponseEntity<Activity> getActivityById(@PathVariable Long id) {
        Activity activity = activityService.getActivityById(id);
        return new ResponseEntity<>(activity, HttpStatus.OK);
    }
};
