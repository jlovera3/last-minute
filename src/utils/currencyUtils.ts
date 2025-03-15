/**
 * Mapping of currency codes to symbols.
 */
const currencySymbols: { [key: string]: string } = {
    EUR: "€",
    USD: "$",
    GBP: "£",
    JPY: "¥",
    AUD: "A$",
    CAD: "C$",
    CHF: "CHF",
    CNY: "¥",
    SEK: "kr",
    NZD: "NZ$",
};

/**
 * Function to get the currency symbol from a given currency code.
 * @param {string} currencyCode - The currency code (e.g., "USD", "EUR").
 * @returns {string} The corresponding currency symbol or the original code if not found.
 */
export function getCurrencySymbol(currencyCode: string): string {
    return currencySymbols[currencyCode] || currencyCode;
}
