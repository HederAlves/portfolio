import Image from "next/image"

export default function MiniCV() {
	return (
		<div className="flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
			<div className="relative min-w-72 h-64 xl:self-end">
				<Image src="/heder.png" alt="Foto de perfil" fill style={{ width: "100%" }} />
			</div>
			<div className="flex flex-col gap-5 self-center pb-4 items-center  md:items-start lg:items-center xl:items-start">
				<div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
					<span
						className="
                            bg-gradient-to-r from-red-500 via-amber-400 to-white
                            text-transparent bg-clip-text text-2xl font-bold
                        "
					>
						Heder Alves
					</span>
					<span>Desenvolvedor Front-end</span>
				</div>
				<p className="text-sm text-center md:text-left lg:text-center xl:text-left">
					Especializado nos frameworks Next, React e Vue,
					tenho experiência sólida no desenvolvimento com APIs REST e GraphQL.
					Utilizo as linguagens JavaScript e TypeScript, tenho experiência sólida
					também em estilização com os frameworks TailwindCSS e Styled-Components.
					Além disso, tenho experiência em testes, utilizando Cypress e Jest.
				</p>
				<p>
					No back-end e banco de dados, tenho experiência com Node, Nest, Firebase,
					Supabase e PostgreSQL.
				</p>
			</div>
		</div>
	)
}
