/* ------ Customer ------ */
class Customer {
  name = "";
  member = false;
  memberType = "";
  constructor(name, member, memberType) {
    this.name = name;
    this.member = member;
    this.memberType = memberType;
    this.visit = [];
  }
  getName() {
    return this.name;
  }
  isMember() {
    return this.member;
  }
  setMember(member) {
    this.member = member;
  }
  getMemberType() {
    this.memberType;
  }
  setMemberType(type) {
    this.memberType = type;
  }
  toString() {
    return `Customer = [ name = ${this.name}, member = ${this.member}, memberTyep = ${this.memberType}]`;
  }
}

/* ------ Visit ------ */
class Visit {
  customer = null;
  date = "";
  serviceExpense = 0;
  productExpense = 0;
  constructor(customer, date) {
    this.customer = customer;
    this.date = date;
    this.serviceExpense = 0;
    this.productExpense = 0;
    this.customer.visit.push(this);
  }
  getName() {
    return this.name;
  }
  getServiceExpense() {
    return this.serviceExpense;
  }
  setServiceExpense(serviceExpense) {
    this.serviceExpense = serviceExpense;
  }
  getProductExpense() {
    return this.productExpense;
  }
  setProductExpense(productExpense) {
    this.productExpense = productExpense;
  }
  getTotalExpense() {
    return this.serviceExpense + this.productExpense;
  }
  toString() {
    return `Visit [ Customer = ${this.customer}, Date = ${
      this.date
    }, Service Expense = ${this.serviceExpense}, Product Expense = ${
      this.productExpense
    }, Total = ${this.getTotalExpense()}]`;
  }
}

/* ------ DiscountRate ------ */
class DiscountRate {
  static serviceDiscount = {
    premium: 0.2,
    gold: 0.15,
    silver: 0.1,
  };

  static productDiscount = {
    premium: 0.1,
    gold: 0.1,
    silver: 0.1,
  };
  static getServiceDiscountRate(type) {
    return this.serviceDiscount[type];
  }

  static getProductDiscountRate(type) {
    return this.productDiscount[type];
  }
}

/* ------ Main ------ */
const main = () => {
  //Create customer
  const customer1 = new Customer("Kays", true, "Gold");

  //visit
  const visit1 = new Visit(customer1, "12/12/2022");
  visit1.setServiceExpense(50);
  visit1.setProductExpense(30);

  // const visit2 = new Visit(customer1, "13/13/2022");
  // visit2.setServiceExpense(40);
  // visit2.setProductExpense(20);

  console.log(customer1.toString());

  console.log("\nVisits for " + customer1.getName() + ":");
  customer1.visit.forEach((visit) => {
    console.log(visit.toString());
  });
};
main();
