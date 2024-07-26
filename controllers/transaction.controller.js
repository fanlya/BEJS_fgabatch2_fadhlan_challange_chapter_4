const TransactionService = require('../services/transaction.service');

class TransactionController {
    async createTransaction(req, res) {
        try {

        } catch (error) {
            return res.status(500).json({
                success: false,
                status: 500,
                message: error.message,
            });
        }
    }
    async getTransaction(req, res) {
        try {

        } catch (error) {
            return res.status(500).json({
                success: false,
                status: 500,
                message: error.message,
            });
        }
    }
}

module.exports = new TransactionController;