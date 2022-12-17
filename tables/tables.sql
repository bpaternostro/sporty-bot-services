//TODO - create new database with this tables
//build crud 
CREATE DATABASE sporty_api;

CREATE TABLE block_exercises (
	id_block_routine serial PRIMARY KEY,
	id_routine INTEGER NOT NULL,
	block INTEGER NOT NULL,
	day_of_week INTEGER NOT NULL,
   id_exercise INTEGER NOT NULL,
	serie INTEGER NOT NULL,
	reps varchar NOT NULL,
	weight NUMERIC (3, 2),
	pause varchar NOT NULL,
	observation varchar(255) NOT NULL,
   	createdAt TIMESTAMP NOT NULL,
   	updatedAt TIMESTAMP NOT NULL,

    FOREIGN KEY (id_routine)
      REFERENCES routines (id_routine),
	FOREIGN KEY (id_exercise)
      REFERENCES exercises (id_exercise)
);

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
   description  VARCHAR (50)
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

CREATE TABLE cycles (
   id_cycle serial PRIMARY KEY,
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

CREATE TABLE exercises (
   id_exercise serial PRIMARY KEY,
   name VARCHAR (50) UNIQUE NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL,
   id_status INTEGER NOT NULL,
   video_link VARCHAR(255),
   id_exercise_type INTEGER NOT NULL,
   id_creator INTEGER NOT NULL,
   id_muscle_group INTEGER[] NOT NULL,
   id_level INTEGER NOT NULL
   image VARCHAR(255),
   description VARCHAR(1234),
   FOREIGN KEY (id_status)
      REFERENCES status (id_status),
   FOREIGN KEY (id_exercise_type)
      REFERENCES exercise_types (id_exercise_type),
   FOREIGN KEY (id_creator)
      REFERENCES customers (id_customer),
   FOREIGN KEY (id_level)
      REFERENCES levels (id_level)
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

CREATE TABLE levels (
   id_level serial PRIMARY KEY,
   name VARCHAR (50) NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL
);

CREATE TABLE restriction (
   id_restriction serial PRIMARY KEY,
   name VARCHAR (50) NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL
);

CREATE TABLE routine (
   id_routine serial PRIMARY KEY,
   name VARCHAR (50) NOT NULL,
   id_creator INTEGER NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL,
   id_status INTEGER NOT NULL,
   id_system INTEGER NOT NULL,
   id_cadence INTEGER NOT NULL,
   warm_up varchar(255) NOT NULL,
   cardio varchar(50),
   duration varchar(50),
   pre_exhaustion varchar(50),
   activation varchar(50),
   rest_between_exercises varchar(50),
   days_of_week INTEGER[] NOT NULL,
   id_goal INTEGER not null,
   id_level INTEGER not null,
   id_routine_type INTEGER not null,


   FOREIGN KEY (id_status)
      REFERENCES status (id_status),
    FOREIGN KEY (id_creator)
      REFERENCES customers (id_customer),
   FOREIGN KEY (id_goal)
      REFERENCES goals (id_goal),
   FOREIGN KEY (id_routine_type)
      REFERENCES routines_types (id_routine_type)
);

CREATE TABLE routines_types (
   id_routine_type serial PRIMARY KEY,
   name VARCHAR (50) NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL
);

CREATE TABLE goals (
   id_goal serial PRIMARY KEY,
   name varchar(50) NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL

);

CREATE TABLE routines_cycles (
	id_routine_cycle serial PRIMARY KEY,
	block INTEGER NOT NULL,
	id_routine INTEGER NOT NULL,
   day_of_week INTEGER NOT NULL,
   exercises INTEGER[] NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL,

    FOREIGN KEY (id_routine)
      REFERENCES routines (id_routine)
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
   id_training_method INTEGER NOT NULL,
   name varchar(50) NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL,
   id_creator INTEGER NOT NULL,
   description varchar(255) NOT NULL,

   FOREIGN KEY (id_creator)
      REFERENCES customers (id_customer),
   FOREIGN KEY (id_training_method)
      REFERENCES training_methods (id_training_method)
);

CREATE TABLE training_methods (
   id_training_method serial PRIMARY KEY,
   name varchar(50) NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL,
   id_creator INTEGER NOT NULL,
   description varchar(255) NOT NULL,

   FOREIGN KEY (id_creator)
      REFERENCES customers (id_customer)
);

CREATE TABLE lan (
   id_lan serial PRIMARY KEY,
   name varchar(50) NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL,
   id_creator INTEGER NOT NULL
);

CREATE TABLE lists (
   id_list serial PRIMARY KEY,
   name varchar(50) NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL,
   description VARCHAR(255)
);

CREATE TABLE lists_options (
   id_list_options serial PRIMARY KEY,
   id_list INTEGER NOT NULL,
   id_value_option INTEGER NOT NULL,
   name varchar(50) NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL,
   id_lan INTEGER NOT NULL,
   image VARCHAR(255),

   FOREIGN KEY (id_list)
      REFERENCES lists (id_list),
   FOREIGN KEY (id_lan)
      REFERENCES lan (id_lan)
);

CREATE TABLE muscle_group (
   id_muscle_group serial PRIMARY KEY,
   id_muscle_group_type INTEGER NOT NULL,
   name varchar(50) NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL,
   image VARCHAR(255),

   FOREIGN KEY (id_muscle_group_type)
      REFERENCES muscle_group_type (id_muscle_group_type)
);

CREATE TABLE muscle_group_type (
   id_muscle_group_type serial PRIMARY KEY,
   name varchar(50) NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL,
   image VARCHAR(255)
);

relationals
CREATE TABLE routine_restrictions (
   id_routine_restriction serial PRIMARY KEY,
   id_routine INTEGER NOT NULL,
   id_restriction INTEGER NOT NULL,
   createdAt TIMESTAMP NOT NULL,
   updatedAt TIMESTAMP NOT NULL,
   FOREIGN KEY (id_routine)
      REFERENCES routine (id_routine),
    FOREIGN KEY (id_restriction)
      REFERENCES restriction (id_restriction)
);