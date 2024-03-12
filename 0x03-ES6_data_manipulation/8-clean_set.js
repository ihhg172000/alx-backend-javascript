export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }

  const results = [];

  for (const str of set.values()) {
    if (str.startsWith(startString)) {
      results.push(str.substring(startString.length));
    }
  }

  return results.join('-');
}
