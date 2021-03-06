const router = require("express").Router();
const userController = require("../../controllers/userController");
const { route } = require("./quiz");

// Matches with "/api/user"
router.route("/").get(userController.findAll);

// Matches with "/api/user/signup/:id"
router
  .route("/signup")
  // .get(userController.findAll)
  .post(userController.create);
// .delete(userController.remove);

// Matches "/api/user/login"

router
  .route("/login")
  // .get(userController.findAll)
  .post(userController.findByEmail);

///api/user/:id
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
