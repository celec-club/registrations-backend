const RegisterService = require("../services/register.service");

const RegisterController = {
  create: async (req, res) => {
    try {
      const student = await RegisterService.create(req.body);
      res.status(201).json(student);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: err.message });
    }
  },

  getAll: async (req, res) => {
    try {
      const students = await RegisterService.getAll();
      res.status(200).json(students);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error." });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await RegisterService.getById(id);

      if (!student) {
        res.status(404).json({ messgae: "Student not found." });
      }

      res.status(200).json(student);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error." });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const student = req.body;

      const update_student = await RegisterService.update(id, student);

      res.status(200).json(update_student);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted_student = await RegisterService.delete(id);

      if (!deleted_student) {
        return res.status(404).json({ error: "Student not found." });
      }

      res.status(200).json({ message: "Student deleted successfully." });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};

module.exports = RegisterController;
