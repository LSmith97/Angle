const cloudinary = require('cloudinary').v2;

const {CLOUDINARY_URL, CLOUD_NAME, API_KEY, API_SECRET} = process.env

// Return "https" URLs by setting secure: true
let clConfig = cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
    use_filename: true, 
    folder: 'angle/assets',
    secure: true,
  });

// Log the configuration
console.log(clConfig);