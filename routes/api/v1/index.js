const express = require('express');
const router = express.Router();

const USERS_ROUTER = require('./users');
// const TRANSACTION_ROUTER = require('./transaction');
const PROFILE_ROUTER = require('./profile');
// const BankAcc_ROUTER = require('./bank_account');

router.use('/users', USERS_ROUTER);
// router.use('/transactions', TRANSACTION_ROUTER);
router.use('/profiles', PROFILE_ROUTER);
// router.use('/accounts', BankAcc_ROUTER);

module.exports = router;