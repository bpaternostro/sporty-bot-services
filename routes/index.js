var express = require('express');
const { append } = require('express/lib/response');
var router = express.Router();
const exercise = require('../orm/exercise');
const training = require('../orm/training');
const contactType = require('../orm/contact_type');
const customer = require('../orm/customer');
const customerType = require('../orm/customer_type');
const exerciseType = require('../orm/exercise_type');
const group = require('../orm/group');
const routine = require('../orm/routine');
const routineExercise = require('../orm/routine_exercise');
const routineGroup = require('../orm/routine_group');
const status = require('../orm/status');
const statusType = require('../orm/status_type');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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

/* Routine. */
router.route('/routine')
  .get((req,res)=>{
    routine.getRoutine(res);
  }).post((req,res)=>{
    routine.addRoutine(req,res);
  }).put((req,res)=>{
    routine.updateRoutine(req,res);
  }).delete((req,res)=>{ 
    routine.deleteRoutine(req,res);
  });

/* Routine Exercise. */
router.route('/routine-exercise')
  .get((req,res)=>{
    routineExercise.getRoutine(res);
  }).post((req,res)=>{
    routineExercise.addRoutine(req,res);
  }).put((req,res)=>{
    routineExercise.updateRoutine(req,res);
  }).delete((req,res)=>{ 
    routineExercise.deleteRoutine(req,res);
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

module.exports = router;
