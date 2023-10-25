const { Post, Comment, User } = require("../models");

module.exports = {
  create,
  login,
};

async function create(req, res, next) {
  const userData = { ...req.body };
  try {
    const takenUsername = await User.findOne({ username: userData.username });
    const takenEmail = await User.findOne({ email: userData.email });

    if (takenUsername || takenEmail) {
      res.json({ message: "Username or email already taken" });
    } else {
      res.json(await User.create(userData));
    }
  } catch (error) {
    res.status(400).json(error);
  }
}

async function login(req, res, next) {
  const userData = {...req.body}
  try {
    User.findOne({username: userData.username})
    .then( dbUser => {
      if (!dbUser) {
        return res.json({
          message: "Invalid Username or Password"
        })
      }
      bcript.compare(userData.password, dbuser.password)
      .then(isCorrect => {
        if(isCorrect) {
          const payload = {
            id: dbUser._id,
            username: dbUser.username
          }
          jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {expiresIn: 86400},
            (err, token) => {
              if (err) return res.json({message: err})
              return res.json({
                message: "Success",
                token: "Bearer " + token
              })
            }
          )
        } else {
          return res.json({
            message: "Invalid Username or Password"
          })
        }
      }) 
    })
  } catch (error) {
    res.status(400).json(error);
  }
}
