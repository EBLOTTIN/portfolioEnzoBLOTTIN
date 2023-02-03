const express = require("express");

const router = express.Router();

const imageControllers = require("./controllers/imageControllers");

router.get("/images", imageControllers.browse);
router.get("/images/:id", imageControllers.read);
router.put("/images/:id", imageControllers.edit);
router.post("/images", imageControllers.add);
router.delete("/images/:id", imageControllers.destroy);

module.exports = router;
