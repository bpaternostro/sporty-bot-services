dbs tables

status_type
insert into status_types (id_status_type,name,createdAt,updatedAt)
values(
	default,
	'routine',
	current_timestamp,
	current_timestamp
);

customer_types
insert into "customer_types" (id_customer_type,name,createdAt,updatedAt)
values(
	default,
	'trainer',
	current_timestamp,
	current_timestamp
),
(
	default,
	'admin',
	current_timestamp,
	current_timestamp
),
(
	default,
	'trainee',
	current_timestamp,
	current_timestamp
),
(
	default,
	'coach',
	current_timestamp,
	current_timestamp
);

contact_types
insert into contact_types (id_contact_type,name,createdAt,updatedAt)
values(default,'phone',current_timestamp,current_timestamp),
(default,'email',current_timestamp,current_timestamp),
(default,'whatsapp',current_timestamp,current_timestamp);

customers
insert into customers (id_customer,name,surname,email,phone,id_contact_type,id_status,createdAt,updatedAt,id_customer_type)
values(
	default,
	'Bruno',
	'Pater',
	'bruno.paternostro@gmail.com',
	'1130729426',
	1,
	5,
	current_timestamp,
	current_timestamp,
	3
),
(
	default,
	'Juan Pablo',
	'Paternostro',
	'juanpi180190@gmail.com',
	'1530640718',
	1,
	5,
	current_timestamp,
	current_timestamp,
	1
),
(
	default,
	'Jimena',
	'Manzanares',
	'jimenamanzanares@gmail.com',
	'1531850430',
	1,
	5,
	current_timestamp,
	current_timestamp,
	3
);

status
insert into status (id_status,name,createdAt,updatedAt,id_status_type)
values
(default,'approved',current_timestamp,current_timestamp,1),
(default,'pending approve',current_timestamp,current_timestamp,1),
(default,'rejected',current_timestamp,current_timestamp,1),
(default,'pending update',current_timestamp,current_timestamp,1);

insert into exercise_types
values
(default,'Weight-Bearing Exercise',10,current_timestamp,current_timestamp,7),
(default,'Non-Weight-Bearing Exercise',10,current_timestamp,current_timestamp,7),
(default,'Calisthenics',10,current_timestamp,current_timestamp,9),
(default,'Weightlifting',10,current_timestamp,current_timestamp,11),
(default,'Aerobic Intervals',10,current_timestamp,current_timestamp,10),
(default,'Aerobic',10,current_timestamp,current_timestamp,10),
(default,'Balance and Stability',10,current_timestamp,current_timestamp,7),
(default,'Coordination and Agility',10,current_timestamp,current_timestamp,8),
(default,'Dynamic Stretching',10,current_timestamp,current_timestamp,11),
(default,'Static Stretching',10,current_timestamp,current_timestamp,11)

insert into training
values
(default,'Strength Training',current_timestamp,current_timestamp,10,'pending'),
(default,'Aerobic Training',current_timestamp,current_timestamp,10,'pending'),
(default,'Balance and Stability Training',current_timestamp,current_timestamp,10,'pending'),	
(default,'Coordination and Agility Training',current_timestamp,current_timestamp,10,'pending'),	
(default,'Flexibility and Mobility Training',current_timestamp,current_timestamp,10,'pending')	

insert into sporty_api.public.exercises 
values
(default,'Body-weight squats',current_timestamp,current_timestamp,5,'https://',11,10,'none'),
(default,'Standing biceps curls',current_timestamp,current_timestamp,5,'https://',11,10,'none'),
(default,'Leg presses',current_timestamp,current_timestamp,5,'https://',11,10,'none'),
(default,'Seated rows',current_timestamp,current_timestamp,5,'https://',11,10,'none'),
(default,'Seated biceps curls',current_timestamp,current_timestamp,5,'https://',11,10,'none'),
(default,'Hamstring curls',current_timestamp,current_timestamp,5,'https://',11,10,'none'),
(default,'Pull-ups',current_timestamp,current_timestamp,5,'https://',11,10,'none'),
(default,'Planks',current_timestamp,current_timestamp,5,'https://',11,10,'none'),
(default,'Glute bridges',current_timestamp,current_timestamp,5,'https://',11,10,'none'),
(default,'Lunges',current_timestamp,current_timestamp,5,'https://',11,10,'none'),
(default,'Handstands',current_timestamp,current_timestamp,5,'https://',11,10,'none')