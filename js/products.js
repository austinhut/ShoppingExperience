//file path for product images
const imagePath = "images/shop/thumbnails/";

//products array created as assignment insructed 
let products = [
  {
    id: 1,
    image: 'ClownUmbrella_Thumb.jpg',
    name: 'Clown Umbrella',
    description: 'A porcelain figurine of a clown holding an umbrella and riding a unicycle',
    quantity: 1,
    price: 29.95
  },
  {
    id: 2,
    image: 'ElephantFigurines_Thumb.jpg',
    name: 'Elephant Figurines',
    description: 'White elephant ceramic figurines decorated with various fine color',
    quantity: 1,
    price: 18.95
  },
  {
    id: 3,
    image: 'SquishyCaterpillar_Thumb.jpg',
    name: 'Squishy Caterpillar',
    description: 'A squashy, spiky, multi-colored caterpillar',
    quantity: 1,
    price: 9.99
  },
  {
    id: 4,
    image: 'MiniCactus_Thumb.jpg',
    name: 'Mini Cactus',
    description: 'A miniature cactus in a pink vase',
    quantity: 1,
    price: 12.99
  },
  {
    id: 5,
    image: 'Nanoblocks_Thumb.jpg',
    name: 'Nano Nanoblocks',
    description: 'The smallest connection blocks on the market',
    quantity: 1,
    price: 32.95
  }, 
  {
    id: 6,
    image: 'CuteGoat_Thumb.jpg',
    name: 'Cute Goat',
    description: 'A small white ceramic goat',
    quantity: 1,
    price: 15.95
  },
  {
    id: 7,
    image: 'LawnGnome_Thumb.jpg',
    name: 'Lawn Gnome',
    description: 'An angry lawn gnome holding a sign that says GO AWAY!',
    quantity: 1,
    price: 7.95
  },
  {
    id: 8,
    image: 'BobRoss_Thumb.jpg',
    name: 'Bob Ross',
    description: 'A Bob Ross plastic figure holding a paint palette',
    quantity: 1,
    price: 18.95
  }
]










// //creates array that will store product info via a unique object
// let products = new array();

// //object constructor used to create instances of storeProduct
// function storeProduct(id, imgFileName, name, description, quantity, price){
//   this.id = id;
//   //ask about the 'imagePath +' goes here or within the object instance. Also ask whether ' ' are needed if this goes within the individ instances
//   this.imgFileName = imgFileName;
//   this.name = name;
//   this.description = description;
//   this.quantity = quantity;
//   this.price = price;
// }

// //object that creates the Clown Umbrella object
// let clownUmbrella = new storeProduct(1, imagePath + 'ClownUmbrella_Thumb.jpg', 'Clown Umbrella', 'A porcelain figurine of a clown holding an umbrella and riding a unicycle', 1, '29.95');
// //adds clownUmbrella to 'end' of products array, will be first since its only object in array at this point
// products.push(clownUmbrella);

// //object that creates the Elephant Figurines object
// let elephantFigurines = new storeProduct(2, imagePath + 'ElephantFigurines_Thumb.jpg', 'Elephant Figurines', 'White elephant ceramic figurines decorated with various fine color', '18.95');
// //adds elephantFigurines to end of products array
// products.push(elephantFigurines);

// //object that creates the Squishy Caterpillar object
// let squishyCaterpillar = new storeProduct(3, imagePath + 'SquishyCaterpillar_Thumb.jpg', 'Squishy Caterpillar','A squashy, spiky, multi-colored caterpillar', 1, '9.99');
// //adds squishyCaterpillar to end of products array
// products.push(squishyCaterpillar);

// //object that creates the Mini Cactus object
// let miniCactus = new storeProduct(4, imagePath + 'MiniCactus_Thumb.jpg', 'Mini Cactus', 'A miniature cactus in a pink vase', 1, '12.99');
// //adds miniCactus to end of products array
// products.push(miniCactus);

// //object that creates the Nano Nanoblocks object
// let nanoNanoblocks = new storeProduct(5, imagePath + 'Nanoblocks_Thumb.jpg', 'Nano Nanoblocks', 'The smallest connection blocks on the market', 1, '32.95');
// //adds nanoNanoblocks to end of products array
// products.push(nanoNanoblocks);

// //object that creates the Cute Goat object
// let cuteGoat = new storeProduct(6, imagePath + 'CuteGoat_Thumb.jpg', 'Cute Goat', 'A small white ceramic goat', 1, '15.95');
// //adds cuteGoat to end of products array
// products.push(cuteGoat);

// //object that creates the Lawn Gnome object
// let lawnGnome = new storeProduct(7, imagePath + 'LawnGnome_Thumb.jpg', 'Lawn Gnome', 'An angry lawn gnome holding a sign that says GO AWAY!', 1, '7.95');
// //adds lawnGnome to end of products array
// products.push(lawnGnome);

// //object that creates the Bob Ross object
// let bobRoss = new storeProduct(8, imagePath + 'BobRoss_Thumb.jpg', 'Bob Ross', 'A Bob Ross plastic figure holding a paint palette', 1, '18.95');
// //adds bobRoss to end of products array
// products.push(bobRoss);