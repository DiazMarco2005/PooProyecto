package com.shc.shc_server.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table (name = "students")
@Data

public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
}
