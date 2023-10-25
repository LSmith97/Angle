const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const uploadSchema = new mongoose.Schema(
  {
    parentId: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
    publicId: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Upload', uploadSchema);