const RegisterService = require("../services/register.service");

class RegisterController {
  static async create(req, res) {
    try {
      const data = req.body;
      const student = await RegisterService.create(data);
      return res.status(201).json(student);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: err.message });
    }
  }

  static async getAll(req, res) {
    try {
      const students = await RegisterService.getAll();
      return res.status(200).json(students);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const student = await RegisterService.getById(id);

      if (!student) {
        return res.status(404).json({ message: "Student not found." });
      }

      return res.status(200).json(student);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const student = req.body;

      const updatedStudent = await RegisterService.update(id, student);
      return res.status(200).json(updatedStudent);
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: err.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      await RegisterService.delete(id);

      return res.status(200).json({ message: "Student deleted successfully." });
    } catch (err) {
      console.error(err);
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = RegisterController;
