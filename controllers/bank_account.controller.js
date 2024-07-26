const BankService = require('../services/bank_account.service');

class BankAccountController {
    async createBankAccount(res, res) {
        try {

        } catch (error) {
            return res.status(500).json({
                success: false,
                status: 500,
                message: error.message,
            });
        }
    }
    async getBankAccount(req, res) {
        try {

        } catch (error) {
            return res.status(500).json({
                success: false,
                status: 500,
                message: error.message,
            });
        }
    }
    async deleteBankAccount(req, res) {
        try {

        } catch (error) {
            return res.status(500).json({
                success: false,
                status: 500,
                message: error.message,
            });
        }
    }
    async updateBankAccount(req, res) {
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
module.exports = new BankAccountController;