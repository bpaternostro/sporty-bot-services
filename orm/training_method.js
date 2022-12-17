const conn = require('./connection');

const getTrainingMethod = (res) => {
    const trainingMethod = conn.TrainingMethod.findAll();
    trainingMethod.then( trainingMethod => {
        res.status(200).json(trainingMethod);
    }).catch((err) => {
        console.log(err);
    });
}

const addTrainingMethod = (req,res) => {
  const trainingMethod = conn.TrainingMethod.create(req.body);
  trainingMethod.then( trainingMethod => {
      res.status(200).json(trainingMethod);
  }).catch((err) => {
      console.log(err);
  });
}

const updateTrainingMethod = (req,res) => {
  const trainingMethod = conn.TrainingMethod.update(
      req.body,
    { where: { id_exercise: req.body.id_exercise } });
  trainingMethod.then( trainingMethod => {
      res.status(200).json(trainingMethod);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteTrainingMethod = (req,res) => {
  const trainingMethod = conn.TrainingMethod.destroy(
    { where: { id_exercise: req.body.id_exercise } });
  trainingMethod.then( trainingMethod => {
      res.status(200).json(trainingMethod);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getTrainingMethod,
    addTrainingMethod,
    updateTrainingMethod,
    deleteTrainingMethod,
}
