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
  elem = null;
  rows = [];


  constructor(rows) {
    this.rows = rows;

    this.render();

    this.elem.addEventListener('click', this.onStrClick);
  }

  template() {
    return `<table>
            <thead>
            <tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr>
            </thead>
            <tbody>
            ${this.rows.map(item => `<tr>
            <td>${item.name}</td>
			      <td>${item.age}</td>
			      <td>${item.salary}</td>
            <td>${item.city}</td>
            <td><button>X</button></td></tr>`).join('')}
            </tbody>
        </table>`;
  }


  render(){
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.template();
    this.elem = wrapper.firstElementChild;
  }
  onStrClick = (event) => {event.target.closest('td').closest('tr').remove();

  }
}

// const table = new UserTable(rows);
// document.querySelector('.example').append(table.elem);
