export const randomizeDeterrent = (deterrents: string[]): string =>
  deterrents[Math.floor(Math.random() * deterrents.length)];
