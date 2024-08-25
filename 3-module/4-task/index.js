function showSalary(users, age) {
  return users
    .filter((user) => user.age <= age)
    .map((user, index) => `${user.name}, ${user.balance}`)
    .join(`\n`);
}
