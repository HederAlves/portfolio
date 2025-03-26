import { Controller, Get, Param } from "@nestjs/common"
import { Projeto } from "@core"
import { ProjectPrisma } from "./projects.prisma"

@Controller("projects")
export class ProjectController {
    constructor(private readonly repo: ProjectPrisma) { }

    @Get()
    async obterTodos(): Promise<Projeto[]> {
        return this.repo.obterTodos()
    }

    @Get(":id")
    async obterPorId(@Param("id") id: string): Promise<Projeto | null> {
        return this.repo.obterPorId(Number(id))
    }
}
