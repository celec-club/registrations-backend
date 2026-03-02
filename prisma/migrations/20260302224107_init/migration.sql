/*
  Warnings:

  - The values [traing] on the enum `Department` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Department_new" AS ENUM ('technical', 'communication', 'digital_marketing', 'external', 'training', 'design');
ALTER TABLE "data" ALTER COLUMN "department" TYPE "Department_new" USING ("department"::text::"Department_new");
ALTER TYPE "Department" RENAME TO "Department_old";
ALTER TYPE "Department_new" RENAME TO "Department";
DROP TYPE "public"."Department_old";
COMMIT;
