import jwt from "jsonwebtoken";
import authConfig from "../../config/auth.js";

function authMiddleware(req, res, next) {
	const authToken = req.headers.authorization;

	if (!authToken) {
		return res.status(401).json({ error: "Token não informado" });
	}

	const token = authToken.split(" ").at(1); // Pega o token do header Authorization
	try {
		jwt.verify(token, authConfig.secret, (err, decoded) => {
			if (err) {
				throw new Error();
			}
			req.userId = decoded.id;
			req.userName = decoded.name;
		}); // Verifica se o token é válido
	} catch (err) {
		return res.status(401).json({ error: "Token inválido" });
	}
	return next(); // Chama o próximo middleware ou rota
}
export default authMiddleware;
