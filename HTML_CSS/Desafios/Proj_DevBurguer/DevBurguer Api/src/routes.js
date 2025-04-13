import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer.js";
import authMiddleware from "./app/middlewares/auth.js";

import UserController from "./app/controllers/UserController.js";
import SessionController from "./app/controllers/SessionController.js";
import ProductsController from "./app/controllers/ProductsController.js";
import CategoryController from "./app/controllers/CategoryController.js";
import OrderController from "./app/controllers/OrderController.js";


const routes = new Router();

const upload = multer(multerConfig);

routes.post("/users", UserController.store)
routes.post("/session", SessionController.store)

routes.use(authMiddleware); // Middleware de autenticação para todas as rotas abaixo
routes.post("/Products", upload.single('file'),ProductsController.store)
routes.get("/Products", ProductsController.index);
routes.put("/Products/:id", upload.single("file"), ProductsController.update);

routes.post("/Categories", CategoryController.store);
routes.get("/Categories", CategoryController.index);

routes.post("/orders", OrderController.store);
routes.get("/orders", OrderController.index);
routes.put("/orders/:id", OrderController.update);

export default routes;
