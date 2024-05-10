/**
 * Check if the `value` is an empty object, array, map or set
 * @param value
 * @return {boolean}
 * * @example
 *
 * isFalsy(null);
 * // => true
 *
 * isFalsy([]);
 * // => true
 *
 * isFalsy({});
 * // => true
 *
 * isFalsy(1);
 * // => false
 *
 * isFalsy([1, 2, 3]);
 * // => false
 *
 * isFalsy({ 'a': 1 });
 * // => false
 */
export function isFalsy(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: Record<any, any> | Set<any> | Map<any, any> | Array<any> | string,
): boolean {
  const mapTag = '[object Map]';
  const setTag = '[object Set]';

  if (value === null || value === undefined) {
    return true;
  }
  if (Array.isArray(value) || typeof value === 'string') {
    return !value.length;
  }
  const objType = value.toString();
  if (objType === mapTag || objType === setTag) {
    return !value.size;
  }

  // Check if object is empty
  // Object.key() is not used because it is O(n) time complexity.
  for (const _ in value) {
    return false;
  }

  return true;
}
