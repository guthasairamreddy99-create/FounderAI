import ReactMarkdown from "react-markdown";

type Props = {
  analysis: string;
};

function CompetitorResult({ analysis }: Props) {
  if (!analysis) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg border p-8 mt-8">

      <h2 className="text-3xl font-bold mb-8">
        🏆 Competitor Report
      </h2>

      <div className="prose max-w-none">
        <ReactMarkdown>
          {analysis}
        </ReactMarkdown>
      </div>

    </div>
  );
}

export default CompetitorResult;