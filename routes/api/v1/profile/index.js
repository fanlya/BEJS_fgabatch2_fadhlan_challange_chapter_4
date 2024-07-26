const express = require('express');
const router = express.Router();
const PROFILES_CONTROLLER = require('../../../../controllers/profile.controller');

router.post('/', PROFILES_CONTROLLER.createProfileByUser);

module.exports = router;