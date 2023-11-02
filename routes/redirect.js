const router = require('express').Router();
const { getLinks, findById } = require('../ctrls/site');
const createError = require('http-errors');

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    const item = findById(id);

    if(!item) {
        next(createError(404));
        return;
    }

    res.redirect(item.link);
})

module.exports = router;