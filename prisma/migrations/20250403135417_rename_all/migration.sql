/*
  Warnings:

  - The primary key for the `Player` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `codiName` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `playerId` on the `Player` table. All the data in the column will be lost.
  - Added the required column `codi_name` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `player_id` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Player" (
    "player_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "codi_name" TEXT NOT NULL
);
INSERT INTO "new_Player" ("category", "email", "name") SELECT "category", "email", "name" FROM "Player";
DROP TABLE "Player";
ALTER TABLE "new_Player" RENAME TO "Player";
CREATE UNIQUE INDEX "Player_email_key" ON "Player"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
