const conn = require('./connection');

const getBlockExercises = (req,res) => {
    const blockExercises = conn.BlockExercises.findAll({
        //attributes: [['id_block_routine', 'id'],'id_routine','name','block',,'day_of_week','serie','weight','reps','observation','pause'], //id, first AS firstName
        include: [conn.Exercise,conn.Routines],
        where: {
            id_routine: req.query["routine"],
            day_of_week: req.query["day"],
            block: req.query["block"]
        }
    }
    );
    blockExercises.then( blockExercises => {
        res.status(200).json(blockExercises);
    }).catch((err) => {
        console.log(err);
    });
}

const addBlockExercises = (req,res) => {
  const blockExercises = conn.BlockExercises.create(req.body);
  blockExercises.then( blockExercises => {
      res.status(200).json(blockExercises);
  }).catch((err) => {
      console.log(err);
  });
}

const updateBlockExercises = (req,res) => {
  const blockExercises = conn.BlockExercises.update(
      req.body,
    { where: { id_block_routine: req.body.id } });
  blockExercises.then( blockExercises => {
      res.status(200).json(blockExercises);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteBlockExercises = (req,res) => {
  const blockExercises = conn.BlockExercises.destroy(
    { where: { id_block_routine: req.body.id } });
  blockExercises.then( blockExercises => {
      res.status(200).json(blockExercises);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getBlockExercises,
    addBlockExercises,
    updateBlockExercises,
    deleteBlockExercises,
}
