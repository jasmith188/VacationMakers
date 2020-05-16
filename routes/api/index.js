const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const bookingRoutes = require("./booking");
const flightRoutes = require("./flights");

//User Routes
router.use("/users", userRoutes);
//flight Routes
router.use("/flights", flightRoutes);
//booking Routes
router.use("/booking", bookingRoutes);
// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
