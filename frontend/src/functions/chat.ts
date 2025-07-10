"use server"

import Message from "@/model/Mensagem"

export default async function conversar(
	chatId: string,
	message: Message
): Promise<string | null> {
	const webhookUrl = process.env.CHAT_WEBHOOK
	if (!webhookUrl) return null

	try {
		const response = await fetch(webhookUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				chatId,
				message: message.text,
			}),
		})

		if (!response.ok) {
			const errorText = await response.text()
			console.error("Erro na resposta do webhook:", response.status, errorText)
			return null
		}

		const text = await response.text()

		if (!text) {
			console.warn("Resposta vazia do webhook")
			return null
		}

		const msg = JSON.parse(text)
		return msg.response ?? null

	} catch (error) {
		console.error("Erro ao chamar o webhook ou fazer parse do JSON:", error)
		return null
	}
}
