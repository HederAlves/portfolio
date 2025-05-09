import { Injectable } from "@nestjs/common"
import { PrismaProvider } from "src/db/prisma.provider"
import Project from "../../../core/src/projects/Project"

@Injectable()
export class ProjectPrisma {
    constructor(private readonly prisma: PrismaProvider) { }

    async obterTodos(): Promise<Project[]> {
        return this.prisma.project.findMany() as any
    }

    async obterPorId(id: number): Promise<Project | null> {
        return this.prisma.project.findUnique({
            where: { id },
            include: { technologies: true },
        }) as any
    }
}
