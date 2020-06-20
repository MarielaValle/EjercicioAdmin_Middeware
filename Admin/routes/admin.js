var express = require('express');
var router = express.Router();

const adminController = require('../controllers/adminController');

const adminMiddleware = require('../middlewares/adminMiddleware');

/* GET home page. */
router.get('/',adminController.raiz); 

router.post('/',adminMiddleware.log,adminController.log)

module.exports = router;