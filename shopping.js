let cart = [];
let totalAmount = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  totalAmount += price;

  document.getElementById("message").innerText =
    item + " added to cart ✔";

  updateBill();
}

function updateBill() {
  let billText = "";
  cart.forEach((p, index) => {
    billText += (index + 1) + ". " + p.item + " - ₹" + p.price + "\n";
  });

  document.getElementById("billItems").value = billText;
  document.getElementById("total").value = "₹" + totalAmount;
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  alert("Order placed successfully 🎉");

  // reset
  cart = [];
  totalAmount = 0;
  updateBill();
  document.getElementById("message").innerText = "";
}
