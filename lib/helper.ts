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

/**
 * Calculate estimated read time for content.
 * Assumes average reading speed of 200 words per minute.
 */
export function calculateReadTime(content: string): string {
  // Strip HTML tags and count words
  const textContent = content.replace(/<[^>]*>/g, '');
  const words = textContent.trim().split(/\s+/).length;
  const wordsPerMinute = 200;
  const readTimeMinutes = Math.ceil(words / wordsPerMinute);
  
  return readTimeMinutes === 1 ? '1 min read' : `${readTimeMinutes} min read`;
}