class Customer {
  constructor(name) {
    this.name = name;
    this.member = false;
    this.memberType = "";
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
    return this.memberType;
  }

  setMemberType(type) {
    this.memberType = type;
  }

  toString() {
    return `ชื่อ: ${this.name}, สมาชิก: ${
      this.member ? "ใช่" : "ไม่ใช่"
    }, ประเภทสมาชิก: ${this.memberType}`;
  }
}

class Visit {
  constructor(customer, date, serviceExpense, productExpense) {
    this.customer = customer;
    this.date = date;
    this.serviceExpense = serviceExpense;
    this.productExpense = productExpense;
  }

  getName() {
    return this.customer.getName();
  }

  getServiceExpense() {
    return this.serviceExpense;
  }

  setServiceExpense(expense) {
    this.serviceExpense = expense;
  }

  getProductExpense() {
    return this.productExpense;
  }

  setProductExpense(expense) {
    this.productExpense = expense;
  }

  getTotalExpense() {
    return this.serviceExpense + this.productExpense;
  }

  toString() {
    return `ชื่อลูกค้า: ${this.customer.getName()}, วันที่: ${this.date.toLocaleDateString()}, ค่าบริการ: ${
      this.serviceExpense
    }, ค่าสินค้า: ${
      this.productExpense
    }, ค่าใช้จ่ายทั้งหมด: ${this.getTotalExpense()}`;
  }
}

class DiscountRate {
  static #serviceDiscountRates = {
    premium: 0.2,
    gold: 0.15,
    silver: 0.1,
  };

  static #productDiscountRates = {
    premium: 0.1,
    gold: 0.1,
    silver: 0.1,
  };

  static getServiceDiscountRate(type) {
    return this.#serviceDiscountRates[type] || 0;
  }

  static getProductDiscountRate(type) {
    return this.#productDiscountRates[type] || 0;
  }
}

// ตัวอย่างการใช้งาน
const customer1 = new Customer("สมชาย");
const visit1 = new Visit(customer1, new Date(), 1000, 500);

console.log(visit1.toString());

// ปรับลดค่าบริการ
const discountRate = DiscountRate.getServiceDiscountRate(customer1.memberType);
visit1.setServiceExpense(visit1.getServiceExpense() * (1 - discountRate));

console.log(visit1.toString());
