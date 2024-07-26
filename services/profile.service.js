const prisma = require('../config/prisma');

class ProfileService {
    async createProfileByUser(data) {
        const profile = await prisma.Profiles.create({
            data,
        });


        return profile;
    }
    async deleteProfileByUser(profileId) {
        let profile = await prisma.Profiles.delete({
            where: {
                id: Number(profileId)
            },
        });
        return profile;
    }
    async updateProfileByUser(req, res) {

    }
    async getProfileByUser(userId) {
        let profile = await prisma.Profiles.findUnique({
            where: {
                userId: Number(userId),
            },
        });
        return profile;
    }
}

module.exports = new ProfileService;