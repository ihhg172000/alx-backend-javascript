export default function appendToEachArrayValue(array, appendString) {
  const newArray = []
  for (var value of array) {
    newArray.push(appendString + value);
  }

  return newArray;
}
