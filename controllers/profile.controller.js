const ProfileService = require('../services/profile.service');

class ProfileController {
    async createProfileByUser(req, res) {
        try {
            const { identity_type, identity_number, address, userId } = req.body;
            if (!identity_type || !identity_number || !address || !userId) {
                return res.status(400).json({ error: 'Input tidak semua terisi' });
            }
            const profile = await ProfileService.createProfileByUser({
                identity_type,
                identity_number,
                address,
                userId
            });
            return res.status(201).send({
                success: true,
                status: 201,
                message: "data profile berhasil",
                data: profile,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                status: 500,
                message: error.message,
            });
        }
    }
    async deleteProfileByUser(req, res) {
        try {

        } catch (error) {
            return res.status(500).json({
                success: false,
                status: 500,
                message: error.message,
            });
        }
    }
    async updateProfileByUser(req, res) {
        try {

        } catch (error) {
            return res.status(500).json({
                success: false,
                status: 500,
                message: error.message,
            });
        }
    }
    async getProfileByUser(req, res) {
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
module.exports = new ProfileController;