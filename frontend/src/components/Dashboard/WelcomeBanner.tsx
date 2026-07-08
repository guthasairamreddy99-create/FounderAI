import { FaRocket } from "react-icons/fa";

type Props = {
  name: string;
  businesses: number;
  reports: number;
};

function WelcomeBanner({
  name,
  businesses,
  reports,
}: Props) {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl p-8 text-white shadow-xl">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Welcome back, {name} 👋
          </h1>

          <p className="mt-3 text-lg text-indigo-100">
            Manage your businesses and generate AI-powered reports.
          </p>

          <div className="flex gap-8 mt-8">

            <div>
              <h2 className="text-3xl font-bold">
                {businesses}
              </h2>

              <p>Businesses</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                {reports}
              </h2>

              <p>AI Reports</p>
            </div>

          </div>

        </div>

        <FaRocket size={80} />

      </div>

    </div>
  );
}

export default WelcomeBanner;