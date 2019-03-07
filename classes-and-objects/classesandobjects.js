/******************************
        CHALLENGE 1:
Build an online shopping cart!
******************************/ 

// define an object thart represents an item in the cart using a class

class CartItem {
    constructor(name, price, qty, discount) {
        // this = {}
        this.name = name;
        this.price = price;
        this.qty = qty;
        this.discount = discount;
    }
    // add a method to your class that returns the subtotal
    subtotal() {
        // Return discounted subtotal if theres a discount
        if(this.discount != undefined) {
            const itemSubtotal = (this.price * this.qty);
            return (itemSubtotal * this.discount);
        }
        // return subtotal if no discount
        else {
            return (this.price * this.qty);
        }
    }
};

let item1 = new CartItem('shoes', 85.30, 2, .25);
let item2 = new CartItem('hat', 25.99, 3)


console.log(item1);
console.log(item1.subtotal());
console.log(item2);
console.log(item2.subtotal());

new CartItem('hello')
var item  = {}
item.name = 'hello' // { name: 'hello' }


// Define a class that will be a shopping cart
class ShoppingCart {
    constructor(items = []) {
        // items is a property of the instance of the class.
        this.items = items;
    }

    // Add a method to the cart class that adds a new item to the shopping cart
    addItem(name, price, qty) {
        const item = new CartItem(name, price, qty);
        // step 7
        for(i = 0; i < this.items.length; i += 1) {
            if (newItem.name == this.items[i].name) {
                this.items[i].qty += newItem.qty
                return
            }
        }
        this.items.push(item);
    }

    removeItem(index, count) {
        this.items.splice(index, count);
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
