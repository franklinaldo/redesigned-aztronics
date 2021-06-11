// quantity value buttons functions
let btn_add = document.getElementById("add");
let btn_substract = document.getElementById("substract");
let input = document.getElementById("qtyInput");

btn_add.addEventListener("click", () => {
  input.value = parseInt(input.value) + 1;
});

btn_substract.addEventListener("click", () => {
  input.value = parseInt(input.value) - 1;
});

//Product detail tabs functions
const tabs = document.querySelectorAll(`[data-tab-target]`);
const tabContents = document.querySelectorAll(`[data-tab-content]`);
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    /** Tab Options */
    tabs.forEach((eachTabContent) => {
      eachTabContent.classList.remove("active");
    });
    tab.classList.add("active");

    /** Tab Content */
    //Remove active tabs
    tabContents.forEach((eachTabContent) => {
      eachTabContent.classList.remove("active");
    });

    //Set the clicked list active
    const target = document.querySelector(tab.dataset.tabTarget);
    target.classList.add("active");
  });
});

/** People Also Viewed */

/** Data for recently viewed */

let people_recent_view = document.getElementById("people_recent_view");
let popular_items_data = [
  {
    product_name: "W4208A - 287/0.30 160A Black Power Cable",
    product_price: "$11.25",
    image_location: "../img/products/Image 12.png",
  },
  {
    product_name: "S6104 - 3-16V Mini Piezo Sealed PCB Mount Buz..",
    product_price: "$5.25",
    image_location: "../img/products/Image 5.png",
  },
  {
    product_name: "C2107 - Twin Cone EWIS PA Driver Speaker",
    product_price: "$36.50",
    image_location: "../img/products/Image 6.png",
  },
  {
    product_name: "S9179B - Solar Powered Dummy Security Camera",
    product_price: "$37.50",
    image_location: "../img/products/Image 7.png",
  },
];

people_recent_view.innerHTML += printCard(popular_items_data);

/** function to create HTML from the data */
function printCard(data) {
  let html_code = "";

  for (eachData of data) {
    html_code += `
      <div class="card__container mui-shadow">
        <a href="/pages/product_detail.html">
          <div class="card__media mui-shadow">
            <img src="${eachData.image_location}"/>
          </div>
        </a>
        <div class="btn btn-item btn--floating">
          <img src="../img/icons/cart_plus.svg" class="icon">
        </div>
        <a href="/pages/product_detail.html">
          <div class="item_info">
            
            <p class="product_name">${eachData.product_name}</p>
            <p class="product_price">${eachData.product_price}</p>
            <div class="btn-container">
              <div class="btn btn-item">
                <img src="../img/icons/cart_plus.svg" class="icon">
              </div>
              <div class="btn btn-item" >
                <img src="../img/icons/compare_plus.svg" class="icon">
              </div>
            </div>
          </div>
        </a>
          
      </div>
        `;
  }

  return html_code;
}

/** Cart Button */
let cart_button = document.getElementById("cart_button");
let cart_pop = document.getElementById("cart_pop");
let opacity_cart = document.getElementById("opacity_cart");

const body = document.getElementsByTagName("body");

/** Click on opacity to exit */
opacity_cart.addEventListener("click", () => {
  cart_pop.classList.add("active");
});

cart_button.addEventListener("click", () => {
  let isRemove = false;

  cart_pop.classList.forEach((className) => {
    if (className == "active") {
      isRemove = true;
    }
  });

  if (isRemove) {
    cart_pop.classList.remove("active");
    body.se

  } else {
    cart_pop.classList.add("active");
  }
});
