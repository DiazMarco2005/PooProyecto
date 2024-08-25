package com.shc.shc_server.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "students")
@Data
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String major;

    @Column(nullable = false)
    private Integer year;

    @Column(nullable = false)
    private Double scholarshipHours;

    @Column(nullable = false)
    private Double completedScholarshipHours;

    @ManyToMany
    @JoinTable(
            name = "student_previous_activities",
            joinColumns = @JoinColumn(name = "student_id"),
            inverseJoinColumns = @JoinColumn(name = "activity_id")
    )
    private List<Activity> previousActivities;

    @ManyToMany
    @JoinTable(
            name = "student_preferred_activities",
            joinColumns = @JoinColumn(name = "student_id"),
            inverseJoinColumns = @JoinColumn(name = "activity_id")
    )
    private List<Activity> preferredActivities;

    @Column(length = 500)
    private String aboutMe;

    @Column(nullable = false)
    private Double score;

    @ManyToOne
    @JoinColumn(name = "new_activity_id")
    private Activity newActivity;

    @ManyToOne
    @JoinColumn(name = "activity_id")
    private Activity activity;
}