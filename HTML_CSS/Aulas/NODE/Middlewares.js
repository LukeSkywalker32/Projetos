
export function validarUsuario(req, res, next) {
    const { name, email, age} = req.body;

    // Verificar se todos os campos estão preenchidos

    if (!name || !email || !age) {
        return res.status(400).json({message: "Todos os campos são obrigatórios!"});
    }

    // Verificar se o email é valido usando Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({message: "Email inválido!"});
    }
    // Verificar se a idade é um número e maior que 0

    if (isNaN(age) || age <= 0) {
        return res.status(400).json({message: "Idade inválida!"});
    }
    // Se ok em todas as validações entao:
    next();

}