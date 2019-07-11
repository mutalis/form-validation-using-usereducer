export function warning(condition, message) {
  if (process.env.NODE_ENV === 'production' || condition) {
    return;
  }

  console.warn('useValidation: ' + message);
}
export function invariant(condition, message) {
  if (process.env.NODE_ENV === 'production' || condition) {
    return;
  }

  throw new Error('useValidation: ' + message);
}
