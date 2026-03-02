-- CreateEnum
CREATE TYPE "Department" AS ENUM ('technical', 'communication', 'digital_marketing', 'external', 'traing', 'design');

-- CreateTable
CREATE TABLE "data" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "date_of_birth" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "is_member" BOOLEAN NOT NULL,
    "is_usthb_student" BOOLEAN NOT NULL,
    "student_id" TEXT NOT NULL,
    "study_level" TEXT NOT NULL,
    "field_of_study" TEXT NOT NULL,
    "skills" TEXT[],
    "area_of_interest" TEXT NOT NULL,
    "department" "Department" NOT NULL,
    "completed_projects" TEXT[],
    "motivation" TEXT NOT NULL,
    "school_certificate_url" TEXT NOT NULL,
    "cv_url" TEXT,
    "linkedin" TEXT,
    "github" TEXT,

    CONSTRAINT "data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "data_email_key" ON "data"("email");

-- CreateIndex
CREATE UNIQUE INDEX "data_phone_number_key" ON "data"("phone_number");
