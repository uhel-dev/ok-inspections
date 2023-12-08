export const sanitiseName = (name: string) => {
  // Replace hyphens with spaces
  let sanitized = name.replace(/-/g, ' ');

  // Capitalize the first character of each word
  sanitized = sanitized.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  return sanitized;

}
