import ReactMarkdown from "react-markdown";

type Props = {
  deck: string;
};

function PitchDeckResult({ deck }: Props) {
  if (!deck) return null;

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 mt-8">

      <h2 className="text-3xl font-bold text-white mb-6">
        📊 Investor Pitch Deck
      </h2>

      <div className="prose prose-invert max-w-none">
        <ReactMarkdown>
          {deck}
        </ReactMarkdown>
      </div>

    </div>
  );
}

export default PitchDeckResult;