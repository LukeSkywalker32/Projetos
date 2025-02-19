//Middleware para log as requisições
export function logRequest(req, res, next) {
    console.log(`Request: [${req.method}] - ${req.url}`);
    next();
}
// Middleware  para os Ids das rotas
export function validateId(orders){
    return (req, res, next) => {
    const { id } = req.params;
    const order = orders.find((item) => item.id === id)

    if (!order) {
        return res.status(404).json({ message: 'Pedido não encontrado' });
    }
    next();
};
}