const shows = require("../shows.json");

exports.home = (req, res) => {
  res.status(200).render("home", { shows });
};

exports.privacy = (req, res) => {
  res.status(200).render("privacy");
};
