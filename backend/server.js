///////////////////////////////
// DEPENDENCIES
///////////////////////////////

require("dotenv").config();
require('./config/db.connection.js')
require('./config/cloudinary.connection.js')

const { PORT } = process.env;

const express = require("express");
const app = express();
const cloudinary = require("cloudinary").v2
const cors = require("cors")
const morgan = require("morgan")
const multer = require("multer")

const postsRouter = require('./routes/posts.js')
const usersRouter = require('./routes/users.js')
const commentsRouter = require('./routes/comments.js')
const uploadsRouter = require ('./routes/uploads.js')
const indexRouter = require('./routes/index.js')

///////////////////////////////
// Middleware
////////////////////////////////
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Set your upload destination
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + '-' + uniqueSuffix);
    },
  });
const upload = multer({ storage });

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(multer())

///////////////////////////////
// ROUTES
////////////////////////////////

app.use('/posts', postsRouter)
app.use('/comments', commentsRouter)
app.use('/uploads', uploadsRouter(upload))
app.use('/users', usersRouter)
app.use('/', indexRouter)

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

