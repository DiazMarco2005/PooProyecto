package com.shc.shc_server.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table (name = "activities")
@Data

public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
}