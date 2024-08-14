function factorial(n) {
  let value = n;
  for (let i = 1; i < n && n !== 0; i++) {
    value *= n - i;
  }
  return n !== 0 ? value : 1;
}
