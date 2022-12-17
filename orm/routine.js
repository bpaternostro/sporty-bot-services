const conn = require('./connection');

const getRoutines = (res) => {
    const routine = conn.Routine.findAll({
        include: [conn.Status, conn.Restriction],
        //include: [conn.Status],
        attributes: [['id_routine', 'id'],'name','id_cadence','id_system','warm_up','cardio','id_creator','duration','id_restrictions','id_routine_type','id_level','id_goal','days'] //id, first AS firstName
      });
    routine.then( routine => {
        res.status(200).json(routine);
    }).catch((err) => {
        console.log(err);
    });
}

const addRoutines = (req,res) => {
  const routine = conn.Routine.create(req.body);
  routine.then( routine => {
      res.status(200).json(routine);
  }).catch((err) => {
      console.log(err);
  });
}

const updateRoutines = (req,res) => {
  const routine = conn.Routine.update(
      req.body,
    { where: { id_routine: req.body.id } });
  routine.then( routine => {
      res.status(200).json(routine);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteRoutines = (req,res) => {
  const routine = conn.Routine.destroy(
    { where: { id_routine: req.body.id } });
  routine.then( routine => {
      res.status(200).json(routine);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getRoutines,
    addRoutines,
    updateRoutines,
    deleteRoutines,
}
