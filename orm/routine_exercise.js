const conn = require('./connection');

const getRoutineExercise = (res) => {
    const routineExercise = conn.RoutinesExercises.findAll();
    routineExercise.then( routineExercise => {
        res.status(200).json(routineExercise);
    }).catch((err) => {
        console.log(err);
    });
}

const addRoutineExercise = (req,res) => {
  const routineExercise = conn.RoutinesExercises.create(req.body);
  routineExercise.then( routineExercise => {
      res.status(200).json(routineExercise);
  }).catch((err) => {
      console.log(err);
  });
}

const updateRoutineExercise = (req,res) => {
  const routineExercise = conn.RoutinesExercises.update(
      req.body,
    { where: { id_exercise: req.body.id_exercise } });
  routineExercise.then( routineExercise => {
      res.status(200).json(routineExercise);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteRoutineExercise = (req,res) => {
  const routineExercise = conn.RoutinesExercises.destroy(
    { where: { id_exercise: req.body.id_exercise } });
  routineExercise.then( routineExercise => {
      res.status(200).json(routineExercise);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getRoutineExercise,
    addRoutineExercise,
    updateRoutineExercise,
    deleteRoutineExercise,
}
