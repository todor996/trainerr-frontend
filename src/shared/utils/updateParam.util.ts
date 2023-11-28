/**
 * Updates a parameter in the current URL's query string and replaces the browser's history state.
 *
 * @example
 * // Updates the 'page' parameter to '2' in the URL's query string
 * updateParam({ name: 'page', value: '2' });
 */
export function updateParam({ name, value }: { name: string, value: string }): void {
    let queryParams = new URLSearchParams(window.location.search);
    queryParams.set(name, value);

    history.replaceState(null, "", "?" + queryParams.toString());
}