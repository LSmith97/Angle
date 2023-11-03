const express = require('express');
const router = express.Router();
const postCtl = require('../controllers/posts');
const uploadsCtl = require("../controllers/uploads");
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'angle/assets'); // Set your upload destination
  },
  filename: function (req, file, cb) {
    // Customize the filename as needed (e.g., to avoid overwriting files with the same name)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

const upload = multer({ storage });



/* GET users listing. */
router.get('/', postCtl.index);
// router.get('/pages/:pageNum', postCtl.allPosts)
router.get('/:id', postCtl.show);
router.post('/', postCtl.create);
router.post('/posts/:id/uploads/multi', upload.array('uploads', "6"), uploadsCtl.insertUploads);
router.delete('/:id', postCtl.remove);
router.put('/:id', postCtl.update);

module.exports = router;