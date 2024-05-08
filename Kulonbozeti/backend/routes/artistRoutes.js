const express = require("express");
const {
    getAllArtists,
    getArtist,
    saveArtist,
    updateArtist,
    deleteArtist
} = require("../controllers/artistController");

const router = express.Router();

// http://localhost:3005/api/artists
router.get("/artist", getAllArtists);

// http://localhost:3005/api/artists/artistid
router.get("/artists/:ArtistId", getArtist);

// http://localhost:3005/api/artist
/*
{
    "Title": "{{$randomArtistName}}""
}
*/
router.post("/artists", saveArtist);

// http://localhost:3005/api/album/id
/*
{
    ""Title": "{{$randomAlbumName}}"""
}
*/
router.put("/artists/:ArtistId", updateArtist);

// http://localhost:3005/api/album/id
router.delete("/artists/:ArtistId", deleteArtist);

module.exports = {
  routes: router
};