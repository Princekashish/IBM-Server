// Middlewares/authvalidation.middlewares.js
export const signupValidation = (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    typeof username !== "string" ||
    username.length < 3 ||
    username.length > 100
  ) {
    return res
      .status(400)
      .json({ message: "Bad request", error: "Invalid or missing username" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== "string" || !emailRegex.test(email)) {
    return res
      .status(400)
      .json({ message: "Bad request", error: "Invalid or missing email" });
  }

  if (
    !password ||
    typeof password !== "string" ||
    password.length < 4 ||
    password.length > 100
  ) {
    return res
      .status(400)
      .json({ message: "Bad request", error: "Invalid or missing password" });
  }

  next();
};
export const loginValidation = (req, res, next) => {
  const { email, password } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      return res.status(400).json({ message: "Bad request", error: "Invalid or missing email" });
  }

  if (!password || typeof password !== 'string' || password.length < 4 || password.length > 100) {
      return res.status(400).json({ message: "Bad request", error: "Invalid or missing password" });
  }

  next();
};
