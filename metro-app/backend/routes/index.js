const router = require('express').Router();

router.get('/', async (req, res) => {
	res.status(200).json('Home');
});

module.exports = router;
