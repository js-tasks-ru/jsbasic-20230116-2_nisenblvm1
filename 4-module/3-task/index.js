function highlight(table) {
  // ваш код...
  console.log(table.rows);
  for (let row of table.rows) {
    for (let cell of row.cells) {

      if (cell.getAttribute('data-available') === 'true') {
        row.classList.add('available')
        console.log(row)

      }
      if (cell.getAttribute('data-available') === 'false') {
        row.classList.add('unavailable')
        console.log(row)
      }
      if(!(cell.getAttribute('data-available') === 'false')&&
        !(cell.getAttribute('data-available') === 'true')){
        row.setAttribute('hidden', 'false')}


       if(cell.textContent === 'm'){row.classList.add('male')}
       if(cell.textContent === 'f'){row.classList.add('female')}
       if(Number(cell.textContent) < 18){row.style.textDecoration = 'line-through'};

    }
  }
  return table
}
