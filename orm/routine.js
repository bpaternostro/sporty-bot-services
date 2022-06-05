const conn = require('./connection');

const getRoutine = (res) => {
    const routine = conn.Routine.findAll();
    routine.then( routine => {
        res.status(200).json(routine);
    }).catch((err) => {
        console.log(err);
    });
}

const addRoutine = (req,res) => {
  const routine = conn.Routine.create(req.body);
  routine.then( routine => {
      res.status(200).json(routine);
  }).catch((err) => {
      console.log(err);
  });
}

const updateRoutine = (req,res) => {
  const routine = conn.Routine.update(
      req.body,
    { where: { id_exercise: req.body.id_exercise } });
  routine.then( routine => {
      res.status(200).json(routine);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteRoutine = (req,res) => {
  const routine = conn.Routine.destroy(
    { where: { id_exercise: req.body.id_exercise } });
  routine.then( routine => {
      res.status(200).json(routine);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getRoutine,
    addRoutine,
    updateRoutine,
    deleteRoutine,
}
