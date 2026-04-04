const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const {
  getTotalIncome,
  getTotalExpense,
  getNetBalance,
  getCategoryWise,
  getMonthlyTrends
} = require("../controllers/summaryController");
router.get("/income", protect, authorize("Admin", "Analyst"), getTotalIncome);
router.get("/expense", protect, authorize("Admin", "Analyst"), getTotalExpense);
router.get("/balance", protect, authorize("Admin", "Analyst"), getNetBalance);
router.get("/category", protect, authorize("Admin", "Analyst"), getCategoryWise);
router.get("/monthly", protect, authorize("Admin", "Analyst"), getMonthlyTrends);

module.exports = router;