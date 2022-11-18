const { createRating, getRatingById } = require("../controllers/rating");
const router = require("express").Router();

router.post("/api/create",createRating);
router.post("/api/getRating",getRatingById);

module.exports = router;
