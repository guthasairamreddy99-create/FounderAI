const API = "http://localhost:5000/api/dashboard";

export async function getDashboardStats() {
  const response = await fetch(API);

  if (!response.ok) {
    throw new Error("Failed to load dashboard");
  }

  const data = await response.json();

  return data.data;
}