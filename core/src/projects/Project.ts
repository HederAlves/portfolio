import { Technology } from "../technologies"
import { Level } from "./Level"
import { Type } from "./Type"

export default interface Project {
	id: number
	name: string
	description: string
	images: string[]
	type: Type
	level: Level
	repository: string
	emphasis: boolean
	technologies: Technology[]
}
