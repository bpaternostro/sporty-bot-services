const conn = require('./connection');

const getStatusType = (res) => {
    const statusType = conn.StatusType.findAll();
    statusType.then( statusType => {
        res.statusType(200).json(statusType);
    }).catch((err) => {
        console.log(err);
    });
}

const addStatusType = (req,res) => {
  const statusType = conn.StatusType.create(req.body);
  statusType.then( statusType => {
      res.statusType(200).json(statusType);
  }).catch((err) => {
      console.log(err);
  });
}

const updateStatusType = (req,res) => {
  const statusType = conn.StatusType.update(
      req.body,
    { where: { id_exercise: req.body.id_exercise } });
  statusType.then( statusType => {
      res.statusType(200).json(statusType);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteStatusType = (req,res) => {
  const statusType = conn.StatusType.destroy(
    { where: { id_exercise: req.body.id_exercise } });
  statusType.then( statusType => {
      res.statusType(200).json(statusType);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getStatusType,
    addStatusType,
    updateStatusType,
    deleteStatusType,
}
