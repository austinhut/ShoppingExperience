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


