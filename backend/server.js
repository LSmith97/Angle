///////////////////////////////
// DEPENDENCIES
///////////////////////////////

require("dotenv").config();
require("./config/db.connection.js");

const { PORT, AUTH0_AUDIENCE, AUTH0_ISSUER_BASE_URL } = process.env;

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const { auth } = require("express-oauth2-jwt-bearer");
const guard = require("express-jwt-permissions")

const postsRouter = require("./routes/posts.js");
const usersRouter = require("./routes/users.js");
const commentsRouter = require("./routes/comments.js");
const indexRouter = require("./routes/index.js");

///////////////////////////////
// Middleware
////////////////////////////////

const jwtCheck = auth({
  audience: AUTH0_AUDIENCE,
  issuerBaseURL: AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: "RS256",
});

app.use(jwtCheck);

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
