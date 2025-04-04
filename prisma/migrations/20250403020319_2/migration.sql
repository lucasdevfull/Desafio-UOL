/*
  Warnings:

  - You are about to drop the column `codiname` on the `Player` table. All the data in the column will be lost.
  - Added the required column `codiName` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Player" (
    "player_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "codiName" TEXT NOT NULL
);
INSERT INTO "new_Player" ("category", "email", "name", "phoneNumber", "player_id") SELECT "category", "email", "name", "phoneNumber", "player_id" FROM "Player";
DROP TABLE "Player";
ALTER TABLE "new_Player" RENAME TO "Player";
CREATE UNIQUE INDEX "Player_email_key" ON "Player"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
