import { Controller, Get, Param } from "@nestjs/common"
import { Project } from "@core"
import { ProjectPrisma } from "./projects.prisma"

@Controller("projects")
export class ProjectController {
    constructor(private readonly repo: ProjectPrisma) { }

    @Get()
    async obterTodos(): Promise<Project[]> {
        return this.repo.obterTodos()
    }

    @Get(":id")
    async obterPorId(@Param("id") id: string): Promise<Project | null> {
        return this.repo.obterPorId(Number(id))
    }
}