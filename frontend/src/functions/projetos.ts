import { httpGet } from "./api"
import { Project, Type } from "@core"

export async function obterProjetos() {
	const projects: Project[] = await httpGet("/projects")

	return {
		todos: projects,
		get mobile() {
			return projects.filter((projects) => projects.type === Type.MOBILE)
		},
		get web() {
			return projects.filter((projects) => projects.type === Type.WEB)
		},
		get jogos() {
			return projects.filter((projects) => projects.type === Type.GAME)
		},
		get destaques() {
			return projects.filter((projects) => projects.emphasis)
		},
	}
}

export async function obterProjeto(id: string): Promise<Project | null> {
	return await httpGet(`/projects/${id}`)
}
