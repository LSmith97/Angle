module.exports = function (req, res, next) {
  const token = req.headers["x-access-token"]?.split(" ")[1];

  if (token) {
    jwt.verify(token, process.env.PASSPORTSECRET, (err, decoded) => {
      if (err)
        return res.json({
          isLoggedIn: false,
          message: "failed to authenticate",
        });
      req.user = {
        id: decoded.id,
        username: decoded.username,
      };
      next();
    });
  } else {
    res.json({ 
        message: "Incorrect Token Given", 
        isLoggedIn: false 
    });
  }
}
