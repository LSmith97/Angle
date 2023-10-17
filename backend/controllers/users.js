const { Post, Comment, User } = require("../models");

module.exports = {
  show
};

async function show(req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
}