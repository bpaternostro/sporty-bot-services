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

const BlockExercises = sequelize.define('block_exercises', {
  // Model attributes are defined here
  id_block_routine: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  id_routine: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'routines',
      key: 'id_routine',
   }
  },
  id_exercise: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'exercises',
      key: 'id_exercise',
   }
  },
  block: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  day_of_week: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  serie: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  weight: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  reps: {
    type: DataTypes.STRING,
    allowNull: false
  },
  observation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pause: {
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
  }
},{
timestamps: false
});

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
    id_muscle_group:{
      type: DataTypes.ARRAY({ type: DataTypes.UUID }),
      references: { model: 'MuscleGroup', key: 'id_muscle_group' },
      allowNull: false
  },
    id_creator:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'CUSTOMERS', 
        referencesKey: 'id_customer'
    },
    description:{
        type: DataTypes.STRING,
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
    createdat: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedat: {
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
    }
  },{
    timestamps: false
  });

const Levels = sequelize.define('levels', {
    // Model attributes are defined here
    id_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    }
  },{
    timestamps: false
  });

const MuscleGroup = sequelize.define('muscle_group', {
    // Model attributes are defined here
    id_muscle_group: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_muscle_group_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: 'MuscleGroupType', 
      referencesKey: 'id_muscle_group_type'
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
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
  },{
    timestamps: false,
    freezeTableName: true,
    tableName: 'muscle_group'
  });

const MuscleGroupType = sequelize.define('muscle_group_type', {
    // Model attributes are defined here
    id_muscle_group_type: {
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
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
  },{
    timestamps: false,
    freezeTableName: true,
    tableName: 'muscle_group_type'
  });

const Restriction = sequelize.define('restriction', {
    // Model attributes are defined here
    id_restriction: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    }
  },{
    timestamps: false,
    tableName: 'restriction',
    freezeTableName: true
  });

const Routine = sequelize.define('routine', {
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
    id_creator:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'CUSTOMERS', 
        referencesKey: 'id_customer'
    },
    id_system:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_cadence:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    warm_up:{
      type: DataTypes.STRING,
      allowNull: false
    },
    cardio:{
      type: DataTypes.STRING,
      allowNull: false
    },
    duration:{
      type: DataTypes.STRING,
      allowNull: false
    },
    pre_exhaustion:{
      type: DataTypes.STRING,
      allowNull: false
    },
    activation:{
      type: DataTypes.STRING,
      allowNull: false
    },
    rest_between_exercises:{
      type: DataTypes.STRING,
      allowNull: false
    },
    days:{
      type: DataTypes.ARRAY({ type: DataTypes.UUID })
    },
    id_goal:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_level:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: 'levels', 
      referencesKey: 'id_level'
    },
    id_routine_type:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: 'routines_types', 
      referencesKey: 'id_routine_type'
    }
    
  },{
    timestamps: false,
    tableName: 'routine',
    freezeTableName: true
  });

const RoutinesCycles = sequelize.define('routines_cycles', {
    // Model attributes are defined here
    id_routine_cycle: {
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
    block: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'Exercises', 
        referencesKey: 'id_exercise'
      },
    createdat: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedat: {
        type: DataTypes.DATE,
        allowNull: false
    },
    day_of_week: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exercises:{
      type: DataTypes.ARRAY({ type: DataTypes.UUID }),
      references: { model: 'Exercise', key: 'id_exercise' },
      allowNull: false
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

const RoutinesTypes = sequelize.define('routines_types', {
    // Model attributes are defined here
    id_routine_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    createdat: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedat: {
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
    freezeTableName: true,
    tableName: 'status',
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
    id_training_method: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: 'TrainingMethod', 
      referencesKey: 'id_training_method'
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

const TrainingMethod = sequelize.define('training_method', {
    // Model attributes are defined here
    id_training_method: {
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

const RoutineRestrictions = sequelize.define('routine_restrictions', {
    id_routine_restriction: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_routine: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_restriction: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdat: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedat: {
        type: DataTypes.DATE,
        allowNull: false
    }
  },{
    timestamps: false,
    tableName: 'routine_restrictions',
    freezeTableName: true
  });

BlockExercises.hasOne(Exercise , {foreignKey : 'id_exercise', sourceKey: "id_exercise"});
BlockExercises.hasOne(Routine, {foreignKey : 'id_routine', sourceKey: "id_routine"});
Routine.hasOne(Status, {foreignKey : 'id_status', sourceKey: "id_status"});
//TODO check way is not working association
Routine.belongsToMany(Restriction, {through: RoutineRestrictions, foreignKey : 'id_routine'});
Restriction.belongsToMany(Routine, {through: RoutineRestrictions, foreignKey : 'id_restriction'});
Exercise.hasOne(Status, {foreignKey : 'id_status', sourceKey: "id_status"});

module.exports = {
    connect,
    BlockExercises,
    Contact_type,
    Customer,
    CustomerType,
    Exercise,
    ExerciseType,
    Group,
    Levels,
    MuscleGroup,
    MuscleGroupType,
    Restriction,
    Routine,
    RoutinesCycles,
    RoutinesGroups,
    RoutineRestrictions,
    RoutinesTypes,
    Status,
    StatusType,
    Training,
    TrainingMethod,
}