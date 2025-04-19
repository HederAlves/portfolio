-- CreateTable
CREATE TABLE "_ProjectTotechnology" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProjectTotechnology_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjectTotechnology_B_index" ON "_ProjectTotechnology"("B");

-- AddForeignKey
ALTER TABLE "_ProjectTotechnology" ADD CONSTRAINT "_ProjectTotechnology_A_fkey" FOREIGN KEY ("A") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectTotechnology" ADD CONSTRAINT "_ProjectTotechnology_B_fkey" FOREIGN KEY ("B") REFERENCES "technologies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
