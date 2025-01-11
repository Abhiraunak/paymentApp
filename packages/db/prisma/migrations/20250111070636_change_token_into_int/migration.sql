/*
  Warnings:

  - Changed the type of `token` on the `OnRampTransaction` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "OnRampTransaction" DROP COLUMN "token",
ADD COLUMN     "token" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "OnRampTransaction_token_key" ON "OnRampTransaction"("token");
