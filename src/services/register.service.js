const prisma = require("../config/prisma.client");

class RegisterService {
  static async create(student) {
    const {
      first_name,
      last_name,
      date_of_birth,
      email,
      phone_number,
      is_member,
      is_usthb_student,
      student_id,
      study_level,
      field_of_study,
      skills,
      area_of_interest,
      department,
      linkedin,
      github,
      completed_projects,
      motivation,
      school_certificate_url,
      cv_url,
    } = student;

    return await prisma.data.create({
      data: {
        first_name,
        last_name,
        date_of_birth,
        email,
        phone_number,
        is_member,
        is_usthb_student,
        student_id,
        study_level,
        field_of_study,
        skills,
        area_of_interest,
        department,
        linkedin,
        github,
        completed_projects,
        motivation,
        school_certificate_url,
        cv_url,
      },
    });
  }

  static async getAll() {
    return await prisma.data.findMany();
  }

  static async getById(id) {
    return await prisma.data.findUnique({ where: { id } });
  }

  static async update(id, student) {
    return await prisma.data.update({
      where: { id },
      data: student,
    });
  }

  static async delete(id) {
    return await prisma.data.delete({ where: { id } });
  }
}

module.exports = RegisterService;
