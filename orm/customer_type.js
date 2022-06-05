const conn = require('./connection');

const getCustomerType = (res) => {
    const customerType = conn.CustomerType.findAll();
    customerType.then( customerType => {
        res.status(200).json(customerType);
    }).catch((err) => {
        console.log(err);
    });
}

const addCustomerType = (req,res) => {
  const customerType = conn.CustomerType.create(req.body);
  customerType.then( customerType => {
      res.status(200).json(customerType);
  }).catch((err) => {
      console.log(err);
  });
}

const updateCustomerType = (req,res) => {
  const customerType = conn.CustomerType.update(
      req.body,
    { where: { id_exercise: req.body.id_exercise } });
  customerType.then( customerType => {
      res.status(200).json(customerType);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteCustomerType = (req,res) => {
  const customerType = conn.CustomerType.destroy(
    { where: { id_exercise: req.body.id_exercise } });
  customerType.then( customerType => {
      res.status(200).json(customerType);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getCustomerType,
    addCustomerType,
    updateCustomerType,
    deleteCustomerType,
}
