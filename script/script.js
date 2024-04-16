const books = [
    {title: 'Senhor dos Aneis'},
    {title: 'O Hobbit'}
  ];
  
  function loadTable() {
    const tabela = document.getElementById('tbody');
    for (let i = 0; i < books.length; i++) {
      const row = createRow(books[i])
      tabela.appendChild(row);
    }
  }
  
  function createRow(book) {
    const row = document.createElement('tr');
    const column = createColumn(book.title);
    row.appendChild(column);
    return row;
  }
  
  function createColumn(value) {
    const column = document.createElement('td');
    column.innerHTML = value;
    return column;
  }