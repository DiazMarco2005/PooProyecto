package com.shc.shc_server.service;

import com.shc.shc_server.model.Activity;
import com.shc.shc_server.model.Student;
import com.shc.shc_server.repository.ActivityRepository;
import com.shc.shc_server.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private ActivityRepository activityRepository;

    // get all
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student findByEmail(String email) {
        return studentRepository.findByEmail(email)
        .orElse(null);
    }

    // get by id
    public Student getStudentById(Long id) {
        return studentRepository.findById(id)
        .orElse(null);
    }

    // save a nuw student
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    // update student already exist
    public Student updateStudent(Long id, Student updatedStudent) {
        Student existingStudent = getStudentById(id);

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
        existingStudent.setActivity(updatedStudent.getActivity());

        return studentRepository.save(existingStudent);
    }

    // delete student
    public void deleteStudent(Long id) {
        if (!studentRepository.existsById(id)) {
            ;
        }
        studentRepository.deleteById(id);
    }

    // join to activity
    public Student joinActivity(Long studentId, Long activityId) {
        Student student = getStudentById(studentId);
        Activity activity = activityRepository.findById(activityId)
                .orElse(null);

        if (activity.getStudents().size() >= activity.getMaxCapacity()) {
            ;
        }

        student.getPreferredActivities().add(activity);
        activity.getStudents().add(student);

        studentRepository.save(student);
        activityRepository.save(activity);

        return student;
    }

    // get scholaship hours complete
    public int getCompletedScholarshipHours(Long id) {
        Student student = getStudentById(id);
        return (int) Math.round(student.getCompletedScholarshipHours());
    }
}
