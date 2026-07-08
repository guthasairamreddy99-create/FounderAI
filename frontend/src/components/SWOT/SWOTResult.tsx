import ReactMarkdown from "react-markdown";

type Props = {
  swot: string;
};

function SWOTResult({ swot }: Props) {
  if (!swot) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg border p-8 mt-8">

      <h2 className="text-3xl font-bold mb-8">
        📊 SWOT Report
      </h2>

      <div className="prose max-w-none">
        <ReactMarkdown>
          {swot}
        </ReactMarkdown>
      </div>

    </div>
  );
}

export default SWOTResult;