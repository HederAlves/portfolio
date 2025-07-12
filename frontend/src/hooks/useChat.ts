import { Id } from "@core"
import useLocalStorage from "./useLocalStorage"
import conversar from "@/functions/chat"
import { useState } from "react"
import Message from "@/model/Mensagem"

export default function useChat() {
	const [chatId] = useLocalStorage<string>("chatId", Id.generate())
	const [message, setMensagens] = useLocalStorage<Message[]>("message", [])
	const [pensando, setPensando] = useState(false)

	async function adicionarMensagem(text: string) {
		try {
			setPensando(true)
			const novaMensagem: Message = {
				id: Id.generate(),
				text,
				autor: "Visitante",
				lado: "direito",
			}

			setMensagens((msgs) => [...msgs, novaMensagem])

			const resposta = await conversar(chatId, novaMensagem)

			if (!resposta) return

			const mensagemResposta: Message = {
				id: Id.generate(),
				text: resposta,
				autor: "Assistente",
				lado: "esquerdo",
			}

			setMensagens((msgs) => [...msgs, mensagemResposta])
		} finally {
			setPensando(false)
		}
	}

	function limparMensagens() {
		setMensagens([])
	}

	return {
		chatId,
		message,
		pensando,
		adicionarMensagem,
		limparMensagens,
	}
}
