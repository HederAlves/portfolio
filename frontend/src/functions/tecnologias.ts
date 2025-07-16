import { Technology } from "@core"
import { httpGet } from "./api"

export async function obterTecnologias() {
	const technologies: Technology[] = await httpGet("/technologies")

	return {
		todas: technologies,
		get destaques() {
			return technologies.filter((technology) => technology.emphasis)
		},
	}
}
