const weakMap = new WeakMap();

function queryAPI(endpoint) {
  const load = weakMap.get(endpoint) || 0;

  if (load >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, load + 1);
}

export { weakMap, queryAPI };
