let cart = [];

const sideBarContainer = document.querySelector('#sideBarContainer');

console.log(sideBarContainer);

function clearStorageAndCart(){
  
  //clear cart
  cart = [];

  let currentStorage = JSON.parse(localStorage.getItem('CART'));

  console.log(currentStorage);

  if(currentStorage) {
    cart = currentStorage;
  }

  console.log(cart);
}

clearStorageAndCart();

sideBarContainer.innerHTML = '';


