const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} = require("../controllers/recordController");

// 🔐 Apply middleware
router.post("/", protect, authorize("Admin"), createRecord);
router.get("/", protect, authorize("Admin", "Analyst", "Viewer"), getRecords);
router.put("/:id", protect, authorize("Admin"), updateRecord);
router.delete("/:id", protect, authorize("Admin"), deleteRecord);

module.exports = router;