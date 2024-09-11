class Product {
    constructor(name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = true; // default value
    }

    display() {
        return `Name: ${this.name}, Price: ${this.price}, Descrption: ${this.description}`;
}
};

module.exports = Product;