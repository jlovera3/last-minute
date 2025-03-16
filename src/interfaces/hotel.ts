/**
 * Represents the geographical location of a hotel.
 */
export interface Location {
  /**
   * Street address of the hotel.
   * @type {string}
   */
  address: string;

  /**
   * City where the hotel is located.
   * @type {string}
   */
  city: string;

  /**
   * Latitude coordinate of the hotel's location.
   * @type {number}
   */
  latitude: number;

  /**
   * Longitude coordinate of the hotel's location.
   * @type {number}
   */
  longitude: number;
}

/**
 * Represents the check-in and check-out time details.
 */
export interface CheckTime {
  /**
   * Earliest time allowed.
   * @type {string}
   */
  from: string;

  /**
   * Latest time allowed.
   * @type {string}
   */
  to: string;
}

/**
 * Represents the contact details of a hotel.
 */
export interface Contact {
  /**
   * Phone number for hotel inquiries.
   * @type {string}
   */
  phoneNumber: string;

  /**
   * Email address for hotel inquiries.
   * @type {string}
   */
  email: string;
}

/**
 * Represents a Hotel object with all relevant details.
 */
export interface Hotel {
  /**
   * Unique identifier for the hotel.
   * @type {number}
   */
  id: number;

  /**
   * Name of the hotel.
   * @type {string}
   */
  name: string;

  /**
   * Location details of the hotel.
   * @type {Location}
   */
  location: Location;

  /**
   * Number of stars the hotel has (e.g., 3-star, 4-star, etc.).
   * @type {number}
   */
  stars: number;

  /**
   * Check-in time details.
   * @type {CheckTime}
   */
  checkIn: CheckTime;

  /**
   * Check-out time details.
   * @type {CheckTime}
   */
  checkOut: CheckTime;

  /**
   * Contact details for the hotel.
   * @type {Contact}
   */
  contact: Contact;

  /**
   * Array of image URLs representing the hotel.
   * @type {string[]}
   */
  gallery: string[];

  /**
   * User rating score of the hotel (from 0 to 10).
   * @type {number}
   */
  userRating: number;

  /**
   * Price per night for a stay at the hotel.
   * @type {number}
   */
  price: number;

  /**
   * Currency code for the price (e.g., EUR, USD, GBP).
   * @type {string}
   */
  currency: string;
}
