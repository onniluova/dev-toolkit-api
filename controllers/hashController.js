const HashingService = require('../services/hashService');

const hashController = {
    async generateHash(req, res, next) {
        try {
            const {text, algorithm} = req.body;

            if (!text) {
                return res.status(400).json({
                    status: 'error',
                    message: 'Text is required'
                });
            }

            const hashResult = await HashingService.generateHash(text, {algorithm});

            res.json({
                status: 'success',
                data: hashResult
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = hashController;