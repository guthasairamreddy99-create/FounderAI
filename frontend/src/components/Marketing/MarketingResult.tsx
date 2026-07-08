import ReactMarkdown from "react-markdown";

type Props = {
  marketing: string;
};

function MarketingResult({ marketing }: Props) {
  if (!marketing) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mt-8">

      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        📣 AI Marketing Campaign
      </h2>

      <div className="prose max-w-none prose-lg">
        <ReactMarkdown>
          {marketing}
        </ReactMarkdown>
      </div>

    </div>
  );
}

export default MarketingResult;