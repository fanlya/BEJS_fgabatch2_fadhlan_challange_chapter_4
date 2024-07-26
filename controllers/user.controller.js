const UserService = require('../services/user.service');

class UserController {
    async createUser(req, res) {
        try {
            const user = await UserService.createUser(req.body);
            return res.send({
                success: true,
                status: 201,
                message: "data masuk",
                data: user,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                status: 500,
                message: error.message,
            });
        }
    }

    async getUsers(req, res) {
        try {
            let user = await UserService.getUsers();
            return res.status(200).json({
                success: true,
                status: 200,
                message: "data fetched successfully",
                data: user,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                status: 500,
                message: error.message,
            });
        }
    }
    async getUserId(req, res) {
        try {
            let user = await UserService.getUserId(req.params.id);
            let data;
            if (user) {
                data = {
                    success: true,
                    status: 200,
                    message: "data berhasil didapatkan",
                    data: user,
                }
            }
            else {
                data = {
                    success: false,
                    status: 404,
                    message: error.message,
                }
            }
            return res.json(data);
        } catch (error) {
            return res.status(500).json({
                success: false,
                status: 500,
                message: error.message,
            });
        }
    }
    async deleteUserById(req, res) {
        try {
            await UserService.deleteUserById(req.params.id);
            return res.status(204).end();
        } catch (error) {
            return res.status(500).json({
                success: false,
                status: 500,
                message: error.message,
            });
        }
    }
    async updateUser(req, res) {
        try {
            const user = await UserService.updateUser(req.params.id, req.body);
            return res.json({
                success: true,
                status: 200,
                message: "data update successfully",
                data: user,
            });

        } catch (error) {
            return res.status(500).json({
                success: false,
                status: 500,
                message: error.message,
            });
        }
    }
}


module.exports = new UserController;