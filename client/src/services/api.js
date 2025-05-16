const BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Makes a GET request to the given endpoint (relative to the base URL).
 * @param {string} path - Example: '/api/products'
 * @returns {Promise<any>}
 */
export async function get(path) {
    try {
        const res = await fetch(`${BASE_URL}${path}`);
        if (!res.ok) {
            throw new Error(`API error: ${res.status} ${res.statusText}`);
        }
        return await res.json();
    } catch (err) {
        window.alert(err.message);
        throw err;
    }
}
