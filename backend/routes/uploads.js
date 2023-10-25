const express = require("express");
const router = express.Router();
const uploadsCtl = require("../controllers/uploads")

router.post('/posts/:id/uploads/', uploadsCtl.create);
router.delete('/posts/:id/uploads/:uploadId', uploadsCtl.remove);
router.put('/uploads/:id', uploadsCtl.update);

module.exports = router;
