// pridávat produkty ako riadky do tabulky
const inputName = document.querySelector('.name_product');
const inputCategory = document.querySelector('.category_product');
const inputQuantity = document.querySelector('.quantity_product');
const inputPrice = document.querySelector('.price_product');
const submitButton = document.querySelector('#submit-new-prod');
const form = document.querySelector('#new-task-form');
const listofProducts = document.querySelector('.todo-list');
const categoryProducts = document.querySelector('.category');

const updateBtn = document.querySelector('.updateBtn');
// const deleteBtn = document.querySelector('.deleteBtn');
const deleteBtn = document.querySelector('table'); // uz chaem vsak lebo to musi byt o uroven vyššie.

// const formEl = document.querySelector('form');
const tableEl = document.querySelector('table'); // <tbody> </tbody>
function onAddWebsite(e) {}

// ADDING PRODUCT
const addNewProd = (event) => {
  event.preventDefault();
  console.log('inputName.value:', inputName.value);

  // nastavit poradie odkial pridavat nové produkty:
  const rowToTop = tableEl.insertRow(1);

  rowToTop.innerHTML += `<tr>
          <td>${inputName.value}</td>
          <td>${inputName.value}</td>
          <td><button class="updateBtn">Update</button> <button class="deleteBtn">Delete</button> </td>
     </tr>`;

  /* const template = `<tr>
     <td>${inputName.value}</td>
     <td>${inputName.value}</td>
     <td><button class="deleteBtn">Update</button> <button class="deleteBtn">Delete</button> </td>
   </tr>`;
  tableEl.innerHTML += template; */

  // nastavitq pridavannie riadkov od TOPu

  inputName.value = '';
};

// DELETE ROWQ , not only button
const deleteProd = (e) => {
  const clickedButton = e.target;
  // console.log('clickedButton', clickedButton.parentElement.parentElement);
  /* if (clickedButton.classList[0] === 'del-btn') {
    // inputName.remove(); // CHCEM ODSTRAnit parenta mojho e.target
    clickedButton.parentElement.remove();
  } */

  if (clickedButton.classList.contains('deleteBtn')) {
    // CHCEM ODSTRAnit parenta mojho e.target :
    // 1. spôsob:
    clickedButton.closest('tr').remove();
    // 2. spôsob:
    // clickedButton.parentElement.parentElement.remove();
  }
};

function selectedRowToInput() {
    const table = document.getElementById('table'), rIndex;
  
    for (let i = 1; i < table.rows.length; i++) {
      table.rows[i].onclick = function () {
        // get the seected row index
        rIndex = this.rowIndex;
        console.log('rIndex', rIndex);
        document.getElementById('inputName').value = this.cells[1].innerHTML;
        
      };
    }
  }
  
  const editRow =()=>{
      table.rows[rIndex].cells[1].innerHTML = document.getElementById('inputName').value
  }

const updateProd = (e) => {
  const clickedButton = e.target;
  /* console.log(
    'clickedButton',
    clickedButton.parentElement.parentElement.children[0].innerText
  ); */
  const valueInRow = clickedButton.parentElement.parentElement.children[0];

  console.log('valueInRow', valueInRow);
  valueInRow.innerHTML = `<input type="text" placeholder="${valueInRow.innerText}" class="name_product" id="name_product" aria-describedby="emailHelp">`;

  // valueInRow.innerHTML = inputName.value;
  //  console.log('inputName.value', inputName.value);

  // `<td>${inputName.value}</td>`;
  /* if (clickedButton.classList[0] === 'del-btn') {
      // inputName.remove(); // CHCEM ODSTRAnit parenta mojho e.target
      clickedButton.parentElement.remove();
    } */

  // chcem na miesto prveho inputu vytvorit input
  if (clickedButton.classList.contains('updateBtn')) {
    console.log('update row in TABLE');
    editRow()

    // CHCEM ODSTRAnit parenta mojho e.target :
    // 1. spôsob:
    // clickedButton.closest('tr').remove();
    // 2. spôsob:
    // clickedButton.parentElement.parentElement.remove();
  }
};



submitButton.addEventListener('click', addNewProd);
deleteBtn.addEventListener('click', deleteProd);
deleteBtn.addEventListener('click', updateProd);
