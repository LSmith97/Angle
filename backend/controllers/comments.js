const { Post, Comment, User } = require("../models");

module.exports = {
  create,
  remove,
  update: updatePost,
  show
};

async function create(req, res) {
  const commentData = { ...req.body };
 
  try {
    // Check for user, if none found, create one
    let user = await User.findOne({ sub: commentData.user.sub });
    if (!user) {
      user = await User.create(commentData.user);
    }
    commentData.user = user._id;
    // Create the comment, add it to the parent post, and save
    const parent = await Post.findById(commentData.parentId);
    const createdComment = await Comment.create(commentData);
    parent.comments.push(createdComment._id);
    await parent.save();
    res.json(createdComment);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function remove(req, res) {
  try {
    const deletedComment = await Comment.findByIdAndRemove(req.params.id);
    const parentPost = await Post.findById(deletedComment.parentId);
    const index = parentPost.comments.indexOf(deletedComment._id);
    parentPost.comments.splice(index, 1);
    parentPost.save();
    res.json(deletedComment);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function updatePost(req, res) {
  try {
    const editedComment = await Comment.findById(req.params.id);
    const commentData = { ...req.body, isEdited: true };

    for (key in commentData) {
      editedComment[key] = commentData[key];
    }
    editedComment.save();
    res.json(editedComment);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function show(req, res, next) {
  try {
    const comment = await Comment.findById(req.params.id)
    res.json(comment);
  } catch (error) {
    res.status(400).json(error);
  }
}