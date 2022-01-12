// impor Student Controller
const StudentController = require("../controllers/StudentController");
//impor express
const express = require ("express");
// impor object router
const router = express.Router();

// buat routing
router.get("/", (req, res) => {
    res.send("Hello Maniiies");
});

// buat routing student
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);
router.get("/students/:id", StudentController.show);

// export routing
module.exports = router;

