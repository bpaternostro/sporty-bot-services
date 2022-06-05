const conn = require('./connection');

const getCustomer = (res) => {
    const customer = conn.Customer.findAll();
    customer.then( customer => {
        res.status(200).json(customer);
    }).catch((err) => {
        console.log(err);
    });
}

const addCustomer = (req,res) => {
  const customer = conn.Customer.create(req.body);
  customer.then( customer => {
      res.status(200).json(customer);
  }).catch((err) => {
      console.log(err);
  });
}

const updateCustomer = (req,res) => {
  const customer = conn.Customer.update(
      req.body,
    { where: { id_exercise: req.body.id_exercise } });
  customer.then( customer => {
      res.status(200).json(customer);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteCustomer = (req,res) => {
  const customer = conn.Customer.destroy(
    { where: { id_exercise: req.body.id_exercise } });
  customer.then( customer => {
      res.status(200).json(customer);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getCustomer,
    addCustomer,
    updateCustomer,
    deleteCustomer,
}
