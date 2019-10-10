const router = require('express').Router();
const userController=require('../Controller/userController')

router.post('/signup',userController.signupUser)
router.post('/login',userController.loginUser)

module.exports = router