const conn = require('./connection');

const getRoutineCycle = (req,res) => {
    const routineCycle = conn.RoutinesCycles.findAll({
        where: {
          id_routine: req.query["routine"],
          day_of_week: req.query["day"]
        }
      });
    routineCycle.then( routineCycle => {
        res.status(200).json(routineCycle);
    }).catch((err) => {
        console.log(err);
    });
}

const addRoutineCycle = (req,res) => {
  const routineCycle = conn.RoutinesCycles.create(req.body);
  routineCycle.then( routineCycle => {
      res.status(200).json(routineCycle);
  }).catch((err) => {
      console.log(err);
  });
}

const updateRoutineCycle = (req,res) => {
  const routineCycle = conn.RoutinesCycles.update(
      req.body,
    { where: { id_Cycle: req.body.id_Cycle } });
  routineCycle.then( routineCycle => {
      res.status(200).json(routineCycle);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteRoutineCycle = (req,res) => {
  const routineCycle = conn.RoutinesCycles.destroy(
    { where: { id_Cycle: req.body.id_Cycle } });
  routineCycle.then( routineCycle => {
      res.status(200).json(routineCycle);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getRoutineCycle,
    addRoutineCycle,
    updateRoutineCycle,
    deleteRoutineCycle,
}
