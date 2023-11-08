const express = require('express');
const router = express.Router();
const postCtl = require('../controllers/posts');
const uploadsCtl = require("../controllers/uploads");
const multer = require('multer');
const upload = multer();



/* GET users listing. */
router.get('/', postCtl.index);
// router.get('/pages/:pageNum', postCtl.allPosts)
router.get('/:id', postCtl.show);
router.post('/', postCtl.create);
router.post('/:id/uploads', upload.array('fileUploads', "6"), uploadsCtl.insertUploads);
router.delete('/:id', postCtl.remove);
router.put('/:id', postCtl.update);

module.exports = router;