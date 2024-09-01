package com.shc.shc_server.repository;

import com.shc.shc_server.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    // buscar por id 
    default Student getById(Long id) {
        return findById(id).orElseThrow(() -> new RuntimeException("Student not found with id: " + id));
    }

    // buscar por correo electrónico
    Optional<Student> findByEmail(String email);

    // buscar por nombre
    List<Student> findByNameContainingIgnoreCase(String name);

    // buscar por carrera
    List<Student> findByMajorContainingIgnoreCase(String major);

    // buscar por año
    List<Student> findByYear(Integer year);

    // buscar estudiantes con más de cierto número de horas completadas
    List<Student> findByCompletedScholarshipHoursGreaterThan(Double hours);

    // buscar por actividad actual
    List<Student> findByActivity_Id(Long activityId);
}