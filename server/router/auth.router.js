const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const validate = require('../middlewares/validate-middleware');
const signupSchema = require('../validators/auth.validate');


router.route('/').get(authController.home);

router.route('/register').post( validate(signupSchema), authController.register);

router.route('/login').post(authController.login);


module.exports = router ;