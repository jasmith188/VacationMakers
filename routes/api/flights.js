const router = require("express").Router();
const flightsController = require("../../controllers/flightsController");
// Matches with "/api/users"
router.route("/flights")
    .get(flightsController.findAll);

/* Authentication Routes */
router
  .route("/flights:id")
  .get(flightsController.findById)
  .put(flightsController.update)
  .delete(flightsController.remove);

module.exports = router;