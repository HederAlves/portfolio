import { Controller, Get } from "@nestjs/common"
import { Technology } from "@core"
import { TechnologyPrisma } from "./technologies.prisma"

@Controller("technologies")
export class TechnologyController {
    constructor(private readonly repo: TechnologyPrisma) { }

    @Get()
    async getAll(): Promise<Technology[]> {
        return this.repo.getAll()
    }

    @Get("emphasis")
    async getEmphasis(): Promise<Technology[]> {
        return this.repo.getEmphasis()
    }
}
