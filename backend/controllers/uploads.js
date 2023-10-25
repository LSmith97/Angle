module.exports = {
  create: handleUpload,
  remove,
  update: updatePost,
}

async function handleUpload(file) {
    const res = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
    return res;
  }