const conn = require('./connection');

const getLevels = (res) => {
    const level = conn.Levels.findAll({attributes: [['id_level', 'id'],'name']}); //id, first AS firstName);
    level.then( level => {
        res.status(200).json(level);
    }).catch((err) => {
        console.log(err);
    });
}

const addLevels = (req,res) => {
  const level = conn.Levels.create(req.body);
  level.then( level => {
      res.status(200).json(level);
  }).catch((err) => {
      console.log(err);
  });
}

const updateLevels = (req,res) => {
  const level = conn.Levels.update(
      req.body,
    { where: { id_exercise: req.body.id_exercise } });
  level.then( level => {
      res.status(200).json(level);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteLevels = (req,res) => {
  const level = conn.Levels.destroy(
    { where: { id_exercise: req.body.id_exercise } });
  level.then( level => {
      res.status(200).json(level);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getLevels,
    addLevels,
    updateLevels,
    deleteLevels,
}
