/**
 * Utility functions for HACKLANCE
 */

/**
 * Combine CSS classes cleanly
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format date string to human-readable format
 */
export function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
}

/**
 * Format date with time
 */
export function formatDateTime(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(date);
}

/**
 * Convert string to URL-safe slug
 */
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

/**
 * Generate a unique verification credential ID (e.g., HCK-2025-0842)
 */
export function generateVerificationId(prefix = 'HCK') {
  const year = new Date().getFullYear();
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${year}-${randomNum}`;
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text, length = 120) {
  if (!text || text.length <= length) return text;
  return `${text.slice(0, length)}...`;
}
