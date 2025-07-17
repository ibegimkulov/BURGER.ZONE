document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cart-container");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    container.innerHTML = "<p>Корзина пуста.</p>";
    return;
  }

  let total = 0;
  cart.forEach((item) => {
    const price = parseInt(item.price.replace(/\s|сум/g, ""));
    total += price * item.quantity;

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${item.image}" width="60">
      <strong>${item.title}</strong> x${item.quantity}
      <span>${item.price}</span>
    `;
    container.appendChild(div);
  });

  const totalDiv = document.createElement("div");
  totalDiv.classList.add("cart-total");
  totalDiv.innerHTML = `<h3>Итого: ${total.toLocaleString()} сум</h3>`;
  container.appendChild(totalDiv);
});
