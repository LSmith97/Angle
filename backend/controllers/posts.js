const { Post, Comment, User } = require("../models");

module.exports = {
  index,
  show,
  create,
  remove,
  update: updatePost,
//   allPosts,
};

async function index(req, res) {
  try {
    const results = await Post.find({}).sort({ createdAt: -1 }).limit(5);
    res.json(results);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function show(req, res, next) {
  try {
    const post = await Post.findById(req.params.id).populate("comments");
    //   const allComments = await Comment.find({parentId: post._id})
    res.json(post);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function remove(req, res) {
  try {
    const deletedPost = await Post.deleteOne({ _id: req.params.id });
    await Comment.deleteMany({ parentId: req.params.id });
    res.json(deletedPost)
  } catch (error) {
    res.status(400).json(error);
  }
}

async function create(req, res) {
  const postData = { ...req.body };
  try {
    res.json(await Post.create(postData))
  } catch (error) {
    res.status(400).json(error);
  }
}

async function updatePost(req, res) {
  try {
    const editedPost = await Post.findById(req.params.id);
    const postData = { ...req.body };
    postData.isEdited = true;

    for (key in postData) {
      editedPost[key] = postData[key];
    }
    editedPost.save();
    res.json(editedPost)
  } catch (error) {
    res.status(400).json(error);
  }
}

// async function allPosts(req, res) {
//   try {
//     const POSTS_PER_PAGE = 10;
//     const pageNum = Number(req.params.pageNum);
//     const results = await Post.find({})
//       .sort({ createdAt: -1 })
//       .limit(POSTS_PER_PAGE)
//       .skip((pageNum - 1) * POSTS_PER_PAGE);
//     res.json();
//   } catch (err) {
//     res.status(400).json(error);
//   }
// }
