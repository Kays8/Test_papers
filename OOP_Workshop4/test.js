class Customer {
  name = "";
  address = "";
  phone = "";
  email = "";
  accounts = [];
  atms = [];
  constructor(name, address, phone, email) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }
  verify(name, phone, email) {
    return this.name === name && this.phone === phone && this.email === email;
  }
  getAccount() {
    return this.accounts;
  }
  createAccount(account) {
    this.accounts.push(account);
  }
  toString() {
    return `ชื่อ: ${this.name}\nที่อยู่: ${this.address}\nเบอร์โทร: ${this.phone
      }\nอีเมลล์: ${this.email} \n\t${this.getAccountDetails()}`;
  }

  getAccountDetails() {
    const accounts = this.getAccount();
    const accountDetails = accounts.map((account) => {
      return `[ประเภทบัญชี: ${account.constructor.name} รหัสบัญชี: ${account.accountNumber} ยอดเงินคงเหลือ: ${account.balance}]
       `;
    });
    return accountDetails;
  }
}
class Account {
  accountNumber = "";
  balance = 0;
  transactions = [];
  customer = null;
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`[ ทำการฝากเงินเข้าไปที่บัญชี ${this.accountNumber} จำนวน ${amount} บาท  ยอดเงินคงเหลือ ${this.balance} บาท ]`);

  }
  withDraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(
        `[ ${this.accountNumber} ทำการถอนเงินจำนวน ${amount} บาท ยอดเงินคงเหลือ ${this.balance} บาท ]`
      );
    } else {
      console.log("ยอดเงินไม่เพียงพอ ไม่สามารถถอนได้");
    }
  }
  createTransaction(
    transactionId,
    transactionType,
    amount,
    transactionDate,
    status
  ) {
    console.log(
      `สร้างธุรกรรม ${transactionId} ธุรกรรมประเภท ${transactionType}`
    );
    const transaction = new Transaction(
      transactionId,
      transactionType,
      amount,
      transactionDate,
      status
    );
    this.transactions.push(transaction);
  }
  getTransaction() {
    return this.transactions;
  }
  getBalance() {
    return this.balance;
  }
  getAccountType() {
    return this.accountType;
  }
  setAccountType(accountType) {
    this.accountType = accountType;
  }
  getCustomer() {
    return this.customer;
  }
  setCustomer(customer) {
    this.customer = customer;
  }
}

class CurrentAccount extends Account {
  overdraftLimit = 0;
  overdraftInterest = 0;
  transactions = [];
  constructor(accountNumber, balance, overdraftLimit, overdraftInterest) {
    super(accountNumber, balance);
    this.overdraftLimit = overdraftLimit;
    this.overdraftInterest = overdraftInterest;
  }
  calculateInterest() {
    if (this.balance < 0) {
      const interest = this.balance * this.overdraftInterest;
      console.log(`ได้รับดอกเบี้ย: ${interest} บาท`);
      return interest;
    } else {
      console.log(`ไม่ได้รับดอกเบี้ยเนื่องจากไม่มึยอดเงินคงเหลือ`);
      return 0;
    }
  }
  getOverdraftLimit() {
    return this.overdraftLimit;
  }

  setOverdraftLimit(overdraftLimit) {
    this.overdraftLimit = overdraftLimit;
  }
}

class SavingsAccount extends Account {
  interestRate = 0;
  constructor(accountNumber, balance, interestRate) {
    super(accountNumber, balance);
    this.interestRate = interestRate;
  }
  calculateInterest() {
    const interest = this.balance * this.interestRate;
    console.log(`ได้รับดอกเบี้ย: ${interest} บาท`);
    return interest;
  }

  getInterestRate() {
    return this.interestRate;
  }

  setInterestRate(interestRate) {
    this.interestRate = interestRate;
  }
}
class Bank {
  name = "";
  address = "";
  code = "";
  atms = [];
  accounts = [];
  constructor(name, address, code) {
    this.name = name;
    this.address = address;
    this.code = code;
  }
  manage() {
    console.log("การจัดการของธนาคาร");
  }

  maintain() {
    console.log("ดูแลระบบธนาคาร");
  }

  verify() {
    console.log("ตรวจสอบธนาคาร");
  }

  openAccount() {
    console.log("เปิดบัญชี");
  }

  closeAccount() {
    console.log("ปิดบัญชี");
  }
  createTransaction(
    transactionId,
    transactionType,
    amount,
    transactionDate,
    status
  ) {
    console.log(`สร้างธุรกรรม ${transactionId} ประเภท ${transactionType}`);
    const transaction = new Transaction(
      transactionId,
      transactionType,
      amount,
      transactionDate,
      status
    );
    this.transactions.push(transaction);
  }
  createCustomer(name, address, phone, email) {
    const customer = Customer(name, address, phone, email);
    return customer;
  }
  createATM(location, managedBy) {
    const atm = new ATM(location, managedBy);
    return atm;
  }
  createAccount(accountType, accountNumber, balance) {
    let account;
    if (accountType == "CurrentAccount") {
      account = new CurrentAccount(accountNumber, balance, 1000, 0.2);
      return account;
    } else {
      account = new SavingsAccount(accountNumber, balance, 0.3);
      return account;
    }
  }
}

class ATM {
  location = "";
  managedBy = "";
  constructor(location, managedBy) {
    this.location = location;
    this.managedBy = managedBy;
  }
  identify() { }

  checkBalance(account) {
    console.log(`ตรวจสอบเงินคงเหลือ ${account.accountNumber}`);
    return account.getBalance();
  }

  withDraw(account, amount) {
    console.log(`ถอนเงิน ${amount} บาท จากบัญชี ${account.accountNumber}`);
    account.withDraw(amount);
  }

  deposit(account, amount) {
    console.log(`ฝากเงิน ${amount} บาท ไปยังบัญชี ${account.accountNumber}`);
    account.deposit(amount);
  }
  changePin() { }
  transfer(account1, account2, amount) {
    console.log(`โอนเงินจำนวน ${amount} บาท จากบัญชี ${account1.accountNumber} ไปยังบัญชี ${account2.accountNumber}`);
    account1.withDraw(amount)
    account2.deposit(amount);
  }
  verify() { }
}

class Transaction {
  transactionId = "";
  transactionType = "";
  amount = 0;
  transactionDate = "";
  status = "";
  constructor(transactionId, transactionType, amount, transactionDate, status) {
    this.transactionId = transactionId;
    this.transactionType = transactionType;
    this.amount = amount;
    this.transactionDate = transactionDate;
    this.status = status;
  }
  getTransactionId() {
    return this.transactionId;
  }
  getTransactionType() {
    return this.transactionType;
  }
  getAmount() {
    return this.amount;
  }
  getTransactionDate() {
    return this.transactionDate;
  }
  getStatus() {
    return this.status;
  }
  setStatus(status) {
    this.status = status;
  }
  setTransactionType(transactionType) {
    this.transactionType = transactionType;
  }
  setAmount(amount) {
    this.amount = amount;
  }
  setTransactionDate(transactionDate) {
    this.transactionDate = transactionDate;
  }
}

const main = () => {
  const customer1 = new Customer(
    "Bank",
    "ban bank",
    "0123456789",
    "Bank@email"
  );
  const bank = new Bank("SeNpru", "Npru", "12345");
  const account1 = bank.createAccount("CurrentAccount", "AC01", 10000);
  const account2 = bank.createAccount("SavingAccount", "AC02", 10000);
  const atm1 = new ATM("Ban Bank", bank.name);

  customer1.createAccount(account1);
  customer1.createAccount(account2);
  account1.setCustomer(customer1.name);
  account2.setCustomer(customer1.name);
  console.log(customer1.toString());

  atm1.transfer(account1, account2, 1000)



};

main();