/******************************
        CHALLENGE 1:
Build an online shopping cart!
******************************/ 

// define an object thart represents an item in the cart using a class

class CartItem {
    constructor(name, price, qty) {
        // this = {}
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
    // add a method to your class that returns the subtotal
    subtotal() {
        return (this.price * this.qty);
    }
};

new CartItem('hello')
var item  = {}
item.name = 'hello' // { name: 'hello' }


// Define a class that will be a shopping cart
class ShoppingCart {
    constructor() {
        // items is a property of the instance of the class.
        this.items = [];
    }

    // Add a method to the cart class that adds a new item to the shopping cart
    addItem(name, price, qty) {
        const item = new CartItem(name, price, qty);
        this.items.push(item);
        // I wanted to get a commit today
    }

    // Calculate the total cost of the cart
    total() {
        // for (starting var; condition; increment)
        let total = 0;
        for(var item = 0; item < this.items.length; item += 1) {
            total += this.items[item].subtotal();
        }  
        return total;
    } 
};



// Test
let hundredItems = new ShoppingCart()
for (var num = 0; num < shoppingCartData.length; num += 1) {
    hundredItems.addItem(shoppingCartData[num].name, shoppingCartData[num].price, shoppingCartData[num].qty)
}
console.log(hundredItems);
console.log(hundredItems.total())

// let cart = new ShoppingCart();
// cart.addItem('purse', 199.99, 2);
// cart.addItem('dress', 459.50, 3);
// cart.addItem('shoes', 129.98, 5);
// console.log(cart.total())
