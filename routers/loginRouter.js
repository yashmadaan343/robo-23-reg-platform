const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('login', { user: req.user })
});

//export router
module.exports = router;