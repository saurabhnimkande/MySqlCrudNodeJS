const userModel = require("../models/users.models");

exports.getAllUsers = (req, res) => {
  userModel.getAllUsers((err, result) => {
    if (err) return res.status(500).send(err);

    console.log(result);
    return res.status(200).send(result);
  });
};

exports.postUser = (req, res) => {
  userModel.postUserData(req.body, (err, result) => {
    if (err) return res.status(400).send(err);

    return res.status(201).send(result);
  });
};

exports.getUserById = (req, res) => {
  userModel.getUserById(req.params.id, (err, result) => {
    if (err) return res.status(400).send(err);

    return res.status(200).send(result);
  });
};

exports.deleteUserById = (req, res) => {
  userModel.deleteUserByid(req.params.id, (err, result) => {
    if (err) return res.status(400).send(err);

    return res.status(200).send(result);
  });
};

exports.updateDataById = (req, res) => {
  userModel.updateDataById(req.body, req.params.id, (err, result) => {
    if (err) return res.status(400).send(err);

    return res.status(200).send(result);
  });
};
