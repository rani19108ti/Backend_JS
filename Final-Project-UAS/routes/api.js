// TODO 2: SETUP ROUTING (ROUTER)

// impor Student Controller
const PatientController = require("../controllers/PatientController");
//impor express
const express = require ("express");
// impor object router
const router = express.Router();

// buat routing
router.get("/", (req, res) => {
    res.send("Hello Maniiies");
});

// buat routing student
router.get("/patients", PatientController.index);
router.post("/patients", PatientController.store);
router.put("/patients/:id", PatientController.update);
router.delete("/patients/:id", PatientController.destroy);
router.get("/patients/:id", PatientController.show);
router.get("/patients/search/:name", PatientController.search);
router.get("/patients/status/positive", PatientController.positive);
router.get("/patients/status/recovered", PatientController.recovered);
router.get("/patients/status/dead", PatientController.dead);

// export routing
module.exports = router;

