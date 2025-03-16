import { hotelsMock } from "../mocks/hotelsMock";
import { isWeb } from "../utils/platformUtils";

const API_URL = "https://technology.lastminute.com/api/";

export async function apiRequest<T>(endpoint: string): Promise<T> {
  try {
    if (isWeb()) {
      return hotelsMock as T;
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    switch (response.status) {
      case 200: {
        const data = await response.json();
        return data;
      }
      case 400:
        throw new Error("Bad request. Please check your input.");
      case 401:
        throw new Error("Unauthorized. Please check your credentials.");
      case 403:
        throw new Error("Forbidden. You do not have permission.");
      case 404:
        throw new Error("Not found. The requested resource was not found.");
      case 500:
        throw new Error("Internal Server Error. Please try again later.");
      default:
        throw new Error(`Unexpected error: ${response.statusText}`);
    }
  } catch (error) {
    console.error("API request failed, returning mock data instead,", error);
    throw error;
  }
}
