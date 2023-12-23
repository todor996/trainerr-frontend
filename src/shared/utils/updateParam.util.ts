/**
 * Updates a parameter in the current URL's query string and replaces the browser's history state.
 *
 * @example
 * // Updates the 'page' parameter to '2' in the URL's query string
 * updateParam({ name: 'page', value: '2' });
 */
export default function updateParam({
  name,
  value,
}: {
  name: string;
  value: string;
}): void {
  const queryParams = new URLSearchParams(window.location.search);
  queryParams.set(name, value);

  // eslint-disable-next-line no-restricted-globals
  history.replaceState(null, "", `?${queryParams.toString()}`);
}
