import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const userController = new CreateUserController();

router.post("/users", userController.handle);

router.get("/test", (request, response) => {
    return response.send("ola")
} )

export { router };