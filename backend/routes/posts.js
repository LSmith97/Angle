const express = require('express');
const router = express.Router();
const postCtl = require('../controllers/posts');

/* GET users listing. */
router.get('/', postCtl.index);
// router.get('/pages/:pageNum', postCtl.allPosts)
router.get('/:id', postCtl.show);
router.post('/', postCtl.create);
router.delete('/:id', postCtl.remove);
router.put('/:id', postCtl.update);

module.exports = router;