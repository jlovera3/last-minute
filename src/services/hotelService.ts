import { Hotel } from "../interfaces/hotel";
import { apiRequest } from "./apiClient";

/**
 * Fetches the list of hotels from the API.
 * @returns {Promise<Hotel[]>} A promise that resolves to an array of hotels.
 * @throws {Error} If the fetch request fails.
 */
export async function fetchHotels(): Promise<Hotel[]> {
  return apiRequest<Hotel[]>("hotel.json");
}
