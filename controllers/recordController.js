const Record = require("../models/Record");

// ➕ Create Record (Admin only)
exports.createRecord = async (req, res) => {
  try {
    const { amount, type, category, date, note } = req.body;

    const record = await Record.create({
      amount,
      type,
      category,
      date,
      note,
      user: req.user.id
    });

    res.status(201).json(record);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📄 Get Records (All roles)
exports.getRecords = async (req, res) => {
  try {
    const { type, category, startDate, endDate } = req.query;

    let filter = {};

    if (type) filter.type = type;
    if (category) filter.category = category;

    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    const records = await Record.find(filter).sort({ date: -1 });

    res.json(records);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✏️ Update Record (Admin only)
exports.updateRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(record);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ❌ Delete Record (Admin only)
exports.deleteRecord = async (req, res) => {
  try {
    await Record.findByIdAndDelete(req.params.id);
    res.json({ message: "Record deleted" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};