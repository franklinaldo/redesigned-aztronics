/** delivery method */
let aus_post = document.getElementById("aus_post");
let pickup = document.getElementById("pickup");
let express = document.getElementById("express");
let ship_add_button = document.getElementById("shipping_add_button");

selectDeiveryMethod(aus_post);
selectDeiveryMethod(pickup);
selectDeiveryMethod(express);

// function to choose one of the given method
function selectDeiveryMethod(id) {
  
  id.addEventListener("click", () => {
    console.log(id);
    id.classList.forEach((className) => {
      if (className == "selected") {
        id.classList.remove("selected");
      } else {
        id.classList.add("selected");
        if (id == aus_post) {
          ship_add_button.setAttribute('href', "./shipping_address.html");
          pickup.classList.remove("selected");
          express.classList.remove("selected");
        } else if (id==pickup) {
          aus_post.classList.remove("selected");
          express.classList.remove("selected");
        } else {
          aus_post.classList.remove("selected");
          pickup.classList.remove("selected");
        }
      }
    });
  });
}