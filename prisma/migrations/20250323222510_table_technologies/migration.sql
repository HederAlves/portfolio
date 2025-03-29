-- CreateTable
CREATE TABLE "technologies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "emphasis" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "technologies_pkey" PRIMARY KEY ("id")
);
