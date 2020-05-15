const router = require("express").Router();
const usersController = require("../../controllers/bookingController");
// Matches with "/api/users"
router.route("/booking")
    .get(bookingController.findAll)
    .get(bookingController.findAll);

/* Authentication Routes */
router
  .route("/booking:id")
  .get(bookingController.findById)
  .put(bookingController.update)
  .delete(bookingController.remove);

module.exports = router;