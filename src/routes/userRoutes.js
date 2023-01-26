import { Router } from "express";
import { signIn } from "../controllers/signInControllers.js";
import { signInValidation } from "../middlewares/signInMiddlewares.js";

const router = Router();

router.post("/sign-in", signInValidation, signIn);
export default router;