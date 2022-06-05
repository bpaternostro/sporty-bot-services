const conn = require('./connection');

const getRoutineGroup = (res) => {
    const routineGroup = conn.RoutinesGroups.findAll();
    routineGroup.then( routineGroup => {
        res.status(200).json(routineGroup);
    }).catch((err) => {
        console.log(err);
    });
}

const addRoutineGroup = (req,res) => {
  const routineGroup = conn.RoutinesGroups.create(req.body);
  routineGroup.then( routineGroup => {
      res.status(200).json(routineGroup);
  }).catch((err) => {
      console.log(err);
  });
}

const updateRoutineGroup = (req,res) => {
  const routineGroup = conn.RoutinesGroups.update(
      req.body,
    { where: { id_exercise: req.body.id_exercise } });
  routineGroup.then( routineGroup => {
      res.status(200).json(routineGroup);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteRoutineGroup = (req,res) => {
  const routineGroup = conn.RoutinesGroups.destroy(
    { where: { id_exercise: req.body.id_exercise } });
  routineGroup.then( routineGroup => {
      res.status(200).json(routineGroup);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getRoutineGroup,
    addRoutineGroup,
    updateRoutineGroup,
    deleteRoutineGroup,
}
