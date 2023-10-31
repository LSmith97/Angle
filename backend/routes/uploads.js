const express = require("express");
const router = express.Router();
const uploadsCtl = require("../controllers/uploads");
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Set your upload destination
  },
  filename: function (req, file, cb) {
    // Customize the filename as needed (e.g., to avoid overwriting files with the same name)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

const upload = multer({ storage });

router.post('/posts/:id/uploads/', upload.single('file'), uploadsCtl.create);

module.exports = router;
