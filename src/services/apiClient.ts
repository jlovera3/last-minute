import Constants from "expo-constants";

/**
 * Base API URL from the environment variables.
 * @type {string}
 */
const API_URL: string = Constants.expoConfig?.extra?.API_URL || process.env.API_URL;

/**
 * Generic function to handle API requests.
 * @param {string} endpoint - API endpoint (e.g., "/hotels").
 * @param {RequestInit} [options] - Optional fetch configuration.
 * @returns {Promise<any>} Resolves with API response data or throws an error.
 */
export async function apiRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            headers: { "Content-Type": "application/json" },
            ...options,
            mode: "no-cors",
        });
        console.log("🚀 ~ response:", response);

        switch (response.status) {
            case 200: {
                const data = await response.json();
                console.log("🚀 ~ data:", data);
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
