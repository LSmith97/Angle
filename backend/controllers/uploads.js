const { Upload } = require ('../models')

module.exports = {
  create: handleUpload,
}

async function handleUpload(req, res) {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const publicId = result.public_id;

    const newUpload = new Upload({
      publicId: publicId,
      user: '', // Set the user information
      description: '', // Set the description
    });
    newUpload.save((err, upload) => {
      if (err) {
        console.error('Error saving to MongoDB:', err);
        return res.status(500).json({ error: 'File upload and save failed' });
      }
      res.json({ publicId: upload.publicId, user: upload.user, description: upload.description });
    });
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    res.status(500).json({ error: 'File upload failed' });
  }
};