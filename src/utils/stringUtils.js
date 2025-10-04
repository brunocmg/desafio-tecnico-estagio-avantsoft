export function letters(str) {
  return [...String(str)];
}

export function firstNonRepeatedChar(str) {
  const normalized = String(str).toLowerCase().replace(/\s+/g, "");
  const counts = new Map();
  for (const character of normalized) {
    counts.set(character, (counts.get(character) || 0) + 1);
  }
  for (const character of normalized) {
    if (counts.get(character) === 1) return character;
  }
  return "'_'";
}

export function splitName(name) {
  return letters(name);
}
