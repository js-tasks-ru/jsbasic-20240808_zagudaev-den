/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  #rows;
  #elem;

  constructor(rows) {
    this.#rows = rows;
    this.#elem = document.createElement("table");
    this.#createTable();
  }

  get elem() {
    return this.#elem;
  }

  #createTable() {
    let html = `      
    <thead>
    <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
    </tr>
    </thead>
      <tbody>
      ${this.#rows
        .map(
          (obj) =>
            `
      <tr>
      <td>${obj.name}</td>
      <td>${obj.age}</td>
      <td>${obj.salary}</td>
      <td>${obj.city}</td>
      <td><button>X</button></td>
    </tr>
      `
        )
        .join("")}
  </tbody>`;
    this.#elem.innerHTML = html;
    for (let btn of this.#elem.querySelectorAll("button"))
      btn.addEventListener("click", this);
  }

  handleEvent(event) {
    let row = event.target.parentElement.parentElement;
    this.#rows.splice(row.rowIndex - 1, 1);
    row.remove();
  }
}
