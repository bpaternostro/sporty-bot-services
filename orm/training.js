const conn = require('./connection');

const getTrainings = (res) => {
    const trainings = conn.Training.findAll();
    trainings.then( trainings => {
        res.status(200).json(trainings);
    }).catch((err) => {
        console.log(err);
    });
}

const addTrainings = (req,res) => {
  const trainings = conn.Training.create(req.body);
  trainings.then( trainings => {
      res.status(200).json(trainings);
  }).catch((err) => {
      console.log(err);
  });
}

const updateTrainings = (req,res) => {
  const trainings = conn.Training.update(
      req.body,
    { where: { id_exercise: req.body.id_exercise } });
  trainings.then( trainings => {
      res.status(200).json(trainings);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteTrainings = (req,res) => {
  const trainings = conn.Training.destroy(
    { where: { id_exercise: req.body.id_exercise } });
  trainings.then( trainings => {
      res.status(200).json(trainings);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getTrainings,
    addTrainings,
    updateTrainings,
    deleteTrainings,
}
