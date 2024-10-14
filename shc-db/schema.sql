CREATE USER IF NOT EXISTS 'root' IDENTIFIED BY 'password';

CREATE TABLE activities (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    multiplier DOUBLE NOT NULL,
    scholarship_hours_offered INT NOT NULL,
    coordinator VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    max_capacity INT NOT NULL,
    department VARCHAR(255) NOT NULL,
    description VARCHAR(500),
    date DATE NOT NULL
);

CREATE TABLE coordinators (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    position VARCHAR(255) NOT NULL
);

CREATE TABLE students (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    major VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    scholarship_hours DOUBLE NOT NULL,
    completed_scholarship_hours DOUBLE NOT NULL,
    about_me VARCHAR(500),
    score DOUBLE NOT NULL,
    activity_id BIGINT,
    new_activity_id BIGINT,
    FOREIGN KEY (activity_id) REFERENCES activities(id),
    FOREIGN KEY (new_activity_id) REFERENCES activities(id)
);

CREATE TABLE student_previous_activities (
    student_id BIGINT NOT NULL,
    activity_id BIGINT NOT NULL,
    PRIMARY KEY (student_id, activity_id),
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    FOREIGN KEY (activity_id) REFERENCES activities(id) ON DELETE CASCADE
);

CREATE TABLE student_preferred_activities (
    student_id BIGINT NOT NULL,
    activity_id BIGINT NOT NULL,
    PRIMARY KEY (student_id, activity_id),
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
    FOREIGN KEY (activity_id) REFERENCES activities(id) ON DELETE CASCADE
);

-- Inserts
INSERT INTO coordinators (name, password, email, position)
VALUES ('Coordinador1', 'co123', 'coo1@example.com', 'Departamento TEST');

INSERT INTO activities (name, start_time, end_time, multiplier, scholarship_hours_offered, coordinator, location, max_capacity, department, description, date)
VALUES ('ActividadTEST', '09:00:00', '12:00:00', 1.5, 3, 'Coordinador1', 'CIT', 50, 'Departamento TEST', 'Descripción de actividad', '2024-09-15');

INSERT INTO students (name, password, email, major, year, scholarship_hours, completed_scholarship_hours, about_me, score)
VALUES ('Student1', 'st123', 'st1@example.com', 'Ciencias de la computación', 3, 50.0, 10.0, 'Descripción de estudiante', 4.5);

INSERT INTO student_preferred_activities (student_id, activity_id)
VALUES (1, 1);