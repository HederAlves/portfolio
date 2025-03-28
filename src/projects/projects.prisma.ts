import { Projeto } from "@core"
import { Injectable } from "@nestjs/common"
import { PrismaProvider } from "src/db/prisma.provider"

@Injectable()
export class ProjectPrisma {
    constructor(private readonly prisma: PrismaProvider) { }

    async obterTodos(): Promise<Projeto[]> {
        return this.prisma.project.findMany() as any
    }

    async obterPorId(id: number): Promise<Projeto | null> {
        return this.prisma.project.findUnique({
            where: { id },
            include: { technologies: true },
        }) as any
    }
}
