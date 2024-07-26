const prisma = require('../config/prisma');

class UserService {
    async createUser(data) {
        let user = await prisma.Users.create({
            data,
        });
        return user;
    }
    async getUsers() {
        let users = await prisma.Users.findMany({
            orderBy: {
                id: 'asc',
            },
        });
        return users;
    }
    async getUserId(userId) {
        console.log(userId);
        let user = await prisma.Users.findUnique({
            where: {
                id: Number(userId),
            },
        });
        return user;
    }
    async deleteUserById(userId) {
        let user = await prisma.Users.delete({
            where: {
                id: Number(userId)
            },
        });
        return user;
    }
    async updateUser(userId, body) {
        let user = await prisma.Users.update({
            where: {
                id: Number(userId)
            },
            data: {
                name: body.name,
                email: body.email,
            }
        });
        return user;
    }
}
module.exports = new UserService;