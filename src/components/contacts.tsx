import React, { useState } from "react";

export default function Contacts() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const canSend = name.trim() !== "" && email.trim() !== "" && message.trim() !== "";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!canSend) return;
        const to = "kelvyndantas@hotmail.com";
        const subject = `Contato de ${name}`;
        const body = `Olá! Sou ${name},%0D%0A${encodeURIComponent(message)}`;
        // open mail client
        window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    return (
        <>
            <h2 className="text-2xl font-semibold text-cyan-50 mb-4">Contatos</h2>
            <h2 className="text-xl font-semibold text-cyan-50 mb-2 px-2 mt-10">Email:</h2>
            <div className="bg-gray-900/80 w-fit mx-2 px-4 py-1 min-w-80">
                <a href="mailto:kelvyndantas@hotmail.com"
                    className="block text-lg hover:underline hover:text-cyan-200"
                    >kelvyndantas@hotmail.com</a>
            </div>
            <h2 className="text-xl font-semibold text-cyan-50 mb-2 px-2 mt-10">WhatsApp:</h2>
            <div className="bg-gray-900/80 w-fit mx-2 px-4 py-1 min-w-80">
                <a href="tel:+5531982774021"
                    className="block text-lg hover:underline hover:text-cyan-200"
                    >(31) 98277 - 4021</a>
            </div>

            {/* Contact form (themed to match components) */}
            <div className="mt-8 bg-gray-900/80 p-4 rounded border border-gray-700 w-200">
                <h3 className="text-xl font-semibold text-cyan-50 mb-3">Formulário de Contato</h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label className="block text-sm text-cyan-50/80 mb-1">Seu nome</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-transparent border border-gray-700 px-3 py-2 rounded text-cyan-50 placeholder:text-cyan-50/60"
                            placeholder="Seu nome"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-cyan-50/80 mb-1">Seu email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-transparent border border-gray-700 px-3 py-2 rounded text-cyan-50 placeholder:text-cyan-50/60"
                            placeholder="seu@email.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-cyan-50/80 mb-1">Mensagem</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={5}
                            className="w-full bg-transparent border border-gray-700 px-3 py-2 rounded text-cyan-50 placeholder:text-cyan-50/60"
                            placeholder="Escreva sua mensagem aqui"
                            required
                        />
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={!canSend}
                            className={`${canSend ? "!outline-white/50" : "opacity-50 hover:!outline-transparent !cursor-not-allowed"}`}
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}