const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuid } = require("uuid");
const db = require("../../config/postgres");

const token = (user) =>
  jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hash = await bcrypt.hash(password, 10);

  await db.query("INSERT INTO users VALUES($1,$2,$3,$4,$5)", [
    uuid(),
    name,
    email,
    hash,
    role,
  ]);

  res.status(201).json({ message: "Registered" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = (await db.query("SELECT * FROM users WHERE email=$1", [email]))
    .rows[0];

  if (!user) return res.status(404).json({ message: "User not found" });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });

  res.json({
    token: token(user),
    role: user.role,
    name: user.name,
  });
};

exports.forgotPassword = async (req, res) => {
  const resetToken = uuid();

  await db.query(
    `UPDATE users SET reset_token=$1, reset_token_expiry=NOW()+INTERVAL '15 minutes'
     WHERE email=$2`,
    [resetToken, req.body.email],
  );

  console.log("RESET TOKEN:", resetToken);
  res.json({ message: "Reset link sent" });
};

exports.resetPassword = async (req, res) => {
  const hash = await bcrypt.hash(req.body.newPassword, 10);

  await db.query(
    `UPDATE users SET password=$1, reset_token=NULL
     WHERE reset_token=$2 AND reset_token_expiry > NOW()`,
    [hash, req.body.token],
  );

  res.json({ message: "Password updated" });
};
