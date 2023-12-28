import express from "express";

const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ hello: "world" });
});

export default router;
