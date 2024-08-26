package com.shc.shc_server.service;

import com.shc.shc_server.model.Activity;
import com.shc.shc_server.model.Student;
import com.shc.shc_server.repository.ActivityRepository;
import com.shc.shc_server.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;
    

    // get al students
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    // get student by id
    public Student getStudentById(Long id) {
        return studentRepository.getById(id);
    }

    // save a new student
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    // update student
    public Student updateStudent(Long id, Student updatedStudent) {
        Student existingStudent = studentRepository.getById(id);
        existingStudent.setName(updatedStudent.getName());
        existingStudent.setPassword(updatedStudent.getPassword());
        existingStudent.setEmail(updatedStudent.getEmail());
        existingStudent.setMajor(updatedStudent.getMajor());
        existingStudent.setYear(updatedStudent.getYear());
        existingStudent.setScholarshipHours(updatedStudent.getScholarshipHours());
        existingStudent.setCompletedScholarshipHours(updatedStudent.getCompletedScholarshipHours());
        existingStudent.setPreviousActivities(updatedStudent.getPreviousActivities());
        existingStudent.setPreferredActivities(updatedStudent.getPreferredActivities());
        existingStudent.setAboutMe(updatedStudent.getAboutMe());
        existingStudent.setScore(updatedStudent.getScore());
        existingStudent.setNewActivity(updatedStudent.getNewActivity());

        return studentRepository.save(existingStudent);
    }

    // delete student
    public void deleteStudent(Long id) {
        studentRepository.deleteById(id);
    }

    //Join the Activity
    public Student joinActivity(Long studentId, Long activityId) {
        
        Student student = studentRepository.getById(studentId);
        Activity activity = activityRepository.getById(activityId);


        if (activity.getStudents().size() >= activity.getMaxCapacity()) {
            throw new RuntimeException("La capacidad máxima de la actividad ya se ha alcanzado.");
        }


        student.getPreferredActivities().add(activity);
        activity.getStudents().add(student);


        studentRepository.save(student);
        activityRepository.save(activity);

        return student;
    }

}
    

