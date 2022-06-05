const conn = require('./connection');

const getContactTypes = (res) => {
    const contactTypes = conn.Contact_type.findAll();
    contactTypes.then( contactTypes => {
        res.status(200).json(contactTypes);
    }).catch((err) => {
        console.log(err);
    });
}

const addContactTypes = (req,res) => {
  const contactTypes = conn.Contact_type.create(req.body);
  contactTypes.then( contactTypes => {
      res.status(200).json(contactTypes);
  }).catch((err) => {
      console.log(err);
  });
}

const updateContactTypes = (req,res) => {
  const contactTypes = conn.Contact_type.update(
      req.body,
    { where: { id_exercise: req.body.id_exercise } });
  contactTypes.then( contactTypes => {
      res.status(200).json(contactTypes);
  }).catch((err) => {
      console.log(err);
  });
}

const deleteContactTypes = (req,res) => {
  const contactTypes = conn.Contact_type.destroy(
    { where: { id_exercise: req.body.id_exercise } });
  contactTypes.then( contactTypes => {
      res.status(200).json(contactTypes);
  }).catch((err) => {
      console.log(err);
  });
}

module.exports = {
    getContactTypes,
    addContactTypes,
    updateContactTypes,
    deleteContactTypes,
}
