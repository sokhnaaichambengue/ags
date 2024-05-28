/* Router script */
const express = require('express');
const  router = express.Router();
const home = require('../controllers/index')

router.use(home.getHome,home.postHome)

router.get('/',home.getHome)
router.post('/',home.postHome)

module.exports = router;
