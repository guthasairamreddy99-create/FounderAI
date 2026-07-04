import { useState, useRef, useEffect } from "react";
import { askAI } from "../../api/businessApi";

type ChatMessage = {
  role: "user" | "ai";
  text: string;
};

const suggestions = [
  "How can I increase my revenue?",
  "How do I reduce expenses?",
  "Give me marketing ideas.",
  "How can I attract more customers?",
];

function AIMentor() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [chat, setChat] = useState<ChatMessage[]>([
    {
      role: "ai",
      text: "👋 Hello! I'm FounderAI Mentor. Ask me anything about your business.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat, loading]);

  const handleAsk = async (text?: string) => {
    const userMessage = text || message;

    if (!userMessage.trim()) return;

    setChat((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const aiReply = await askAI(userMessage);

      setChat((prev) => [
        ...prev,
        {
          role: "ai",
          text: aiReply,
        },
      ]);
    } catch {
      setChat((prev) => [
        ...prev,
        {
          role: "ai",
          text: "❌ Unable to contact AI right now.",
        },
      ]);
    }

    setLoading(false);
  };

  const clearChat = () => {
    setChat([
      {
        role: "ai",
        text: "👋 Hello! I'm FounderAI Mentor. Ask me anything about your business.",
      },
    ]);
  };

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-white">
          🤖 AI Mentor
        </h1>

        <button
          onClick={clearChat}
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl"
        >
          Clear Chat
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {suggestions.map((item) => (
          <button
            key={item}
            onClick={() => handleAsk(item)}
            className="bg-slate-800 hover:bg-indigo-600 px-4 py-2 rounded-full text-sm"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="bg-slate-900 rounded-2xl p-6 h-[500px] overflow-y-auto space-y-4">

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
          <div className="bg-slate-800 rounded-xl p-4 w-fit animate-pulse">
            🤖 Thinking...
          </div>
        )}

        <div ref={bottomRef} />

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
          className="flex-1 bg-slate-800 rounded-xl px-5 py-4 text-white outline-none"
        />

        <button
          onClick={() => handleAsk()}
          className="bg-indigo-600 hover:bg-indigo-700 px-8 rounded-xl text-white font-semibold"
        >
          Send
        </button>

      </div>

    </div>
  );
}

export default AIMentor;