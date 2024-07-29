import { Router } from "express";
import {
  loginValidation,
  signupValidation,
} from "../Middlewares/authvalidation.middlewares.js";
import { login, signup } from "../Controllers/signup.controller.js";
const router = Router();

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);

export default router;
