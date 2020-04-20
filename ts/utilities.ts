export function insertAt<T>(array: T[], index: number, ...elementsArray: T[]) {
  array.splice(index, 0, ...elementsArray);
}
