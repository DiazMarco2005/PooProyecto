package com.shc.shc_server.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table (name = "coordinators")
@Data

public class Coordinator {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
}