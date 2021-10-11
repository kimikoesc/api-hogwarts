CREATE TABLE houses (
    id SERIAL NOT NULL,
    house_name VARCHAR(255) NOT NULL,
    founder VARCHAR(255) NOT NULL,
    animal VARCHAR (255) NOT NULL
);

CREATE TABLE students (
    id SERIAL NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    house VARCHAR(255) NOT NULL
);

CREATE TABLE professors (
    id SERIAL NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    gender VARCHAR(10) NOT NULL
);