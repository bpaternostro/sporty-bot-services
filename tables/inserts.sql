dbs tables

status_type
insert into status_types (id_status_type,name,createdAt,updatedAt)
values(
	default,
	'routine',
	current_timestamp,
	current_timestamp
);

insert into block_exercises values
(default,3,1,1,28,3,'10-10-10-8',45.50,'15´´','N/A',current_timestamp,current_timestamp),
(default,3,1,1,28,3,'10-10-10-8',45.50,'15´´','N/A',current_timestamp,current_timestamp),
(default,3,1,1,28,3,'10-10-10-8',45.50,'15´´','N/A',current_timestamp,current_timestamp),
(default,3,2,1,28,3,'10-8-8-8',45.50,'15´´','N/A',current_timestamp,current_timestamp),
(default,3,2,1,28,3,'10-10-10-8',45.50,'15´´','N/A',current_timestamp,current_timestamp),
(default,3,2,1,28,3,'10-10-10-8',45.50,'15´´','N/A',current_timestamp,current_timestamp),
(default,3,3,1,28,3,'10-9-10-8',45.50,'15´´','N/A',current_timestamp,current_timestamp),
(default,3,3,1,28,3,'10-9-10-8',45.50,'15´´','N/A',current_timestamp,current_timestamp),
(default,3,3,1,28,3,'10-9-10-8',90.50,'15´´','N/A',current_timestamp,current_timestamp)

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
(default,1,'Strength Training',current_timestamp,current_timestamp,10,'pending'),
(default,1,'Aerobic Training',current_timestamp,current_timestamp,10,'pending'),
(default,1,'Balance and Stability Training',current_timestamp,current_timestamp,10,'pending'),	
(default,1,'Coordination and Agility Training',current_timestamp,current_timestamp,10,'pending'),	
(default,1,'Flexibility and Mobility Training',current_timestamp,current_timestamp,10,'pending')	

insert into training_methods
values
(default,'Functional',current_timestamp,current_timestamp,10,'pending');


insert into exercises(id_exercise,name,createdat,updatedat,id_status,video_link,id_exercise_type,id_creator,id_muscle_group,image,description)
values
(default,'Standing biceps curls',current_timestamp,current_timestamp,1,'https://',11,2,ARRAY[1, 2],'', ''),
(default,'Leg presses',current_timestamp,current_timestamp,1,'https://',11,2,ARRAY[1, 2],'', ''),
(default,'Seated rows',current_timestamp,current_timestamp,1,'https://',11,2,ARRAY[1, 8],'', ''),
(default,'Seated biceps curls',current_timestamp,current_timestamp,1,'https://',11,2,ARRAY[1, 4],'', ''),
(default,'Hamstring curls',current_timestamp,current_timestamp,1,'https://',11,2,ARRAY[1, 5],'', ''),
(default,'Pull-ups',current_timestamp,current_timestamp,1,'https://',11,2,ARRAY[1, 6],'', ''),
(default,'Planks',current_timestamp,current_timestamp,1,'https://',11,2,ARRAY[1, 9],'', ''),
(default,'Glute bridges',current_timestamp,current_timestamp,1,'https://',11,2,ARRAY[1, 1],'', ''),
(default,'Lunges',current_timestamp,current_timestamp,1,'https://',11,2,ARRAY[1, 7],'', ''),
(default,'Handstands',current_timestamp,current_timestamp,1,'https://',11,2,ARRAY[1, 4],'', ''),
(default,'Body-weight squats',current_timestamp,current_timestamp,1,'https://',11,2,ARRAY[1, 4],'', '')

insert into levels values
(default,'Starter',current_timestamp,current_timestamp),
(default,'Medium',current_timestamp,current_timestamp),
(default,'Advance',current_timestamp,current_timestamp),
(default,'Expert',current_timestamp,current_timestamp)


insert into restriction values (default,'obesity',current_timestamp,current_timestamp)

insert into routine values
(default, 'Core routine',9, current_timestamp,current_timestamp,5,1,1,'3´ de bicicleta | eliptica | correr','Included in the routine','50´','No','No','check pausa',ARRAY[1,3,5],1,2,2)

insert into routines_types values
(default, 'Weekly',current_timestamp,current_timestamp),
(default, 'Biweekly',current_timestamp,current_timestamp),
(default, 'Triweekly',current_timestamp,current_timestamp),
(default, 'Monthly',current_timestamp,current_timestamp),
(default, 'Quarterly',current_timestamp,current_timestamp)

insert into goals values(default, 'Lose weight', current_timestamp,current_timestamp)

LANS
insert into lan(id_lan,name,createdAt,updatedAt,id_creator)
values(
	default,
	'spa',
	current_timestamp,
	current_timestamp,
	10
),
(
	default,
	'eng',
	current_timestamp,
	current_timestamp,
	10
),
(
	default,
	'por',
	current_timestamp,
	current_timestamp,
	10
)

lists
insert into lists (id_list,name,createdAt,updatedAt,description)
values(
	default,
	'muscle groups',
	current_timestamp,
	current_timestamp,
	'Different types of muscle groups'
),
(
	default,
	'muscle group type',
	current_timestamp,
	current_timestamp,
	'Muscle group type',
);
(default,'routines_systems',current_timestamp,current_timestamp,'routines systems'),
(default,'cadence',current_timestamp,current_timestamp,'routines cadence'),
(
	default,
	'gender',
	current_timestamp,
	current_timestamp,
	'Female/Male/Transgender/Neuter'
),
(
	default,
	'age',
	current_timestamp,
	current_timestamp,
	'people age'
),
(
	default,
	'weight',
	current_timestamp,
	current_timestamp,
	'people weight'
),
(
	default,
	'exercise weight',
	current_timestamp,
	current_timestamp,
	'people weight'
),
(
	default,
	'level',
	current_timestamp,
	current_timestamp,
	'people level'
),
(
	default,
	'yes/no',
	current_timestamp,
	current_timestamp,
	'Yes/no'
),
values(
	default,
	'series',
	current_timestamp,
	current_timestamp,
	'block series'
),
(
	default,
	'reps',
	current_timestamp,
	current_timestamp,
	'reps in exercises'
),
(
	default,
	'pause',
	current_timestamp,
	current_timestamp,
	'pause between exercises'
)

muscle_group_type
insert into muscle_group_type(id_muscle_group_type, name, createdat, updatedat,image)
values(default,'Upper body',current_timestamp,current_timestamp,'upper-body.png'),
(default,'Arms',current_timestamp,current_timestamp,'arms.png'),
(default,'Legs',current_timestamp,current_timestamp,'legs.png')

muscle_group
insert into muscle_group(id_muscle_group,id_muscle_group_type,name,createdat,updatedat,image)
values
(default,1,'Pecs',current_timestamp,current_timestamp,'Pecs.png'),
(default,1,'Trapezius',current_timestamp,current_timestamp,'Trapezius.png'),
(default,1,'Back',current_timestamp,current_timestamp,'Back.png'),
(default,1,'Abdominals',current_timestamp,current_timestamp,'Abdominals.png'),
(default,1,'Latissimus dorsi',current_timestamp,current_timestamp,'Latissimus-dorsi.png'),
(default,2,'Deltoid',current_timestamp,current_timestamp,'Deltoid.png'),
(default,2,'Bíceps',current_timestamp,current_timestamp,'Bíceps.png'),
(default,2,'Triceps',current_timestamp,current_timestamp,'Triceps.png'),
(default,2,'Forearms',current_timestamp,current_timestamp,'Forearms.png'),
(default,3,'Quadriceps',current_timestamp,current_timestamp,'Quadriceps.png'),
(default,3,'Femoral biceps',current_timestamp,current_timestamp,'Femoral-biceps.png'),
(default,3,'Adductors',current_timestamp,current_timestamp,'Adductors.png'),
(default,3,'Calves',current_timestamp,current_timestamp,'Calves.png'),
(default,3,'Glutes',current_timestamp,current_timestamp,'Glutes.png'),
(default,3,'Hamstrings',current_timestamp,current_timestamp,'Hamstrings.png')

lists_options
//tomar de aca los IDs de id_value_option
select 2,name,current_timestamp,current_timestamp,1,CONCAT(name,'.png'),id_muscle_group from muscle_group
insert into lists_options(id_list,name,createdat,updatedat,id_lan,image,id_value_option)
values
(default,3,1,'Clasic Full Body',current_timestamp,current_timestamp,1,'')
(default,4,1,'Clasic 2-0-1',current_timestamp,current_timestamp,1,'')
//gender
(default,5,1,'Male',current_timestamp,current_timestamp,1,''),
(default,5,2,'Female',current_timestamp,current_timestamp,1,''),
(default,5,3,'Neutral',current_timestamp,current_timestamp,1,''),
(default,5,4,'Transgender',current_timestamp,current_timestamp,1,'')
//estado fisico (level)
(default,8,1,'Starter',current_timestamp,current_timestamp,1,''),
(default,8,2,'Medium',current_timestamp,current_timestamp,1,''),
(default,8,3,'Advance',current_timestamp,current_timestamp,1,''),
(default,8,4,'Expert',current_timestamp,current_timestamp,1,'')
//yes/no 
(default,9,1,'Yes',current_timestamp,current_timestamp,1,''),
(default,9,2,'No',current_timestamp,current_timestamp,1,'')
