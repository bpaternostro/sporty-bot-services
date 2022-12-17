var express = require('express');
const { append } = require('express/lib/response');
var router = express.Router();
const blockExercises = require('../orm/block_exercises');
const exercise = require('../orm/exercise');
const contactType = require('../orm/contact_type');
const customer = require('../orm/customer');
const customerType = require('../orm/customer_type');
const exerciseType = require('../orm/exercise_type');
const muscleGroup = require('../orm/muscle_group');
const level = require('../orm/levels');
const group = require('../orm/group');
const restriction = require('../orm/restrictions');
const routine = require('../orm/routine');
const routineRestriction = require('../orm/routine_restrictions');
const routineCycles = require('../orm/routine_cycle');
const routineGroup = require('../orm/routine_group');
const routineTypes = require('../orm/routine_types');
const status = require('../orm/status');
const statusType = require('../orm/status_type');
const training = require('../orm/training');
const trainingMethod = require('../orm/training_method');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Block Exercises. */
router.route('/block-exercises')
  .get((req,res)=>{
    blockExercises.getBlockExercises(req,res);
  }).post((req,res)=>{
    blockExercises.addBlockExercises(req,res);
  }).put((req,res)=>{
    blockExercises.updateBlockExercises(req,res);
  }).delete((req,res)=>{ 
    blockExercises.deleteBlockExercises(req,res);
  });

/* Contact Type. */
router.route('/contact-type')
  .get((req,res)=>{
    contactType.getContactTypes(res);
  }).post((req,res)=>{
    contactType.addContactTypes(req,res);
  }).put((req,res)=>{
    contactType.updateContactTypes(req,res);
  }).delete((req,res)=>{ 
    contactType.deleteContactTypes(req,res);
  });

/* Customer */
router.route('/customer')
  .get((req,res)=>{
    customer.getCustomer(res);
  }).post((req,res)=>{
    customer.addCustomer(req,res);
  }).put((req,res)=>{
    customer.updateCustomer(req,res);
  }).delete((req,res)=>{ 
    customer.deleteCustomer(req,res);
  });

/* Customer type*/
router.route('/customer-type')
  .get((req,res)=>{
    customerType.getCustomerType(res);
  }).post((req,res)=>{
    customerType.addCustomerType(req,res);
  }).put((req,res)=>{
    customerType.updateCustomerType(req,res);
  }).delete((req,res)=>{ 
    customerType.deleteCustomerType(req,res);
  });

/* Exercises. */
router.route('/exercises')
  .get((req,res)=>{
    exercise.getExercises(res);
  }).post((req,res)=>{
    exercise.addExercises(req,res);
  }).put((req,res)=>{
    exercise.updateExercises(req,res);
  }).delete((req,res)=>{ 
    exercise.deleteExercises(req,res);
  });

/* Exercises type. */
router.route('/exercise-type')
  .get((req,res)=>{
    exerciseType.getExerciseType(res);
  }).post((req,res)=>{
    exerciseType.addExerciseType(req,res);
  }).put((req,res)=>{
    exerciseType.updateExerciseType(req,res);
  }).delete((req,res)=>{ 
    exerciseType.deleteExerciseType(req,res);
  });

/* Group. */
router.route('/group')
  .get((req,res)=>{
    group.getGroup(res);
  }).post((req,res)=>{
    group.addGroup(req,res);
  }).put((req,res)=>{
    group.updateGroup(req,res);
  }).delete((req,res)=>{ 
    group.deleteGroup(req,res);
  });

  /* Group. */
router.route('/levels')
.get((req,res)=>{
  level.getLevels(res);
}).post((req,res)=>{
  level.addLevels(req,res);
}).put((req,res)=>{
  level.updateLevels(req,res);
}).delete((req,res)=>{ 
  level.deleteLevels(req,res);
});

/* Muscle Group. */
router.route('/muscle-group')
  .get((req,res)=>{
    muscleGroup.getMuscleGroup(res);
  }).post((req,res)=>{
    muscleGroup.addMuscleGroup(req,res);
  }).put((req,res)=>{
    muscleGroup.updateMuscleGroup(req,res);
  }).delete((req,res)=>{ 
    muscleGroup.deleteMuscleGroup(req,res);
  });

/* Restrictions. */
router.route('/restrictions')
.get((req,res)=>{
  restriction.getRestrictions(res);
}).post((req,res)=>{
  restriction.addRestrictions(req,res);
}).put((req,res)=>{
  restriction.updateRestrictions(req,res);
}).delete((req,res)=>{ 
  restriction.deleteRestrictions(req,res);
});

  /* Routine. */
router.route('/routines')
  .get((req,res)=>{
    routine.getRoutines(res);
  }).post((req,res)=>{
    routine.addRoutines(req,res);
  }).put((req,res)=>{
    routine.updateRoutines(req,res);
  }).delete((req,res)=>{ 
    routine.deleteRoutines(req,res);
  });

    /* Routine-restictions */
router.route('/routine-restrictions')
.get((req,res)=>{
  routineRestriction.getRoutineRestrictions(res);
}).post((req,res)=>{
  routineRestriction.addRoutineRestrictions(req,res);
}).put((req,res)=>{
  routineRestriction.updateRoutineRestrictions(req,res);
}).delete((req,res)=>{ 
  routineRestriction.deleteRoutineRestrictions(req,res);
});

/* Routine Exercise. */
router.route('/routine-cycles')
  .get((req,res)=>{
    routineCycles.getRoutineCycle(req,res);
  }).post((req,res)=>{
    routineCycles.addRoutineCycle(req,res);
  }).put((req,res)=>{
    routineCycles.updateRoutineCycle(req,res);
  }).delete((req,res)=>{ 
    routineCycles.deleteRoutineCycle(req,res);
  });

/* Routine Groups. */
router.route('/routine-group')
  .get((req,res)=>{
    routineGroup.getRoutineGroup(res);
  }).post((req,res)=>{
    routineGroup.addRoutineGroup(req,res);
  }).put((req,res)=>{
    routineGroup.updateRoutineGroup(req,res);
  }).delete((req,res)=>{ 
    routineGroup.deleteRoutineGroup(req,res);
  });

  /* Routine Types. */
router.route('/routine-types')
.get((req,res)=>{
  routineTypes.getRoutineTypes(res);
}).post((req,res)=>{
  routineTypes.addRoutineTypes(req,res);
}).put((req,res)=>{
  routineTypes.updateRoutineTypes(req,res);
}).delete((req,res)=>{ 
  routineTypes.deleteRoutineTypes(req,res);
});

/* Status. */
router.route('/status')
  .get((req,res)=>{
    status.getStatus(res);
  }).post((req,res)=>{
    status.addStatus(req,res);
  }).put((req,res)=>{
    status.updateStatus(req,res);
  }).delete((req,res)=>{ 
    status.deleteStatus(req,res);
  });

/* Status Type. */
router.route('/status-type')
  .get((req,res)=>{
    statusType.getStatusType(res);
  }).post((req,res)=>{
    statusType.addStatusType(req,res);
  }).put((req,res)=>{
    statusType.updateStatusType(req,res);
  }).delete((req,res)=>{ 
    statusType.deleteStatusType(req,res);
  });

/* Trainings. */
router.route('/trainings')
  .get((req,res)=>{
    training.getTrainings(res);
  }).post((req,res)=>{
    training.addTrainings(req,res);
  }).put((req,res)=>{
    training.updateTrainings(req,res);
  }).delete((req,res)=>{ 
    training.deleteTrainings(req,res);
  });

  /* Trainings method. */
router.route('/trainings-method')
  .get((req,res)=>{
    trainingMethod.getTrainingMethod(res);
  }).post((req,res)=>{
    trainingMethod.addTrainingMethod(req,res);
  }).put((req,res)=>{
    trainingMethod.updateTrainingMethod(req,res);
  }).delete((req,res)=>{ 
    trainingMethod.deleteTrainingMethod(req,res);
  });

module.exports = router;
