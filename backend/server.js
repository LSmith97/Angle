///////////////////////////////
// DEPENDENCIES
///////////////////////////////

require("dotenv").config();
require("./config/db.connection.js");

const { PORT } = process.env;

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

// Routers
const postsRouter = require("./routes/posts.js");
const usersRouter = require("./routes/users.js");
const commentsRouter = require("./routes/comments.js");
const indexRouter = require("./routes/index.js");

///////////////////////////////
// Middleware
////////////////////////////////

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

///////////////////////////////
// ROUTES
////////////////////////////////

app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);
app.use("/users", usersRouter);
app.use("/", indexRouter);

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
