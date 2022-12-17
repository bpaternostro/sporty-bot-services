const conn = require('./connection');

const getExercises = (res) => {
    const exercises = conn.Exercise.findAll({
        attributes: [['id_exercise', 'id'],'name','video_link','id_exercise_type','id_muscle_group','id_creator','description'] //id, first AS firstName
      });
    exercises.then( exercises => {
        res.status(200).json(exercises);
    }).catch((err) => {
        console.log(err);
    });
}

const addExercises = (req,res) => {
  const exercises = conn.Exercise.create(req.body);
  exercises.then( exercises => {
      res.status(200).json(exercises);
  }).catch((err) => {
      console.log(err);
  });
}

const updateExercises = (req,res) => {
  const exercises = conn.Exercise.update(
      req.body,
    { where: { id_exercise: req.body.id } });
  exercises.then( exercises => {
      res.status(200).json(exercises);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteExercises = (req,res) => {
  const exercises = conn.Exercise.destroy(
    { where: { id_exercise: req.body.id_exercise } });
  exercises.then( exercises => {
      res.status(200).json(exercises);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getExercises,
    addExercises,
    updateExercises,
    deleteExercises,
}
