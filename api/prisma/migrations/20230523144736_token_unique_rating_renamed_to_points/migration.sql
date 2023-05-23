/*
  Warnings:

  - You are about to drop the column `rating` on the `rating` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[token]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `points` to the `rating` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `rating` DROP COLUMN `rating`,
    ADD COLUMN `points` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `user_token_key` ON `user`(`token`);
