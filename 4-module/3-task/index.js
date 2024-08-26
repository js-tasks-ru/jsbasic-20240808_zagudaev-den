function highlight(table) {
  let indexStatus, indexGender, indexAge;
  // присваиваем индекс ячейки
  for (let cell of table.querySelectorAll("thead td")) {
    if (cell.innerText === "Status") indexStatus = cell.cellIndex;
    if (cell.innerText === "Gender") indexGender = cell.cellIndex;
    if (cell.innerText === "Age") indexAge = cell.cellIndex;
  }
  // проверяем наличие индекса
  if (!indexStatus || !indexGender || !indexAge) return;

  // работаем со строками
  for (let row of table.querySelectorAll("tbody tr")) {
    //захват ячеек по строке - индексу
    let status = row.cells[indexStatus];
    let gender = row.cells[indexGender];
    let age = row.cells[indexAge];

    // скрывать при отсутсвии атрибута aviable
    if (!status.dataset.available) row.hidden = true;

    // установка класса avilable/unaviable
    if (status.dataset.available === "true") row.classList.add("available");
    if (status.dataset.available === "false") row.classList.add("unavailable");

    // проверка на возраст и изменение стиля строки
    if (parseInt(age.innerText) < 18)
      row.style["text-decoration"] = "line-through";

    // установка класса в зависимости от гендера
    if (gender.innerText === "m") row.classList.add("male");
    if (gender.innerText === "f") row.classList.add("female");
  }
}
