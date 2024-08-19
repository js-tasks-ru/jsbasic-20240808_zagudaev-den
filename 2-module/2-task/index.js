function isEmpty(obj) {
  for (let prop in obj) {
    return false;
    break;
  }
  return true;
}
