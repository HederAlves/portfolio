import { Module } from "@nestjs/common"
import { DbModule } from "src/db/db.module"
import { TechnologyPrisma } from "./technologies.prisma"
import { TechnologyController } from "./technologies.controller"

@Module({
    controllers: [TechnologyController],
    providers: [TechnologyPrisma],
    imports: [DbModule],
})
export class TechnologyModule { }
