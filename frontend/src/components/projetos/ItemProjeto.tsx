import { Projeto } from "@core"
import Image from "next/image"
import Link from "next/link"

export interface ItemProjectProps {
	project: Projeto
}

export default function ItemProjeto(props: ItemProjectProps) {
	return (
		<Link href={`/project/${props.project.id}`}>
			<div
				className="
                    relative rounded-2xl overflow-hidden border border-zinc-800
                    min-w-64 min-h-64 
                "
			>
				<Image
					src={props.project.images[0]}
					alt={props.project.name}
					fill
					objectFit="cover"
				/>
			</div>
		</Link>
	)
}
