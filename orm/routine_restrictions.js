const conn = require('./connection');

const getRoutineRestrictions = (res) => {
    const routineRestrictions = conn.RoutineRestrictions.findAll();
      routineRestrictions.then( routineRestrictions => {
        res.status(200).json(routineRestrictions);
    }).catch((err) => {
        console.log(err);
    });
}

const addRoutineRestrictions = (req,res) => {
  const routineRestrictions = conn.RoutineRestrictions.create(req.body);
  routineRestrictions.then( routineRestrictions => {
      res.status(200).json(routineRestrictions);
  }).catch((err) => {
      console.log(err);
  });
}

const updateRoutineRestrictions = (req,res) => {
  const routineRestrictions = conn.RoutineRestrictions.update(
      req.body,
    { where: { id_routine_restriction: req.body.id_routine_restriction } });
    routineRestrictions.then( routineRestrictions => {
      res.status(200).json(routineRestrictions);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteRoutineRestrictions = (req,res) => {
  const routineRestrictions = conn.RoutineRestrictions.destroy(
    { where: { id_routine: req.body.id_routine, id_restriction: req.body.id_restriction } });
    routineRestrictions.then( routineRestrictions => {
      res.status(200).json(routineRestrictions);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getRoutineRestrictions,
    addRoutineRestrictions,
    updateRoutineRestrictions,
    deleteRoutineRestrictions,
}
