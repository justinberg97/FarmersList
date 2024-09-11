const Product = require('./classes/Product');

class Cart {
    constructor() {
        this.products = [];
        this.total = 0;
    }
addProduct(product) {
    if (!(product instanceof Product)) {
        throw new Error("only products can be added");
        this.products.push(product);
        this.total += product.price;
    }
}
removeProduct(index) {
    if (index <0 || index >= this.products.length) {
        throw new Error("invalid index");
    }
    const product = this.products.splice(index, 1)[0];
    this.total -= product.price;
}
}

module.exports = Cart;