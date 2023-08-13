const form = document.getElementById('form');
const input = document.getElementById('input');
const submit = document.getElementById('submit');
const box = document.getElementById('box');

const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const renderEmpty = () => {
  box.innerHTML = `<p class="error">Debe ingresar un valor.</p>`
};

const renderPizzas = (pizza) => {
  box.innerHTML = `<div class="card">
    <h2>${pizza.nombre}</h2>
    <img src=${pizza.imagen} alt="">
    <span>$${pizza.precio}</span>
</div>`;
};

const renderError = () => {
  let pizzaId = input.value;
  box.innerHTML = `<p class="error">No existe ninguna pizza con ID ${pizzaId}.</p>`
};

const submitPizza = (e) => {
  e.preventDefault();
  let pizzaId = parseInt(input.value, 32);
  let pizzaEncontrada = pizzas.find(pizza => pizza.id === pizzaId);

  if (!pizzaId) {
    renderEmpty();
  }
  else if (pizzaEncontrada) {
    renderPizzas(pizzaEncontrada)
  }
  else {
    renderError()
  }

  input.value = '';
};


const init = () => {
  form.addEventListener('submit', submitPizza);
};

init();