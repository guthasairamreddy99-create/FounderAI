import { useState } from "react";
import { askAI } from "../../api/businessApi";

type ChatMessage = {
  role: "user" | "ai";
  text: string;
};

function AIMentor() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [chat, setChat] = useState<ChatMessage[]>([
    {
      role: "ai",
      text: "👋 Hello! I'm FounderAI Mentor. Ask me anything about your business.",
    },
  ]);

  const handleAsk = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setChat((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    const aiReply = await askAI(userMessage);

    setChat((prev) => [
      ...prev,
      {
        role: "ai",
        text: aiReply,
      },
    ]);

    setLoading(false);
  };

  return (
    <div className="space-y-6">

      <h1 className="text-4xl font-bold text-white">
        🤖 AI Mentor
      </h1>

      <div className="bg-slate-900 rounded-2xl p-6 h-[450px] overflow-y-auto space-y-4">

        {chat.map((item, index) => (
          <div
            key={index}
            className={`max-w-[80%] rounded-xl p-4 ${
              item.role === "user"
                ? "ml-auto bg-indigo-600 text-white"
                : "bg-slate-800 text-gray-100"
            }`}
          >
            {item.text}
          </div>
        ))}

        {loading && (
          <div className="bg-slate-800 rounded-xl p-4 w-fit">
            Thinking...
          </div>
        )}

      </div>

      <div className="flex gap-4">

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAsk();
            }
          }}
          placeholder="Ask about your business..."
          className="flex-1 bg-slate-800 rounded-xl px-5 py-4 text-white"
        />

        <button
          onClick={handleAsk}
          className="bg-indigo-600 hover:bg-indigo-700 px-8 rounded-xl text-white font-semibold"
        >
          Send
        </button>

      </div>

    </div>
  );
}

export default AIMentor;