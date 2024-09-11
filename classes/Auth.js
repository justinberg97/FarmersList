const Customer = require('./Customer');

class Auth {
    constructor() {
        this.customers = [];
    }
    register(name, email, shippingAddress) {
        const newCustomer = new Customer(name, email, shippingAddress);
        this.customers.push(newCustomer);
        return newCustomer;
    }
    login(email) {
        const customer = this.customers.find(cust => cust.email === email);
      return customer || null;
        }
    }


module.exports = Auth;