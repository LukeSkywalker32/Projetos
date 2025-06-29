"use strict";

/** @type {import('sequelize-cli').Migration} */

export default {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("users", {
			id: {
				primaryKey: true,
				allowNull: false,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			password_hash: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			admin: {
				type: Sequelize.BOOLEAN,
				defaultValue: false,
				allowNull: false,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		});
	},

	//yarn  sequelize db:migrate:undo ou yarn sequelize db:migrate:undo:all
	async down(queryInterface) {
		await queryInterface.dropTable("users");
	},
};
