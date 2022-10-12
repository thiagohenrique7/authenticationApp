import { Router } from "express";
import { UsersController } from "./controllers/UserController"


const routes = Router();

routes.get("/", UsersController.getUsers)
routes.post("/createUser", UsersController.createUser)

export default routes;