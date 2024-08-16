function factorial(n) {
  let value = 1;
  for (let i = 2; i <= n; i++) {
    value *= i;
  }
  return value;
}
