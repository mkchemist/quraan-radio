export function sortBy(arr, selector) {
  return arr.sort((a, b) => {
    let a1 = selector(a);
    let b1 = selector(b);
    if (a1 > b1) {
      return 1;
    } else if (a1 < b1) {
      return -1;
    }
  });
}
