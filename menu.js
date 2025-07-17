const menuItems = [
  // 🍔 Бургеры
  {
    category: "Бургеры",
    title: "Чизбургер",
    description: "Сочный бифштекс, сыр, кетчуп и булочка.",
    price: "30 000 сум",
    image: "images/burger1.jpg",
    
  },
  {
    category: "Бургеры",
    title: "Двойной бургер",
    description: "Два слоя мяса и двойной сыр — максимум вкуса!",
    price: "42 000 сум",
    image: "images/burger2.jpg",
  },
  {
    category: "Бургеры",
    title: "Острый бургер",
    description: "Пикантный бургер с перцем чили и острым соусом.",
    price: "35 000 сум",
    image: "images/burger3.jpg",
  },
  {
    category: "Бургеры",
    title: "Классический бургер",
    description: "Говядина, салат, помидор, сыр, кетчуп.",
    price: "33 000 сум",
    image: "images/burger4.jpg",
  },
  {
    category: "Бургеры",
    title: "Веган бургер",
    description: "Котлета из нута, овощи, фирменный соус.",
    price: "32 000 сум",
    image: "images/burger5.jpg",
  },
  {
    category: "Бургеры",
    title: "Бургер с грибами",
    description: "Говядина, грибы, сыр и сливочный соус.",
    price: "38 000 сум",
    image: "images/burger6.jpg",
  },
  {
    category: "Бургеры",
    title: "Бекон бургер",
    description: "Мясо, сыр, бекон и BBQ-соус.",
    price: "39 000 сум",
    image: "images/burger7.jpg",
  },
  {
    category: "Бургеры",
    title: "Сырный бургер",
    description: "Тройная порция сыра и сочная котлета.",
    price: "37 000 сум",
    image: "images/burger8.jpg",
  },
  {
    category: "Бургеры",
    title: "Фиш бургер",
    description: "Котлета из рыбы, капуста и соус тартар.",
    price: "34 000 сум",
    image: "images/burger9.jpg",
  },
  {
    category: "Бургеры",
    title: "Мини-бургер",
    description: "Небольшой бургер — идеально для детей.",
    price: "22 000 сум",
    image: "images/burger10.jpg",
  },
  {
    category: "Бургеры",
    title: "Двойной BBQ бургер",
    description: "2 котлеты, бекон, сыр, BBQ и лук фри.",
    price: "45 000 сум",
    image: "images/burger11.jpg",
  },
  {
    category: "Бургеры",
    title: "Бургер с яйцом",
    description: "Котлета, сыр и жареное яйцо сверху.",
    price: "36 000 сум",
    image: "images/burger12.jpg",
  },

  // 🍟 Гарниры
  {
    category: "Гарниры",
    title: "Картошка фри стандарт",
    description: "Хрустящая, обжаренная во фритюре.",
    price: "15 000 сум",
    image: "images/fries1.jpg",
  },
  {
    category: "Гарниры",
    title: "Картошка фри с сыром",
    description: "Фри с расплавленным сыром чеддер.",
    price: "18 000 сум",
    image: "images/fries2.jpg",
  },
  {
    category: "Гарниры",
    title: "Картошка фри с беконом",
    description: "Фри + бекон + соус ранч.",
    price: "20 000 сум",
    image: "images/fries3.jpg",
  },
  {
    category: "Гарниры",
    title: "Картошка по-деревенски",
    description: "Крупные ломтики с приправами.",
    price: "17 000 сум",
    image: "images/fries4.jpg",
  },

  // 🍕 Пицца (пример)
  {
    category: "Пицца",
    title: "Пепперони",
    description: "С колбасками, сыром и томатным соусом.",
    price: "55 000 сум",
    image: "images/pizza1.jpg",
  },

  {
  category: "Пицца",
  title: "Маргарита",
  description: "Классическая пицца с сыром моцарелла и томатами.",
  price: "50 000 сум",
  image: "images/pizza2.jpg",
},
{
  category: "Пицца",
  title: "4 сыра",
  description: "Моцарелла, пармезан, горгонзола и чеддер.",
  price: "58 000 сум",
  image: "images/pizza3.jpg",
},
{
  category: "Пицца",
  title: "Гавайская",
  description: "Курица, ананасы и сырный соус.",
  price: "52 000 сум",
  image: "images/pizza4.jpg",
},
{
  category: "Пицца",
  title: "Мясная",
  description: "Говядина, курица, пепперони, сыр.",
  price: "60 000 сум",
  image: "images/pizza5.jpg",
},
{
  category: "Пицца",
  title: "Овощная",
  description: "Болгарский перец, кукуруза, грибы и томаты.",
  price: "48 000 сум",
  image: "images/pizza6.jpg",
},
{
  category: "Пицца",
  title: "Пицца с грибами",
  description: "Шампиньоны, сыр, сливочный соус.",
  price: "53 000 сум",
  image: "images/pizza7.jpg",
},
{
  category: "Пицца",
  title: "Острая пицца",
  description: "С острым соусом, перцем халапеньо и пепперони.",
  price: "55 000 сум",
  image: "images/pizza8.jpg",
},
{
  category: "Пицца",
  title: "Пицца с беконом",
  description: "Бекон, лук, сыр и BBQ соус.",
  price: "57 000 сум",
  image: "images/pizza9.jpg",
},
{
  category: "Пицца",
  title: "Белая пицца",
  description: "Сливочная основа, сыр, грибы и курица.",
  price: "54 000 сум",
  image: "images/pizza10.jpg",
},

{
  category: "Напитки",
  title: "Pepsi",
  description: "Газированный напиток со вкусом колы.",
  price: "10 000 сум",
  image: "images/pepsi.jpg",
},
{
  category: "Напитки",
  title: "Fanta",
  description: "Освежающая апельсиновая газировка.",
  price: "10 000 сум",
  image: "images/fanta.jpg",
},
{
  category: "Напитки",
  title: "Sprite",
  description: "Газировка со вкусом лимона и лайма.",
  price: "10 000 сум",
  image: "images/sprite.jpg",
},
{
  category: "Напитки",
  title: "Айран",
  description: "Традиционный кисломолочный напиток.",
  price: "9 000 сум",
  image: "images/ayran.jpg",
},
{
  category: "Напитки",
  title: "Лимонад",
  description: "Домашний лимонад с мятой и лимоном.",
  price: "12 000 сум",
  image: "images/lemonade.jpg",
},
{
  category: "Напитки",
  title: "Чай черный",
  description: "Горячий классический чёрный чай.",
  price: "5 000 сум",
  image: "images/tea_black.jpg",
},
{
  category: "Напитки",
  title: "Чай зелёный",
  description: "Ароматный зелёный чай с жасмином.",
  price: "5 000 сум",
  image: "images/tea_green.jpg",
},
{
  category: "Напитки",
  title: "Апельсиновый сок",
  description: "Свежевыжатый сок из апельсинов.",
  price: "14 000 сум",
  image: "images/orange_juice.jpg",
},
{
  category: "Напитки",
  title: "Мохито",
  description: "Безалкогольный коктейль с мятой и лаймом.",
  price: "15 000 сум",
  image: "images/mojito.jpg",
},


];

function renderMenu(category = "Все") {
  const container = document.getElementById("menu-container");
  container.innerHTML = "";

  const filtered =
    category === "Все"
      ? menuItems
      : menuItems.filter((item) => item.category === category);

  const itemsWrap = document.createElement("div");
  itemsWrap.classList.add("menu-items");

  filtered.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h4>${item.title}</h4>
      <p>${item.description}</p>
      <span>${item.price}</span>
      <button class="order-btn" data-title="${item.title}">Заказать</button>
    `;

    itemsWrap.appendChild(itemDiv);
  });

  container.appendChild(itemsWrap);

  // Обработчики кнопок "Заказать"
  const orderButtons = container.querySelectorAll(".order-btn");
  orderButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const title = btn.dataset.title;
      showModal(title);
    });
  });
}

function showModal(title) {
  const modal = document.getElementById("order-modal");
  const message = document.getElementById("order-message");
  message.textContent = `Вы заказали: ${title}`;
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("order-modal");
  modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();

  const buttons = document.querySelectorAll(".category-buttons button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderMenu(btn.dataset.category);
    });
  });

  // Закрытие модалки
  document.querySelector(".close-btn").addEventListener("click", closeModal);
  window.addEventListener("click", (e) => {
    const modal = document.getElementById("order-modal");
    if (e.target === modal) closeModal();
  });
});