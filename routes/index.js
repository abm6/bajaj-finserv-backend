var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.deflect);

router.get('/challenge', (req, res) => {
	res.send(`You need to post data as data : ["1","ABC","ETC?"] `);
});

router.post('/challenge', userController.sendCount);

module.exports = router;
