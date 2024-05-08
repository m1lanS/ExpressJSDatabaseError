const express = require('express');
const router = express.Router();
const { Paginator } = require('../paginator');

router.get('/artists', function (req, res, next) {
    // Az '/artists' útvonal kezelő függvény
});

router.get('/artist/add', function(req, res, next) {
    // Az '/artist/add' útvonal kezelő függvény
});

router.post('/artist/add', function(req, res, next) {
    // Az '/artist/add' útvonal POST kérés kezelő függvény
});

router.get('/artist/:ArtistId', function(req, res, next) {
    // Az '/artist/:ArtistId' útvonal kezelő függvény
});

router.post('/artist/edit/:ArtistId', function (req, res, next) {
    // Az '/artist/edit/:ArtistId' útvonal POST kérés kezelő függvény
});

module.exports = router;
