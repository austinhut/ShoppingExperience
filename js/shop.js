//querySelector() finds the cardContainer div and assigns it to a variable
const cardContainer = document.querySelector('#cardContainer');

//addProducts function. When called, adds all items within products array to page
// function addProducts() {
//   //forEach() method that will iterate products array
//   //Using individualCard parameter (is parameter due to being passed into forEach() method) to access each product object's property within products array via the usage of template literals
//   products.forEach(individualCard => {
//     //Using innerHTML element property to write the values of products array properties to the page via the usage of template literals on the individualCard parameter
//     //forEach method will iterate array, grabbing the necessary properties (dictated by which properties were used on individualCard parameter vid template literals) at each 'stop' within the array. Upon iterating thru an entire object, that object's card will be printed to the page via usage of innerHTML element property
//     cardContainer.innerHTML += `<div class="card" id="cardNumber${individualCard.id}">
//                                   <img src="${individualCard.image}" alt="${individualCard.description}"/>
//                                   <div class="cardText">
//                                     <h4>${individualCard.name}</h4>
//                                     <p>${individualCard.description}</p>
//                                     <p>&dollar;${individualCard.price}</p>
//                                     <button class="cartButton" id="${individualCard.id}">Add to Cart</button>
//                                   </div>
//                                 </div>`;
//   });
// }
// addProducts();

let productsPerPage = 6;
let currentPage = 1;
let pagedResults = [];
let totalProducts = products.length;

function paginate() {
  
  let end = currentPage * productsPerPage;
  let start = end - productsPerPage;

  pagedResults = products.slice(start, end);
  
  $('#cardContainer').empty();

  $(pagedResults).each(function(index, individualCard){
    $('#cardContainer').append(
    `<div class="card" id="cardNumber${individualCard.id}">
    <img src="${individualCard.image}" alt="${individualCard.description}"/>
    <div class="cardText">
      <h4>${individualCard.name}</h4>
      <p>${individualCard.description}</p>
      <p>&dollar;${individualCard.price}</p>
      <button class="cartButton" id="${individualCard.id}">Add to Cart</button>
    </div>
  </div>`);
  });

  if (currentPage <= 1) {
    $('.previous').attr('disabled', true);
  }
  else {
    $('.previous').attr('disabled', false);
  }
  
  if ((currentPage * productsPerPage) >= totalProducts) {
    $('.next').attr('disabled', true);
  }
  else {
    $('.next').attr('disabled', false);
  }
};
paginate();

//NEXT button
$('.next').on('click', function(){
  
  //currentPage * productsPerPage -> This calculates what the last product on the current page is
  //<= totalProducts ->  If the last product on the page is less than or equal to the total products in the products array
  if ((currentPage * productsPerPage) <= totalProducts){
    currentPage++; 
  }
  
  paginate();

  saveToLocalStorage();

  fadeButtons();
});

//PREVIOUS button
$('.previous').on('click', function(){
  
  //checks if the current page is greater than one
  if (currentPage > 1) {
    currentPage--; 
  }
  
  paginate();

  saveToLocalStorage();

  fadeButtons();
});



function saveToLocalStorage(){
  
  let cartButton = document.getElementsByClassName('cartButton');

  for (let i=0; i < cartButton.length; i++){
    cartButton[i].addEventListener('click', ()=>{
      
      let selectedProduct = products.find((product) => product.id == cartButton[i].id);

      let cartItemSearch = cart.find( (cartItem) => cartItem.id == selectedProduct.id);

      if (cartItemSearch) {
        cartItemSearch.quantity++;
      }
      else {
        cart.push(selectedProduct);
      }
  
      localStorage.setItem("CART", JSON.stringify(cart));

      displayCart();
    });
  };
};
saveToLocalStorage();

function displayCart() {
  //clear existing contents of the shopping cart
  sideBarContainer.innerHTML = '';

  cart.forEach(cartItem => {
    sideBarContainer.innerHTML +=`<div class="tableRow">
                                      <div class="tableCell">
                                          ${cartItem.name}
                                      </div>
                                      <div class="tableCell">
                                          &dollar;${cartItem.price}
                                      </div>
                                 </div>
                                   <div class="tableRow">
                                      <div class="tableCell borderBottom"><input class="quantityNumberInput" id="${cartItem.id}" type="number" value="${cartItem.quantity}" min="1" max="5"></input></div>
                                      <a id="${cartItem.id}" class="tableCell borderBottom removeLink" href="#">Remove</a>
                                  </div>`;
  });
  removeFromCart();
};
displayCart();

let checkoutButton = document.getElementById('checkoutButton');

checkoutButton.addEventListener('click', ()=> {
  window.location.href = 'cart.html';
});
