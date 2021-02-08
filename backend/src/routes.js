const routes = require('express').Router();
const multer = require('multer');
const multerconfig = require('./config/multer');

routes.post("/post", multer(multerconfig).single('file'), (req, res) => {

    console.log(req.file);
    return res.json({ hello: 'Word' })
});

module.exports = routes;