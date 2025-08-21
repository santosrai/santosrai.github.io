/**
 * Format a date string to a readable format.
 */
export function formatDate(dateString: string | number | Date) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { 
    year: 'numeric', 
    month: 'long',
    day: 'numeric'
  }).format(date);
}