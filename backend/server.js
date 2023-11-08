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
const indexRouter = require('./routes/index.js')

///////////////////////////////
// Middleware
////////////////////////////////

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

///////////////////////////////
// ROUTES
////////////////////////////////

app.use('/posts', postsRouter)
app.use('/comments', commentsRouter)
app.use('/users', usersRouter)
app.use('/', indexRouter)
app.use('/post/:id/uploads', postsRouter)

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

