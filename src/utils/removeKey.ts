export function removeKey<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  key: K
): Omit<T, K> {
  const { [key]: removedKey, ...rest } = obj;
  return rest;
}
