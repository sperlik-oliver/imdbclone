/*
  Warnings:

  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - Added the required column `date` to the `comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `director` to the `movie` table without a default value. This is not possible if the table is not empty.
  - Made the column `image` on table `movie` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `username` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` ADD COLUMN `date` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `movie` ADD COLUMN `director` VARCHAR(191) NOT NULL,
    MODIFY `image` LONGBLOB NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `name`,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `_MovieToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_MovieToUser_AB_unique`(`A`, `B`),
    INDEX `_MovieToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_MovieToUser` ADD CONSTRAINT `_MovieToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `movie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_MovieToUser` ADD CONSTRAINT `_MovieToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
