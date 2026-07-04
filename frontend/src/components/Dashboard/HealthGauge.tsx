import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {
  score: number;
};

function HealthGauge({ score }: Props) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 flex flex-col items-center">

      <h2 className="text-2xl font-bold text-white mb-6">
        💚 Business Health
      </h2>

      <div className="w-48 h-48">
        <CircularProgressbar
          value={score}
          text={`${score}%`}
        />
      </div>

    </div>
  );
}

export default HealthGauge;