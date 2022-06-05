const conn = require('./connection');

const getExerciseType = (res) => {
    const exerciseType = conn.ExerciseType.findAll();
    exerciseType.then( exerciseType => {
        res.status(200).json(exerciseType);
    }).catch((err) => {
        console.log(err);
    });
}

const addExerciseType = (req,res) => {
  const exerciseType = conn.ExerciseType.create(req.body);
  exerciseType.then( exerciseType => {
      res.status(200).json(exerciseType);
  }).catch((err) => {
      console.log(err);
  });
}

const updateExerciseType = (req,res) => {
  const exerciseType = conn.ExerciseType.update(
      req.body,
    { where: { id_exercise: req.body.id_exercise } });
  exerciseType.then( exerciseType => {
      res.status(200).json(exerciseType);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteExerciseType = (req,res) => {
  const exerciseType = conn.ExerciseType.destroy(
    { where: { id_exercise: req.body.id_exercise } });
  exerciseType.then( exerciseType => {
      res.status(200).json(exerciseType);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getExerciseType,
    addExerciseType,
    updateExerciseType,
    deleteExerciseType,
}
