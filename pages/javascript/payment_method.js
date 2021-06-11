let bank_trf = document.getElementById("bank_trf");
let paypal = document.getElementById("paypal");
let cod = document.getElementById("cod");
let order_summary_button = document.getElementById("order_summary_button");

selectPaymentMethod(bank_trf);
selectPaymentMethod(paypal);
selectPaymentMethod(cod);

// function to choose one of the given payment method
function selectPaymentMethod(id) {
  id.addEventListener("click", () => {
    console.log(id);
    id.classList.forEach((className) => {
      if (className == "selected") {
        id.classList.remove("selected");
      } else {
        id.classList.add("selected");
        if (id == bank_trf) {
          order_summary_button.setAttribute("href", "./order_summary.html");
          paypal.classList.remove("selected");
          cod.classList.remove("selected");
        } else if (id == paypal) {
          bank_trf.classList.remove("selected");
          cod.classList.remove("selected");
        } else {
          bank_trf.classList.remove("selected");
          paypal.classList.remove("selected");
        }
      }
    });
  });
}
