const Cart = require('./Cart');

class Customer {
    constructor(name, email, shippingAddress) {
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
        this.orderHistory = [];
    }

    addToOrderHistory(cart) {
        if (!(cart instanceof Cart)) {
            throw new Error('only instances of cart can be added here');
        }
        this.orderHistory.push(cart);
    }
}

module.exports = Customer;