const products = [
  {
    id: 1,
    name: "Milk Chocolate Bar",
    price: 3.99,
    description: "Smooth and creamy milk chocolate.",
    image: "images/chocolate1.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Dark Chocolate Truffles",
    price: 5.99,
    description: "Rich and decadent dark chocolate truffles.",
    image: "images/chocolate2.jpg",
    quantity: 1,
  },
  {
    id: 3,
    name: "White Chocolate Assortment",
    price: 7.99,
    description: "A delightful assortment of sweet white chocolates.",
    image: "images/chocolate3.jpg",
    quantity: 1,
  },
  {
    id: 4,
    name: "Hazelnut Praline Bar",
    price: 4.49,
    description:
      "Crunchy hazelnuts blended with smooth praline in a chocolate bar.",
    image: "https://via.placeholder.com/150",
    quantity: 1,
  },
  {
    id: 5,
    name: "Caramel-filled Chocolate Hearts",
    price: 6.99,
    description:
      "Indulge in these heart-shaped chocolates with gooey caramel centers.",
    image: "https://via.placeholder.com/150",
    quantity: 1,
  },
  {
    id: 6,
    name: "Orange Zest Dark Chocolate",
    price: 8.99,
    description:
      "Dark chocolate infused with natural orange zest for a citrusy twist.",
    image: "https://via.placeholder.com/150",
    quantity: 1,
  },
  {
    id: 7,
    name: "Almond Crunch Chocolate Bark",
    price: 9.99,
    description:
      "Crunchy almond pieces embedded in a delectable chocolate bark.",
    image: "https://via.placeholder.com/150",
    quantity: 1,
  },
  {
    id: 8,
    name: "Raspberry Filled Chocolates",
    price: 5.49,
    description: "Delicious chocolates filled with raspberry-flavored ganache.",
    image: "https://via.placeholder.com/150",
    quantity: 1,
  },
  {
    id: 9,
    name: "Mint Chocolate Squares",
    price: 4.99,
    description: "Refreshing mint-flavored chocolate squares for a cool treat.",
    image: "https://via.placeholder.com/150",
    quantity: 1,
  },
  {
    id: 10,
    name: "Peanut Butter Cup",
    price: 6.49,
    description:
      "Classic peanut butter filling encased in smooth milk chocolate.",
    image: "https://via.placeholder.com/150",
    quantity: 1,
  },
  {
    id: 11,
    name: "Coconut Chocolate Truffles",
    price: 7.49,
    description: "Decadent truffles with a coconut-infused chocolate ganache.",
    image: "https://via.placeholder.com/150",
    quantity: 1,
  },
  {
    id: 12,
    name: "Sea Salt Caramel Chocolate",
    price: 8.49,
    description:
      "Sweet and salty caramel-filled chocolates for a delightful contrast.",
    image: "https://via.placeholder.com/150",
    quantity: 1,
  },
  {
    id: 13,
    name: "Cherry Almond Chocolate Clusters",
    price: 10.99,
    description:
      "Clusters of cherries and almonds enrobed in smooth milk chocolate.",
    image: "https://via.placeholder.com/150",
    quantity: 1,
  },
  {
    id: 14,
    name: "Pistachio White Chocolate Bar",
    price: 11.99,
    description: "Creamy white chocolate with the crunch of pistachio nuts.",
    image: "https://via.placeholder.com/150",
    quantity: 1,
  },
  {
    id: 15,
    name: "Irish Cream Chocolate Truffles",
    price: 12.99,
    description:
      "Luxurious truffles infused with the rich flavor of Irish cream.",
    image: "https://via.placeholder.com/150",
    quantity: 1,
  },
  {
    id: 16,
    name: "Blueberry Cheesecake Chocolates",
    price: 9.49,
    description: "Chocolates inspired by the flavors of blueberry cheesecake.",
    image: "https://via.placeholder.com/150",
    quantity: 1,
  },
  {
    id: 17,
    name: "Pomegranate Dark Chocolate Squares",
    price: 7.99,
    description:
      "Dark chocolate squares filled with tangy pomegranate ganache.",
    image: "https://via.placeholder.com/150",
    quantity: 1,
  },
  {
    id: 18,
    name: "Strawberry Champagne Truffles",
    price: 13.49,
    description:
      "Decadent truffles infused with the essence of strawberry and champagne.",
    image: "https://via.placeholder.com/150",
    quantity: 1,
  },
  {
    id: 19,
    name: "Chili Mango Chocolate Bar",
    price: 8.99,
    description:
      "A spicy and sweet combination of chili and mango in a chocolate bar.",
    image: "https://via.placeholder.com/150",
    quantity: 1,
  },
  {
    id: 20,
    name: "Espresso Bean Dark Chocolate",
    price: 14.99,
    description:
      "Dark chocolate with the intense flavor of espresso beans for coffee lovers.",
    image: "https://via.placeholder.com/150",
    quantity: 1,
  },
];

const findProductById = (id) => {
  id = parseInt(id);
  for (const product of products) {
    if (product.id == id) {
      return product;
    }
  }
  return null;
}

const toDollar = (num) => {
    return "$" + num;
}

const HST = 0.13;