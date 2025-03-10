import Constants from "expo-constants";
import { API_URL } from "@env"; // Import the API_URL from the correct .env file

const getApiUrl = () => {
  if (__DEV__) {
    return API_URL; // Development mode
  }

  return Constants.expoConfig?.extra?.ENV === "production"
    ? API_URL // Production URL
    : API_URL; // Integration URL
};

/**
 * Base API URL from environment variables.
 * @type {string}
 */
const API_URL_FINAL = getApiUrl();
console.log("🚀 ~ API_URL_FINAL:", API_URL_FINAL);

/**
 * Generic function to handle API requests.
 * @param {string} endpoint - API endpoint (e.g., "/hotels").
 * @param {RequestInit} [options] - Optional fetch configuration.
 * @returns {Promise<any>} Resolves with API response data or throws an error.
 */
export async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    try {
        const response = await fetch(`${API_URL_FINAL}${endpoint}`, options);
        console.log("response:", response);

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
        console.error("API request failed:", error);
        throw error;
    }
}
