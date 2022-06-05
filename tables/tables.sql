//TODO - create new database with this tables
//build crud 
CREATE DATABASE sporty_api;

CREATE TABLE contact_types (
   id_contact_type serial PRIMARY KEY,
   name VARCHAR (50) UNIQUE NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL
);

CREATE TABLE customer_types (
   id_customer_type serial PRIMARY KEY,
   name VARCHAR (50) UNIQUE NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL,
   details  VARCHAR (50)
);

CREATE TABLE customers (
   id_customer serial PRIMARY KEY,
   name VARCHAR (50) UNIQUE NOT NULL,
   surname VARCHAR (50) UNIQUE NOT NULL,
   email VARCHAR (50) UNIQUE NOT NULL,
   phone VARCHAR (50) UNIQUE NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL,
   id_contact_type INTEGER NOT NULL,
   id_status INTEGER NOT NULL,
   id_customer_type INTEGER NOT NULL,

   FOREIGN KEY (id_status)
      REFERENCES status (id_status),
    FOREIGN KEY (id_contact_type)
      REFERENCES contact_types (id_contact_type),
    FOREIGN KEY (id_customer_type)
      REFERENCES customer_types (id_customer_type)
);

CREATE TABLE exercises (
   id_exercise serial PRIMARY KEY,
   name VARCHAR (50) UNIQUE NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL,
   id_status INTEGER NOT NULL,
   video_link VARCHAR(255),
   id_exercise_type INTEGER NOT NULL,
   id_creator INTEGER NOT NULL,
   details VARCHAR(1234),
   FOREIGN KEY (id_status)
      REFERENCES status (id_status),
    FOREIGN KEY (id_exercise_type)
      REFERENCES exercise_types (id_exercise_type),
    FOREIGN KEY (id_creator)
      REFERENCES customers (id_customer)
);

CREATE TABLE groups (
   id_group serial PRIMARY KEY,
   name VARCHAR (50) NOT NULL,
   id_owner INTEGER NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL,
   place VARCHAR (255) NOT NULL,
   date TIMESTAMP NOT NULL,
   id_status INTEGER NOT NULL,

   FOREIGN KEY (id_status)
      REFERENCES status (id_status),
    FOREIGN KEY (id_owner)
      REFERENCES customers (id_customer)
);

CREATE TABLE exercise_types (
   id_exercise_type serial PRIMARY KEY,
   name VARCHAR (50) NOT NULL,
   id_creator INTEGER NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL,
   id_training INTEGER NOT NULL,

   FOREIGN KEY (id_training)
      REFERENCES training (id_training),
    FOREIGN KEY (id_creator)
      REFERENCES customers (id_customer)
);

CREATE TABLE routines (
   id_routine serial PRIMARY KEY,
   name VARCHAR (50) NOT NULL,
   id_creator INTEGER NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL,
   id_status INTEGER NOT NULL,

   FOREIGN KEY (id_status)
      REFERENCES status (id_status),
    FOREIGN KEY (id_creator)
      REFERENCES customers (id_customer)
);

CREATE TABLE routines_groups (
   id_routine_group serial PRIMARY KEY,
   id_routine INTEGER NOT NULL,
   id_group INTEGER NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL,
   id_status INTEGER NOT NULL,

   FOREIGN KEY (id_status)
      REFERENCES status (id_status),
    FOREIGN KEY (id_routine)
      REFERENCES routines (id_routine),
    FOREIGN KEY (id_group)
      REFERENCES groups (id_group)
);

CREATE TABLE status_types (
   id_status_type serial PRIMARY KEY,
   name varchar(50) NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL

);

CREATE TABLE status (
   id_status serial PRIMARY KEY,
   name varchar(50) NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL,
   id_status_type INTEGER NOT NULL,

   FOREIGN KEY (id_status_type)
      REFERENCES status_types (id_status_type)
);

CREATE TABLE training (
   id_training serial PRIMARY KEY,
   name varchar(50) NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL,
   id_creator INTEGER NOT NULL,
   details varchar(255) NOT NULL,

   FOREIGN KEY (id_creator)
      REFERENCES customers (id_customer)
);