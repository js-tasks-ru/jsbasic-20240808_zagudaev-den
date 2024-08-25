function getMinMax(str) {
  return str
    .split(" ")
    .map((i) => parseFloat(i))
    .reduce(
      (value, item) => {
        if (item > value.max) {
          value.max = item;
        }
        if (item < value.min) {
          value.min = item;
        }
        return value;
      },
      { min: Infinity, max: -Infinity }
    );
}
