const Record = require("../models/Record");

// 💰 Total Income
exports.getTotalIncome = async (req, res) => {
  try {
    const result = await Record.aggregate([
      { $match: { type: "income" } },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);

    res.json({ totalIncome: result[0]?.total || 0 });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 💸 Total Expense
exports.getTotalExpense = async (req, res) => {
  try {
    const result = await Record.aggregate([
      { $match: { type: "expense" } },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);

    res.json({ totalExpense: result[0]?.total || 0 });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📊 Net Balance
exports.getNetBalance = async (req, res) => {
  try {
    const income = await Record.aggregate([
      { $match: { type: "income" } },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);

    const expense = await Record.aggregate([
      { $match: { type: "expense" } },
      { $group: { _id: null, total: { $sum: "$amount" } } }
    ]);

    const net = (income[0]?.total || 0) - (expense[0]?.total || 0);

    res.json({ netBalance: net });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📂 Category-wise totals
exports.getCategoryWise = async (req, res) => {
  try {
    const result = await Record.aggregate([
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" }
        }
      }
    ]);

    res.json(result);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📅 Monthly trends
exports.getMonthlyTrends = async (req, res) => {
  try {
    const result = await Record.aggregate([
      {
        $group: {
          _id: { $month: "$date" },
          total: { $sum: "$amount" }
        }
      },
      { $sort: { "_id": 1 } }
    ]);

    res.json(result);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};