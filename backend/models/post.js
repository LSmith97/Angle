const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const uploadSchema = new mongoose.Schema({
    url: {type: String, required: true},
    description: { type: String},
    alt: {type: String, default:""} 
})

const postSchema = new Schema(
    {
        title: {
            type: String, 
            required: true,  
        }, 
        body: { 
            type: String,
            max: 500, 
            required: true, 
        }, 
        uploads:  [uploadSchema],  
        comments: [{
            type: Schema.Types.ObjectId, 
            ref: 'Comment'
        }], 
        isEdited: {
            type: Boolean, 
            default: false
        }, 
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            // required: true
        },
        userName: String,
        userAvatar: String
    }, {
        timestamps: true, 
    }
)

module.exports = mongoose.model('Post', postSchema);