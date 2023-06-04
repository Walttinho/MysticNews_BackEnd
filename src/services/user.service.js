const User = require("../models/User");

const create = (body) => User.create(body);

module.exports = {
  create,
};
