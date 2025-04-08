import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer.js";
import authMiddleware from "./middlewares/auth.js";

import UserController from "./app/controllers/UserController.js";
import SessionController from "./app/controllers/SessionController.js";
import ProductsController from "./app/controllers/ProductsController.js";
import CategoryController from "./app/controllers/CategoryController.js";


const routes = new Router();

const upload = multer(multerConfig);

routes.post("/users", UserController.store)
routes.post("/session", SessionController.store)

routes.use(authMiddleware); // Middleware de autenticação para todas as rotas abaixo
routes.post("/Products", upload.single('file'),ProductsController.store)
routes.get("/Products", ProductsController.index);

routes.post("/Categories", CategoryController.store);
routes.get("/Categories", CategoryController.index);

export default routes;
