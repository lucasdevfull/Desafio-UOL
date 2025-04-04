-- CreateTable
CREATE TABLE "Player" (
    "player_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "codiname" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_email_key" ON "Player"("email");
