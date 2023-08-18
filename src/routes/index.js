var express = require('express');
var Controller = require('../controllers/controller')

const router = express.Router();

router.get("/status", async (req, res) => {
    const controller = new Controller();
    const response = await controller.getMessage();
    return res.send(response);
})

module.exports = router;