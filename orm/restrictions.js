const conn = require('./connection');

const getRestrictions = (res) => {
    const restrictions = conn.Restriction.findAll({attributes: [['id_restriction', 'id'],'name']});
    restrictions.then( restrictions => {
        res.status(200).json(restrictions);
    }).catch((err) => {
        console.log(err);
    });
}

const addRestrictions = (req,res) => {
  const restrictions = conn.Restriction.create(req.body);
  restrictions.then( restrictions => {
      res.status(200).json(restrictions);
  }).catch((err) => {
      console.log(err);
  });
}

const updateRestrictions = (req,res) => {
  const restrictions = conn.Restriction.update(
      req.body,
    { where: { id_exercise: req.body.id_exercise } });
  restrictions.then( restrictions => {
      res.status(200).json(restrictions);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteRestrictions = (req,res) => {
  const restrictions = conn.Restriction.destroy(
    { where: { id_exercise: req.body.id_exercise } });
  restrictions.then( restrictions => {
      res.status(200).json(restrictions);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getRestrictions,
    addRestrictions,
    updateRestrictions,
    deleteRestrictions,
}
