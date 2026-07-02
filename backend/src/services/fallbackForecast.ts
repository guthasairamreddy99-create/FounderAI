export const generateFallbackForecast = (
  revenue: number,
  expenses: number
) => {
  const forecast = [];

  let currentRevenue = revenue;

  for (let i = 0; i < 6; i++) {
    currentRevenue = Math.round(currentRevenue * 1.05);

    forecast.push({
      month: [
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ][i],
      revenue: currentRevenue,
      profit: currentRevenue - expenses,
    });
  }

  return {
    forecast,
  };
};