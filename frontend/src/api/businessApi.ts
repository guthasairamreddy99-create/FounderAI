const API = "http://localhost:5000/api/business";
const AI_API = "http://localhost:5000/api/ai/business-advice";
const ANALYSIS_API = "http://localhost:5000/api/analysis";
const FORECAST_API = "http://localhost:5000/api/forecast";
const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});
// ============================
// BUSINESS APIs
// ============================

export async function getBusinesses() {
  const response = await fetch(API, {
    headers: getHeaders(),
});

  if (!response.ok) {
    throw new Error("Failed to fetch businesses");
  }

  const data = await response.json();
  return data.data;
}

export async function createBusiness(business: {
  name: string;
  location: string;
  budget: number;
  customer: string;
  status: string;
}) {
  const response = await fetch(API, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(business),
  });

  if (!response.ok) {
    throw new Error("Failed to create business");
  }

  const data = await response.json();
  return data.data;
}

export async function updateBusiness(
  id: string,
  business: {
    name: string;
    location: string;
    budget: number;
    customer: string;
    status: string;
  }
) {
  const response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify(business),
  });

  if (!response.ok) {
    throw new Error("Failed to update business");
  }

  const data = await response.json();
  return data.data;
}

export async function deleteBusiness(id: string) {
  const response = await fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to delete business");
  }
}

// ============================
// AI Mentor
// ============================

export async function askAI(message: string) {
  const response = await fetch(AI_API, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({
      name: "FounderAI Business",
      revenue: 500000,
      budget: 250000,
      customers: 300,
      growth: 18,
      question: message,
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "AI request failed");
  }

  return data.advice;
}

export async function getAIAdvice(business: {
  name: string;
  revenue: number;
  budget: number;
  customers: number;
  growth: number;
}) {
  const response = await fetch(AI_API, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(business),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "AI request failed");
  }

  return data.advice;
}

// ============================
// Budget Analysis
// ============================

export async function analyzeBudget(
  revenue: number,
  expenses: number,
  budget: number
) {
  const response = await fetch(ANALYSIS_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      revenue,
      expenses,
      budget,
    }),
  });

  if (!response.ok) {
    throw new Error("Budget analysis failed");
  }

  const data = await response.json();
  return data.analysis;
}

// ============================
// Forecast
// ============================

export async function getForecast(
  revenue: number,
  expenses: number
) {
  const response = await fetch(FORECAST_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      revenue,
      expenses,
    }),
  });

  if (!response.ok) {
    throw new Error("Forecast failed");
  }

  return response.json();
}

// ============================
// BUSINESS PLANS
// ============================

export async function getBusinessPlans() {
  const response = await fetch(
    "http://localhost:5000/api/business-plan"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch business plans");
  }

  const data = await response.json();

  return data.data;
}

export async function deleteBusinessPlan(id: string) {
  const response = await fetch(
    `http://localhost:5000/api/business-plan/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete business plan");
  }

  return response.json();
}

// ============================
// DASHBOARD
// ============================

export async function getDashboardStats() {
  const response = await fetch(
    "http://localhost:5000/api/dashboard"
  );

  if (!response.ok) {
    throw new Error("Failed to load dashboard");
  }

  const data = await response.json();

  return data.data;
}