const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST new response
router.post('/response', (req, res) => {
    const response = req.body;
    console.log(response);
    const sqlText = `INSERT INTO "feedback"
        ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);`;
    pool.query(sqlText, [response.feeling, response.understanding, response.support, response.comments])
        .then((result) => {
            console.log(`Added new response to DB`, response);
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`Error making db query ${sqlText}`, err);
            res.sendStatus(500);
        })
})

module.exports = router;