// inputy, buttony , formular , tabulka ?,elementy, classy
const inputName = document.querySelector('.name_product');
const inputCategory = document.querySelector('.category_product');
const inputQuantity = document.querySelector('.quantity_product');
const inputPrice = document.querySelector('.price_product');
const submitButton = document.querySelector('#submit-new-prod');
const form = document.querySelector('#new-task-form');
const listofProducts = document.querySelector('.todo-list');
const categoryProducts = document.querySelector('.category');

// const productStore = [];

// chcem pridávat value z inputov do tabulky
const inputNameValue = inputName.value;

// ADDING PRODUCT
const addNewProd = (event) => {
  event.preventDefault();
  console.log('inputName.value:', inputName.value);

  const newDiv = document.createElement('div'); // div
  newDiv.classList.add('todo'); // class

  const newLi = document.createElement('li');
  newLi.classList.add('todo-item');

  // do div vloz li:
  newDiv.appendChild(newLi);
  listofProducts.appendChild(newDiv);
  newLi.innerText = inputName.value; // no innerHTML
  saveLocalTodos(inputName.value);

  /*  productStore.map((product) => {
    newLi.innerText = product;
  }); */

  // CHECK MARK BUTTON
  const completedButton = document.createElement('button');
  completedButton.innerText = 'UPDATE'; // '<iclass="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  newDiv.appendChild(completedButton);

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'DEL'; // '<iclass="fas fa-check"></i>';
  deleteButton.classList.add('del-btn');
  newDiv.appendChild(deleteButton);

  inputName.value = '';
};

const deleteProd = (e) => {
  console.log(e.target);
  console.log(e.target.classList); // ['complete-btn', value: 'complete-btn']

  const clickedButton = e.target;
  // podla toho na čo kliknem (e.target) rozhodnem čo sa stane
  // ak som klikol na button ktorého class sa rovná stringu 'del-btn', tak :
  if (clickedButton.classList[0] === 'del-btn') {
    // inputName.remove(); // CHCEM ODSTRAnit parenta mojho e.target
    clickedButton.parentElement.remove();
    deleteProdFromStore(clickedButton);
  }
};

const filterCateg = () => {
  const ulNodes = listofProducts.childNodes;
  console.log('ulNodes:', ulNodes);
};

// SAVE PRODUCT
const saveLocalTodos = (todo) => {
  console.log('HII');
  // CHECK --- HEY DoIalready have thing in there?
  let productStore;
  if (localStorage.getItem('productStore') === null) {
    productStore = [];
  } else {
    productStore = JSON.parse(localStorage.getItem('productStore'));
  }
  productStore.push(todo);
  localStorage.setItem('productStore', JSON.stringify(productStore));
};

// DISPLAY FROM LOCAL STORAGE
const getProdFromStore = () => {
  let productStore;
  if (localStorage.getItem('productStore') === null) {
    productStore = [];
  } else {
    productStore = JSON.parse(localStorage.getItem('productStore'));
  }
  productStore.forEach((product) => {
    const newDiv = document.createElement('div'); // div
    newDiv.classList.add('todo'); // class

    const newLi = document.createElement('li');
    newLi.classList.add('todo-item');

    // do div vloz li:
    newDiv.appendChild(newLi);
    listofProducts.appendChild(newDiv);
    newLi.innerText = product; // no innerHTML

    // CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerText = 'UPDATE'; // '<iclass="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    newDiv.appendChild(completedButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'DEL'; // '<iclass="fas fa-check"></i>';
    deleteButton.classList.add('del-btn');
    newDiv.appendChild(deleteButton);
  });
};
// DELETE
const deleteProdFromStore = (prod) => {
  let productStore;
  if (localStorage.getItem('productStore') === null) {
    productStore = [];
  } else {
    productStore = JSON.parse(localStorage.getItem('productStore'));
  }

  const prodInArray = prod.parentElement.children[0].innerText;
  const indexOfProd = productStore.indexOf(prodInArray);

  productStore.splice(indexOfProd, 1); // zachytí   mi tu hodnotu na ktoru som klikol, a vymaze
  localStorage.setItem('productStore', JSON.stringify(productStore));

  console.log('productStore,list of items:', productStore); // returns pole stringov, ['jkjkdjk', 'jkjkdjekjcekjc', 'Martin'] ako prefiltrujem pole strngov konkretneho stringu ? pomocou INDEXU
  console.log('prod.parentElement:', prod.parentElement); //* 1. klikol som na button elemente a jeho parent je div element, a vrati mi všetko čo je v tom parente
  console.log('Value:', prod.parentElement.children[0].innerText);
  //* 2.teraz mi to vrati value prvého childrenu parenta tohot elementu na ktorý som klikol
  //* 3. index tej valaue , zo storu mi vrát .index(tejto value)
  console.log(
    'index:',
    productStore.indexOf(prod.parentElement.children[0].innerText) // OKEEJ takto som získal index kliknutého produktu
  );
  // productStore.filter(product=>)
};

window.addEventListener('DOMContentLoaded', getProdFromStore);
submitButton.addEventListener('click', addNewProd);
listofProducts.addEventListener('click', deleteProd);
categoryProducts.addEventListener('click', filterCateg);

// chcem zacat deletovat / updaovat Itemy, kde ich strojuem ?
// pozriet sa ako to robil v budget app ?
