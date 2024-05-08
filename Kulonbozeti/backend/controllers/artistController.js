const Artist = require("../models/artists");
const { updateAlbum } = require("./artistController");

const getAllArtists = async (req, res) => {
  const profiles = await Album.findAndCountAll();
  res.send({
    context: artists.rows,
    total: artists.count
  });
};

const getArtist = async (req, res) => {
  const id = req.params.id;
  await Artist.findOne({ where: { id: id } }).then((item) => {
    if (item != null) {
      res.send(item);
    } else {
      res.sendStatus(404);
    }
  });
};

const saveArtist = async (req, res) => {
  const album = {
    Title: req.body.Title,
    ArtistId: req.body.ArtistId
  };
  await Artist.create(artist).then(() => {
    res.sendStatus(201);
  });
};

const updateArtist = async (req, res) => {
  const id = req.params.id;
  await Artist.findByPk(id).then((item) => {
    if (item != null) {
      item
        .update({
          Name: req.body.Title,
          ArtistId: req.body.ArtistId
        })
        .then(() => {
          res.sendStatus(204);
        });
    } else {
      res.sendStatus(404);
    }
  });
};

const deleteArtist = async (req, res) => {
  const id = req.params.id;
  await Artist.findByPk(id).then((item) => {
    if (item != null) {
      item.destroy();
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  });
};

module.exports = {
  getAllArtists,
  getArtist,
  saveArtist,
  updateArtist,
  deleteArtist
};