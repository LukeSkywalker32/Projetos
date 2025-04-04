import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer.js";
import UserController from "./app/controllers/UserController.js";
import SessionController from "./app/controllers/SessionController.js";
import ProductsController from "./app/controllers/ProductsController.js";


const routes = new Router();

const upload = multer(multerConfig);

routes.post("/users", UserController.store)
routes.post("/session", SessionController.store)
routes.post("/Products", upload.single('file'),ProductsController.store)

export default routes;
