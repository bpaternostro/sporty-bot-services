const { Sequelize, DataTypes } = require('sequelize');

let user = 'postgres';
let host = 'localhost';
let database = 'sporty_api';
let password = process.env.posgree_pass;
let port = "5432";

const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: 'postgres'
  });


const connect = () => {
    console.log("we are here");
    const con = sequelize.authenticate((err,data) => {
            if(err){
                reject(`Unable to connect to the database:!{err}`);
            }
            resolve('Connection has been established successfully.');
        });
    return con;
}


const Contact_type = sequelize.define('customer', {
    // Model attributes are defined here
    id_contact_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
},{
  timestamps: false
});

const CustomerType = sequelize.define('customer_type', {
    // Model attributes are defined here
    id_customer_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    details: {
        type: DataTypes.STRING,
        allowNull: true
    }
  },{
    timestamps: false
  });

const Customer = sequelize.define('customers', {
    // Model attributes are defined here
    id_customer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_contact_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'CONTACT_TYPES', 
        referencesKey: 'id_contact_type'
    },
    id_status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'STATUS', 
        referencesKey: 'id_status'
    },
    id_customer_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'CUSTOMER_TYPES', 
        referencesKey: 'id_customer_type'
    }
  },{
    timestamps: false
  });

const Exercise = sequelize.define('exercises', {
    // Model attributes are defined here
    id_exercise: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdat: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedat: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'STATUS', 
        referencesKey: 'id_status'
    },
    video_link: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_exercise_type:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'EXERCISE_TYPES', 
        referencesKey: 'id_exercise_type'
    },
    id_creator:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'CUSTOMERS', 
        referencesKey: 'id_customer'
    },
    details:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
  },{
    timestamps: false
  });

const Group = sequelize.define('groups', {
    // Model attributes are defined here
    id_group: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_owner: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'CUSTOMERS', 
        referencesKey: 'id_customer'
    },
    place: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true
    }
  },{
    timestamps: false
  });

const ExerciseType = sequelize.define('exercise_type', {
    // Model attributes are defined here
    id_exercise_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_creator: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'CUSTOMERS', 
        referencesKey: 'id_customer'
    },
    id_training: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'TRAININGS', 
        referencesKey: 'id_training'
    },
    details: {
        type: DataTypes.STRING,
        allowNull: true
    }
  },{
    timestamps: false
  });

const Routines = sequelize.define('routines', {
    // Model attributes are defined here
    id_routine: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'STATUS', 
        referencesKey: 'id_status'
    },
    id_creator:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'CUSTOMERS', 
        referencesKey: 'id_customer'
    }
  },{
    timestamps: false
  });

const RoutinesExercises = sequelize.define('routines_exercises', {
    // Model attributes are defined here
    id_routine_exercise: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    id_routine: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: 'Routines', 
      referencesKey: 'id_routine'
    },
    id_exercise: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'Exercises', 
        referencesKey: 'id_exercise'
      },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'STATUS', 
        referencesKey: 'id_status'
    }
  },{
    timestamps: false
  });

const RoutinesGroups = sequelize.define('routines_groups', {
    // Model attributes are defined here
    id_routine_group: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    id_routine: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: 'Routines', 
      referencesKey: 'id_routine'
    },
    id_group: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'Groups', 
        referencesKey: 'id_group'
      },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'STATUS', 
        referencesKey: 'id_status'
    }
  },{
    timestamps: false
  });

const Status = sequelize.define('status', {
    // Model attributes are defined here
    id_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_status_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'StatusType', 
        referencesKey: 'id_status_type'
    }
  },{
    timestamps: false
  });

const StatusType = sequelize.define('status_types', {
    // Model attributes are defined here
    id_status_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
  },{
    timestamps: false
  });

const Training = sequelize.define('training', {
    // Model attributes are defined here
    id_training: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    id_creator: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'CUSTOMERS', 
        referencesKey: 'id_customer'
    },
    details: {
        type: DataTypes.STRING,
        allowNull: true
    }

  },{
    timestamps: false
  });
  
module.exports = {
    connect,
    Contact_type,
    Customer,
    CustomerType,
    Exercise,
    ExerciseType,
    Group,
    Routines,
    RoutinesExercises,
    RoutinesGroups,
    Status,
    StatusType,
    Training,
}