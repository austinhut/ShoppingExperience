//querySelector() finds the cardContainer div and assigns it to a variable
const cardContainer = document.querySelector('#cardContainer');

//addProducts function. When called, adds all items within products array to page
function addProducts() {
  //forEach() method that will iterate products array
  //Using individualCard parameter (is parameter due to being passed into forEach() method) to access each product object's property within products array via the usage of template literals
  products.forEach(individualCard => {
    //Using innerHTML element property to write the values of products array properties to the page via the usage of template literals on the individualCard parameter
    //forEach method will iterate array, grabbing the necessary properties (dictated by which properties were used on individualCard parameter vid template literals) at each 'stop' within the array. Upon iterating thru an entire object, that object's card will be printed to the page via usage of innerHTML element property
    cardContainer.innerHTML += `<div class="card" id="cardNumber${individualCard.id}">
                                  <img src="${individualCard.image}" alt="${individualCard.description}"/>
                                  <div class="cardText">
                                    <h4>${individualCard.name}</h4>
                                    <p>${individualCard.description}</p>
                                    <p>&dollar;${individualCard.price}</p>
                                    <button class="cartButton" id="${individualCard.id}">Add to Cart</button>
                                  </div>
                                </div>`;
  });
}
addProducts();

function saveToLocalStorage(){
  //GOOD - function call test
  //console.log('Function Called');
  let cartButton = document.getElementsByClassName('cartButton');
  
  for (let i=0; i < cartButton.length; i++){
    cartButton[i].addEventListener('click', ()=>{
      
      let selectedProduct = products.find((product) => product.id == cartButton[i].id);
      
      console.log('test');
      
      cart.push(selectedProduct);
  
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
    sideBarContainer.innerHTML += `<div class="tableRow">
                                      <div class="tableCell">
                                          ${cartItem.name}
                                      </div>
                                      <div class="tableCell">
                                          &dollar;${cartItem.price}
                                      </div>
                                  </div>
                                  <div class="tableRow">
                                      <div class="tableCell borderBottom"></div>
                                      <a id="${cartItem.id}" class="tableCell borderBottom removeLink" href="#">Remove</a>
                                  </div>`;
  });
};
displayCart();


