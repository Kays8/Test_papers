/* ------ Customer ------ */
class Customer {
  id = 0;
  name = "";
  discount = 0;
  constructor(id, name, discount) {
    this.id = id;
    this.name = name;
    this.discount = discount;
  }
  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getDiscount() {
    return this.discount;
  }
  setDiscount(discount) {
    this.discount = discount;
  }
  toString() {
    return ` ${this.name}(${this.id})(${this.discount}%) `;
  }
}

/* ------ Invoice ------ */
class Invoice {
  id = 0;
  customer = null;
  amount = 0;
  constructor(id, customer, amount) {
    this.id = id;
    this.customer = customer;
    this.amount = amount;
  }
  getId() {
    return this.id;
  }
  getCustomer() {
    return this.customer;
  }
  setCustomer(customer) {
    this.customer = customer;
  }
  getAmount() {
    return this.amount;
  }
  setAmount(amount) {
    this.amount = amount;
  }
  getCustomerId() {
    return this.customer.getId();
  }
  getCustomerName() {
    return this.customer.getName();
  }
  getCustomerDiscount() {
    return this.customer.getDiscount();
  }
  getAmountAfterDiscount() {
    return this.amount - (this.amount * this.customer.getDiscount()) / 100;
  }
  toString() {
    return `Invoice[id=${
      this.id
    }, customer=${this.getCustomerName()} (${this.getCustomerDiscount()}%), amount=${
      this.amount
    }]`;
  }
}

/* ------ Main ------ */
const main = () => {
  const customer1 = new Customer(1, "Best", 10);

  const invoice1 = new Invoice(1, customer1, 100);
  console.log(customer1.toString());
  console.log(invoice1.getAmountAfterDiscount());
};
main();
