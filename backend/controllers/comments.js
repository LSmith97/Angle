const {Post, Comment, User} = require("../models")

module.exports = {
    create,
    remove,
    update: updatePost,
}

async function create(req, res) {
    const commentData = { ...req.body }
    // commentData.user = req.user._id;
    // commentData.userName = req.user.name;
    // commentData.userAvatar = req.user.avatar;
    try {
        const parent = await Post.findById(req.params.id)
        commentData.parentId = parent._id
        const createdComment = await Comment.create(commentData)
        parent.comments.push(createdComment._id)
        await parent.save()
        res.json(createdComment)
    }
    catch (error) {
        res.status(400).json(error)
    }
}

async function remove(req, res) {
    try {
        const deletedComment = await Comment.findByIdAndRemove(req.params.commentId)
        const parentPost = await Post.findById(req.params.id);
        const index = parentPost.comments.indexOf(deletedComment._id)
        parentPost.comments.splice(index, 1);
        parentPost.save();
        res.json(deletedComment)

    } catch (error) {
        res.status(400).json(error)
    }
}

async function updatePost(req, res) {
    try {
        const editedComment = await Comment.findById(req.params.id)
        const commentData = {...req.body} 
        commentData.isEdited = true;
        
        for (key in commentData){
            editedComment[key] = commentData[key]
        }
        editedComment.save()
        res.json(editedComment)
    } catch (error) {
        res.status(400).json(error)
    }
}