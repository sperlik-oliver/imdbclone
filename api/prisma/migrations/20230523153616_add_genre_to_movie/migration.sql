/*
  Warnings:

  - Added the required column `genre` to the `movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `movie` ADD COLUMN `genre` VARCHAR(191) NOT NULL;
