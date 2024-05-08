// automatically creating table on startup and inserting data
const sequelize = require("../backend/models/dbconfig");
const Artists = require("../backend/models/artists");

// default loading data
sequelize.sync({ force: true }).then(async () => {
  console.log("db is ready");
  for (let i = 1; i < 11; i++) {
    let num = Math.floor(Math.random() * 9000000000) + 1000000000;
    const artists = {
      ArtistId: `artists${i}`,
      Name: `artists${i}`,
    };
    await Artists.create(artists);
  }
  console.log("sample data inserted.");
});

// application
const express = require("express");
const artistRoutes = require("../backend/routes/artistRoutes");

const app = express();
app.use(express.json());

// application routes
app.get("/", (req, resp) => resp.send("application is up and running"));

app.use("/api", artistRoutes.routes);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Service endpoint= http://localhost:${PORT}`);
});

