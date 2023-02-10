const express = require('express');
const Controller = require('../controllers/controller');
const verifyTokeMiddleware = require('../middleware/verifyToken');

const router = express.Router();

router.get('/', Controller.helloWorld);
router.get('/me', verifyTokeMiddleware.verifyToken, Controller.aboutMe);
router.post('/updateMe', verifyTokeMiddleware.verifyToken, Controller.update);
router.delete('/delete', verifyTokeMiddleware.verifyToken, Controller.delete);

module.exports = router;
