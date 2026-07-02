const API = "http://localhost:5000/api/business";

export async function getBusinesses() {
  const response = await fetch(API);
  const data = await response.json();

  return data.data;
}

export async function createBusiness(business: {
  name: string;
  location: string;
  budget: string;
  customer: string;
  status: string;
}) {
  const response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(business),
  });

  const data = await response.json();

  return data.data;
}

export const askAI = async (message: string) => {
  const response = await fetch("http://localhost:5000/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  const data = await response.json();
  return data.reply;
};

export const analyzeBudget = async (
  revenue: number,
  expenses: number,
  budget: number
) => {
  const response = await fetch(
    "http://localhost:5000/api/analysis",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        revenue,
        expenses,
        budget,
      }),
    }
  );

  const data = await response.json();

  return data.analysis;
};

export const getForecast = async (
  revenue: number,
  expenses: number
) => {
  const response = await fetch(
    "http://localhost:5000/api/forecast",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        revenue,
        expenses,
      }),
    }
  );

  return response.json();
};