import Sequelize from "sequelize";

import configDatabase from "../config/database.js";

import User from "../app/models/User.js";
import Product from "../app/models/Product.js";
import Category from "../app/models/Category.js";
import mongoose from "mongoose";

const models = [User, Product, Category];

class Database {
	constructor() {
		this.init();
		this.mongo();
	}

	init() {
		this.connection = new Sequelize(configDatabase);
		models
			.map((model) => model.init(this.connection))
			.map(
				(model) => model.associate && model.associate(this.connection.models),
			);
	}
	mongo() {
		this.mongoConnection = mongoose.connect(
			"mongodb://localhost:27017/devburguer",
		);
	}
}

export default new Database();
