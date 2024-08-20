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
    department VARCHAR(255),
    description TEXT,
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
    major VARCHAR(255),
    year INT,
    scholarship_hours DOUBLE NOT NULL,
    completed_scholarship_hours DOUBLE NOT NULL,
    about_me TEXT,
    score DOUBLE
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

ALTER TABLE students ADD COLUMN new_activity_id BIGINT;
ALTER TABLE students ADD CONSTRAINT fk_new_activity FOREIGN KEY (new_activity_id) REFERENCES activities(id);

