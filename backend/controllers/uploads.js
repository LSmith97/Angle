const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const { clConfig } = require("../config/cloudinary.connection.js")
console.log(clConfig)

const Post = require('../models/post.js');

module.exports = { insertUploads };


async function insertUploads(req, res) {
  try {
    let result = await streamUpload(req);
    const foundPost = await Post.findById(req.params.id)
    const photoData = {...req.body, url: result.url}
    foundPost.uploads.push(photoData)
    await foundPost.save((err, upload) => {
      if (err) {
        console.error('Error saving to MongoDB:', err);
        return res.status(500).json({ error: 'File upload and save failed' });
      }
      res.json({ url: upload.url, user: upload.user, description: upload.description });
    });
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    res.status(500).json({ error: 'File upload failed' });
  }
};

function streamUpload(req) {
  return new Promise(function (resolve, reject) {
    const filename = req.file.originalname.split('.')[0]
    const altText = req.body.alt.replace(/ /g,'-').toLowerCase()
    const identifier = `${filename}-${altText}`
    const uploadConfig = {
      public_id: identifier,
      folder: '/angle/assets'
    }
    let stream = cloudinary.uploader.upload_stream((error, result) => {
      if (result) {
        console.log(result);
        resolve(result);
      } else {
        reject(error);
      }
    });
    streamifier.createReadStream(req.file.buffer).pipe(stream);
  });
}