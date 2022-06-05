const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: process.env.posgree_db,
  password: process.env.posgree_pass,
  port: 5432,
})

const getExercises = (request, response) => {
  pool.query('SELECT * FROM exercises', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getExercises,
}