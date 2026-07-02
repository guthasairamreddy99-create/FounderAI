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

  return response.json();
}