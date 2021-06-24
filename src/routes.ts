import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();

const userController = new CreateUserController();
const tagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const complimentController = new CreateComplimentController();

router.post("/users", userController.handle);
router.post("/tags", ensureAdmin, tagController.handle);
router.post("/auth", authenticateUserController.handle);
router.post("/compliments", complimentController.handle);

export { router };