const jwt = require("jsonwebtoken");

exports.verify = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  req.user = jwt.verify(token, process.env.JWT_SECRET);
  next();
};

exports.allow =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role))
      return res.status(403).json({ message: "Forbidden" });
    next();
  };
