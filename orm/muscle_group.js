const conn = require('./connection');

const getMuscleGroup = (res) => {
    const muscleGroup = conn.MuscleGroup.findAll({
        attributes: [['id_muscle_group', 'id'],'id_muscle_group_type','name','image'] //id, first AS firstName
      });
    muscleGroup.then( muscleGroup => {
        res.status(200).json(muscleGroup);
    }).catch((err) => {
        console.log(err);
    });
}

const addMuscleGroup = (req,res) => {
  const muscleGroup = conn.MuscleGroup.create(req.body);
  muscleGroup.then( muscleGroup => {
      res.status(200).json(muscleGroup);
  }).catch((err) => {
      console.log(err);
  });
}

const updateMuscleGroup = (req,res) => {
  const muscleGroup = conn.MuscleGroup.update(
      req.body,
    { where: { id_muscle_group: req.body.id_muscle_group } });
  muscleGroup.then( muscleGroup => {
      res.status(200).json(muscleGroup);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteMuscleGroup = (req,res) => {
  const muscleGroup = conn.MuscleGroup.destroy(
    { where: { id_muscle_group: req.body.id_muscle_group } });
  muscleGroup.then( muscleGroup => {
      res.status(200).json(muscleGroup);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getMuscleGroup,
    addMuscleGroup,
    updateMuscleGroup,
    deleteMuscleGroup,
}
