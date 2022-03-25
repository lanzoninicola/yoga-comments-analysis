/**
 *
 * @param offset - number - The offset of the first result to return.
 * @returns date ISO 8601 format in the past based on offset from today in days
 */
export function pastDate(offset) {
  const now = new Date();
  const pastDateMillisecond = now.setDate(now.getDate() - offset);
  const pastDateISO = new Date(pastDateMillisecond).toISOString();

  return pastDateISO;
}
