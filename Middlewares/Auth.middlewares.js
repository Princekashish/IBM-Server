import jwt from 'jsonwebtoken'
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(401).json({ message: 'Access Denied No Token Provided' });
    }
  
    try {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = verified.id; 
      next();
    } catch (err) {
      res.status(400).json({ message: 'Invalid Token' });
    }
  };
  
  export default authenticateToken;
  