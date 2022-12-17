const conn = require('./connection');

const getRoutineTypes = (res) => {
    const routine = conn.RoutinesTypes.findAll({attributes: [['id_routine_type', 'id'],'name']});
    routine.then( routine => {
        res.status(200).json(routine);
    }).catch((err) => {
        console.log(err);
    });
}

const addRoutineTypes = (req,res) => {
  const routine = conn.RoutinesTypes.create(req.body);
  routine.then( routine => {
      res.status(200).json(routine);
  }).catch((err) => {
      console.log(err);
  });
}

const updateRoutineTypes = (req,res) => {
  const routine = conn.RoutinesTypes.update(
      req.body,
    { where: { id_exercise: req.body.id_exercise } });
  routine.then( routine => {
      res.status(200).json(routine);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteRoutineTypes = (req,res) => {
  const routine = conn.RoutinesTypes.destroy(
    { where: { id_exercise: req.body.id_exercise } });
  routine.then( routine => {
      res.status(200).json(routine);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getRoutineTypes,
    addRoutineTypes,
    updateRoutineTypes,
    deleteRoutineTypes,
}
