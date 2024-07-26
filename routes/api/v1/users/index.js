const express = require('express');
const router = express.Router();
const USERS_CONTROLLER = require('../../../../controllers/user.controller');

router.get('/', USERS_CONTROLLER.getUsers);
router.get('/:id', USERS_CONTROLLER.getUserId);
router.post('/', USERS_CONTROLLER.createUser);
router.patch('/:id', USERS_CONTROLLER.updateUser);
router.delete('/:id', USERS_CONTROLLER.deleteUserById);

module.exports = router;