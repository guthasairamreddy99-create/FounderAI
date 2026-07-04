type Props = {
  score: number;
};

function ExecutiveSummary({ score }: Props) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-5">
        🤖 FounderAI Executive Summary
      </h2>

      <p className="text-gray-300 leading-8">

        {score >= 80
          ? "Your business is financially healthy with strong profitability. Focus on scaling revenue while maintaining controlled expenses."
          : score >= 60
          ? "Your business is stable but there are opportunities to improve profitability and cash reserves."
          : "Your business requires immediate financial improvements. Reduce expenses and improve revenue generation."}

      </p>

    </div>
  );
}

export default ExecutiveSummary;