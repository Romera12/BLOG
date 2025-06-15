
const validateId = (paramName) => (req, res, next) => {
    const id = req.params[paramName];
    if (!id || isNaN(id) || parseInt(id) <= 0) {
        return res.status(400).json({ error: `El parámetro ${paramName} debe ser un número entero positivo` });
    }
    next();
};

module.exports = validateId;