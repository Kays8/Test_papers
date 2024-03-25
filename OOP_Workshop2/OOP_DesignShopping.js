/* --------------- webUser --------------- */
class WebUser {
  customer = null;
  shoppingCart = null;

  constructor(login_id, password, state) {
    this.login_id = login_id;
    this.password = password;
    this.state = state;
  }
  setCustomer(customer) {
    this.customer = customer;
  }
  setShoppingCart(shoppingCart) {
    this.shoppingCart = shoppingCart;
  }
}

/* --------------- Customer --------------- */
class Customer {
  account = null;

  constructor(id, address, phone, email) {
    this.id = id;
    this.address = address;
    this.phone = phone;
    this.emall = email;
  }
  addAccout(account) {
    this.account = account;
  }
}

/* --------------- Account --------------- */
class Account {
  shoppingCart = null;
  payments = [];
  orders = [];

  constructor(id, billing_address, open, is_closed, closed) {
    this.id = id;
    this.billing_address = billing_address;
    this.is_closed = is_closed;
    this.open = open;
    this.closed = closed;
  }
  setShoppingCart(shoppingCart) {
    this.shoppingCart = shoppingCart;
  }
  addPayment(payment) {
    this.payments.push(payment);
  }
  addOrders(order) {
    this.orders.push(order);
  }
  /* comment new! */
  printOrderDetail() {
    for (let i = 0; i < this.orders.length; i++) {
      console.log(" " + (1 + i));
      this.orders[i].printDetail();
    }
    this.setTotal();
  }
  /* comment new! */
  setTotal() {
    let total = 0;
    for (let i = 0; i < this.orders.length; i++) {
      total += this.orders[i].total;
    }
    console.log(
      "มี " + this.orders.length + " ออเดอร์ ราคารวมทั้งหมด : " + total
    );
  }
}

/* --------------- ShoppingCart --------------- */
class ShoppingCart {
  lineItems = [];
  constructor(created) {
    this.created = created;
  }
  addLineItem(lineItem) {
    this.lineItems.push(lineItem);
  }

  /* comment new! */
  printShoppingCart() {
    console.log("----------In Cart-----------");
    console.log("มีสินค้าทั้งหมด " + this.lineItems.length + " รายการ");
    for (let i = 0; i < this.lineItems.length; i++) {
      console.log("รายการที่ : " + (1 + i) + this.lineItems[i].getDetail());
    }
    console.log("ราคารวม : " + this.calcTotal());
    console.log("----------------------------");
  }
  /* comment new! */
  calcTotal() {
    let total = 0;
    for (let i = 0; i < this.lineItems.length; i++) {
      total += this.lineItems[i].quantity * this.lineItems[i].price;
    }
    return total;
  }
}

/* --------------- Order --------------- */
class Order {
  payments = null;
  lineItems = [];
  total = 0;
  shipped = "";
  constructor(number, ordered, ship_to, status) {
    this.number = number;
    this.ordered = ordered;
    this.ship_to = ship_to;
    this.status = status;
  }
  setPayment(payment) {
    this.payment = payment;
  }
  addLineItem(lineItem) {
    this.lineItems.push(lineItem);
  }
  setTotal() {
    let total = 0;
    for (let i = 0; i < this.lineItems.length; i++) {
      total += this.lineItems[i].quantity * this.lineItems[i].price;
    }
    this.total = total;
  }
  setShippedDate(date) {
    this.shipped = date;
  }

  /* comment new! */
  printDetail() {
    for (let i = 0; i < this.lineItems.length; i++) {
      console.log("รายการที่ : " + (1 + i) + this.lineItems[i].getDetail());
    }
    this.setTotal();
    console.log("ราคารวม : " + this.total + " บาท");
    console.log(
      "ชำระวันที่ : " +
        this.payment.paid +
        " เป็นจำนวนเงิน " +
        this.payment.total +
        " บาท "
    );
  }
}
/* --------------- LineItem --------------- */
class LineItem {
  product = null;
  constructor(quantity, price) {
    this.quantity = quantity;
    this.price = price;
  }
  setProduct(product) {
    this.product = product;
  }
  /* new comment */
  getDetail() {
    return (
      " " +
      this.product.name +
      " จำนวน " +
      this.quantity +
      " ราคา " +
      this.price +
      " บาท"
    );
  }
  calcSubTotal() {
    return this.quantity * this.price;
  }
}

/* --------------- Product --------------- */
class Product {
  constructor(id, name, supplier) {
    this.id = id;
    this.name = name;
    this.supplier = supplier;
  }
}

/* --------------- Payment --------------- */
class Payment {
  constructor(id, paid, total, details) {
    this.id = id;
    this.paid = paid;
    this.total = total;
    this.details = details;
  }
}

/* --------------- ( UserState, OrderStatus ) => Enumeration (enum) --------------- */
class UserState {
  static NEW = new UserState("new");
  static ACTIVE = new UserState("active");
  static BLOCKED = new UserState("blocked");
  static BANNED = new UserState("banned");
  constructor(name) {
    this.name = name;
  }
}

class OrderStatus {
  static NEW = new OrderStatus("new");
  static HOLD = new OrderStatus("hold");
  static SHIPPED = new OrderStatus("shipped");
  static DELIVERED = new OrderStatus("delivered");
  static CLOSED = new OrderStatus("closed");

  constructor(name) {
    this.name = name;
  }
}

/* --------------- Main --------------- */
const main = () => {
  // สร้างผู้ใช้
  const user1 = new WebUser("user1", "123456", UserState.NEW);
  const user2 = new WebUser("user2", "123456", UserState.ACTIVE);

  // สร้างบัญชีผู้ใช้
  const account1 = new Account("Kay", "BanKay", false, "05/01/2567", "");

  // สร้างสินค้า
  const Product1 = new Product("1", "ปากกา", "Thirayut");
  const Product2 = new Product("2", "ดินสอ", "Burit");
  const Product3 = new Product("3", "ยางลบ", "Punsan");
  const Product4 = new Product("4", "ไม้บรรทัด", "Sakkarin");
  const Product5 = new Product("5", "กล่องดินสอ", "Patiphat");

  // สร้างคำสั่งซื้อ
  const order1 = new Order("01", "09/01/2567", "NEWYORK", OrderStatus.CLOSED);
  const order2 = new Order("02", "10/01/2567", "LONDON", OrderStatus.CLOSED);

  // สร้างรายการสินค้า
  const lineItem1 = new LineItem(2, 10);
  const lineItem2 = new LineItem(3, 30);
  const lineItem3 = new LineItem(1, 10);
  const lineItem4 = new LineItem(2, 20);
  const lineItem5 = new LineItem(2, 20);

  // เพิ่มสินค้าในรายการสั่งซื้อ
  lineItem1.setProduct(Product1);
  lineItem2.setProduct(Product2);
  lineItem3.setProduct(Product3);
  lineItem4.setProduct(Product4);
  lineItem5.setProduct(Product5);

  // เพิ่มรายการสินค้าในออเดอร์
  order1.addLineItem(lineItem1);
  order1.addLineItem(lineItem5);
  order1.addLineItem(lineItem2);
  order2.addLineItem(lineItem3);
  order2.addLineItem(lineItem4);

  // กำหนดราคารวมของคำสั่งซื้อ
  order1.setTotal();
  order2.setTotal();

  // กำหนดวันที่จัดส่งของคำสั่ง
  order1.setShippedDate("13/01/2567");

  // สร้างรายการชำระเงิน
  const payment1 = new Payment("p01", "22/01/2567", order1.total, "ส่งที่หอ");
  const payment2 = new Payment("p02", "22/01/2567", order2.total, "ส่งที่หอ");

  // เพิ่มคำสั่งซื้อในบัญชีผู้ใช้
  account1.addOrders(order1);
  account1.addOrders(order2);

  // กำหนดการชำระเงินในคำสั่งซื้อ
  order1.setPayment(payment1);
  order2.setPayment(payment2);

  // สร้างตะกร้าสินค้า
  const shoppingCart1 = new ShoppingCart("20/02/2567");
  shoppingCart1.addLineItem(lineItem1);
  shoppingCart1.addLineItem(lineItem2);

  // กำหนดตะกร้าสินค้าให้กับบัญชีผู้ใช้
  account1.setShoppingCart(shoppingCart1);

  // แสดงข้อมูลผู้ใช้
  console.log("ชื่อ : " + account1.id);
  console.log("จำนวนคำสั่งซื้อ : " + account1.orders.length);

  // แสดงรายละเอียดของคำสั่งซื้อและสินค้าในตะกร้า
  account1.printOrderDetail();
  account1.shoppingCart.printShoppingCart();
  //console.log("------------------------------------------");
}

main();