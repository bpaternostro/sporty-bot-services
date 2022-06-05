const conn = require('./connection');

const getStatus = (res) => {
    const status = conn.Status.findAll();
    status.then( status => {
        res.status(200).json(status);
    }).catch((err) => {
        console.log(err);
    });
}

const addStatus = (req,res) => {
  const status = conn.Status.create(req.body);
  status.then( status => {
      res.status(200).json(status);
  }).catch((err) => {
      console.log(err);
  });
}

const updateStatus = (req,res) => {
  const status = conn.Status.update(
      req.body,
    { where: { id_exercise: req.body.id_exercise } });
  status.then( status => {
      res.status(200).json(status);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteStatus = (req,res) => {
  const status = conn.Status.destroy(
    { where: { id_exercise: req.body.id_exercise } });
  status.then( status => {
      res.status(200).json(status);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getStatus,
    addStatus,
    updateStatus,
    deleteStatus,
}
