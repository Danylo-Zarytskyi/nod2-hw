const router =  require('express').Router();
const { getLinks, createImg } = require('../ctrls/site');

router.get('/', (req, res) => {
    const links = getLinks();
    const imgs = createImg();

    res.render('main', { links });
    res.render('main', { imgs });
})

module.exports = router;