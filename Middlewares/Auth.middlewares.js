import jwt from "jsonwebtoken";

const authenticateToken = async (req, res, next) => {
  const token = req.headers["authorization"]; 

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied: No Token Provided" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified.id; 
    console.log("Authenticated user ID:", req.user); 
    next();
  } catch (err) {
    console.error("Authentication error:", err);
    res.status(400).json({ message: "Unauthorized, invalid token" });
  }
};

export default authenticateToken;
