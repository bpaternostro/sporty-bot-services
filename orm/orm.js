const { Sequelize, DataTypes } = require('sequelize');

let user = 'postgres';
let host = 'localhost';
let database = 'sporty_api';
let password = process.env.posgree_pass;
let port = "5432";

const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: 'postgres'
  });


const connect = () => {
    console.log("we are here");
    const con = sequelize.authenticate((err,data) => {
            if(err){
                reject(`Unable to connect to the database:!{err}`);
            }
            resolve('Connection has been established successfully.');
        });
}



const getExercises = (res) => {
    const exercises = Exercise.findAll();
    exercises.then( exercises => {
        res.status(200).json(exercises);
    }).catch((err) => {
        console.log(err);
    });
}

const addExercises = (req,res) => {
  const exercises = Exercise.create(req.body);
  exercises.then( exercises => {
      res.status(200).json(exercises);
  }).catch((err) => {
      console.log(err);
  });
}

const updateExercises = (req,res) => {
  const exercises = Exercise.update(
      req.body,
    { where: { id_exercise: req.body.id_exercise } });
  exercises.then( exercises => {
      res.status(200).json(exercises);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteExercises = (req,res) => {
  const exercises = Exercise.destroy(
    { where: { id_exercise: req.body.id_exercise } });
  exercises.then( exercises => {
      res.status(200).json(exercises);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getExercises,
    addExercises,
    updateExercises,
    deleteExercises,
}
