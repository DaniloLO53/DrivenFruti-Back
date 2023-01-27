import { Router } from "express";
import { signIn } from "../controllers/signInControllers.js";
import { getCart, updateCart } from "../controllers/users.controller.js";
import { signInValidation } from "../middlewares/signInMiddlewares.js";

const router = Router();

router.post("/sign-in", signInValidation, signIn);
router.put("/cart", updateCart);
router.get("/cart", getCart);

export default router;