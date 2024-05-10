/**
 * Checks if the given object is a Date.
 */
export function isDate(obj: unknown): obj is Date {
  return obj instanceof Date && !isNaN(obj.getTime());
}
