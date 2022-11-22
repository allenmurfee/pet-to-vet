const router = require("express").Router();
const patientRoutes = require("./patientsPage");
const catRoutes = require("./catRoutes");
const dogRoutes = require("./dogRoutes");

router.use("/", patientRoutes);
router.use("/cat", catRoutes);
router.use("/dog", dogRoutes);

module.exports = router;