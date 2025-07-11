import { Technology } from "@core"
import TecnologiasTrabalhadas from "./TecnologiasTrabalhadas"
import Experiencia from "./Experiencia"
import MiniCV from "./MiniCV"

export interface CurriculoProps {
	technologies: Technology[]
}

export default function Curriculo(props: CurriculoProps) {
	return (
		<div className="flex flex-col lg:flex-row gap-4 min-h-72 w-full">
			<MiniCV />
			<Experiencia />
			<TecnologiasTrabalhadas list={props.technologies} />
		</div>
	)
}
