const conn = require('./connection');

const getGroup = (res) => {
    const group = conn.Group.findAll();
    group.then( group => {
        res.status(200).json(group);
    }).catch((err) => {
        console.log(err);
    });
}

const addGroup = (req,res) => {
  const group = conn.Group.create(req.body);
  group.then( group => {
      res.status(200).json(group);
  }).catch((err) => {
      console.log(err);
  });
}

const updateGroup = (req,res) => {
  const group = conn.Group.update(
      req.body,
    { where: { id_exercise: req.body.id_exercise } });
  group.then( group => {
      res.status(200).json(group);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteGroup = (req,res) => {
  const group = conn.Group.destroy(
    { where: { id_exercise: req.body.id_exercise } });
  group.then( group => {
      res.status(200).json(group);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getGroup,
    addGroup,
    updateGroup,
    deleteGroup,
}
