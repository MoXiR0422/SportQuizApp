const router = require('express').Router();
const {  
    getCodePhone,
    authCodeIdentify,   
    loginAuth,
    registration,
    forgetPassword,
} = require('../Conroller/auth');

router.post('/', loginAuth);
router.post('/getCode', getCodePhone); 
router.post('/authCodeIdentify', authCodeIdentify);
router.post('/registration', registration);
router.get('/ForgetPassword', forgetPassword);

module.exports = router;