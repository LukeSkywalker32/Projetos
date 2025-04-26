import * as Yup from "yup";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import authConfig from "../../config/auth.js";

class SessionController {
	async store(req, res) {
		const schema = Yup.object().shape({
			email: Yup.string()
				.strict()
				.email("E-mail deve ser um e-mail válido")
				.required(),
			password: Yup.string()
				.min(6, "Senha deve conter no minimo 6 caracteres")
				.required(),
		});

		const EmailorPasswordInvalid = () => {
			return res.status(401).json({ error: "E-mail ou senha inválidos" });
		};

		// const isValid = await schema.isValid(req.body);
		// if (!isValid) {
		//   return EmailorPasswordInvalid();
		// }
		try {
			await schema.validate(req.body, { abortEarly: false }); // Valida os campos e retorna todas as mensagens de erro
		} catch (err) {
			return res.status(400).json({ errors: err.errors }); // Retorna os erros do Yup
		}

		const { email, password } = req.body;
		const user = await User.findOne({
			where: {
				email,
			},
		});
		if (!user) {
			return EmailorPasswordInvalid();
		}
		const isValidPassword = await user.comparePassword(password);
		if (!isValidPassword) {
			return EmailorPasswordInvalid();
		}
		//return res.json({message:"Login realizado com sucesso"})
		return res.status(201).json({
			id: user.id,
			name: user.name,
			email: user.email,
			admin: user.admin,
			token: jwt.sign({ id: user.id, name: user.name }, authConfig.secret, {
				expiresIn: authConfig.expiresIn,
			}),
		});
	}
}

export default new SessionController();
