import express from "express";

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ title: "Welcome to node + typescript + express template" });
});

export default router;
