export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || !startString) {
    return '';
  }

  const results = [];

  for (const str of set.values()) {
    if (typeof str === 'string' && str.startsWith(startString)) {
      results.push(str.substring(startString.length));
    }
  }

  return results.join('-');
}
