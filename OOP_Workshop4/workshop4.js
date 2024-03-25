/**Class Customer*/
class Customer {
  name = "";
  address = "";
  phone = "";
  email = "";
  accounts = [];
  constructor(name, address, phone, email, accountType) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.accountType = accountType;
  }
  verify(name) {
    return this.name === name;
  }
  addAccount(account) {
    this.accounts.push(account);
  }
  getAccount() {
    return this.accounts;
  }
  createAccount(bank, accountType) {
    return bank.createAccount(accountType);
  }
  toString() {
    return `Customer: [${this.name}, ${this.address}, ${this.phone}, ${this.email}, ${this.accountType}]`;
  }
}

/**Class Account*/
class Account {
  accountNumber = "";
  balance = 0;
  accountType = "";
  transactions = [];
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log("ฝากเงินเข้าบัญชี" + " " + amount);
      return this.balance;
    } else {
      console.log(`ไม่สามารถฝากเงินได้`);
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      console.log("ถอนเงินจากบัญชี" + " " + amount);
      this.balance -= amount;
      return this.balance;
    } else {
      console.log(`ไม่สามารถถอนเงินได้`);
    }
  }
  createTransaction(
    transactionId,
    transactionType,
    amount,
    transactionDate,
    status
  ) {
    const trans1 = new Transaction(
      transactionId,
      transactionType,
      amount,
      transactionDate,
      status
    );
    return trans1;
  }
  getTransaction() {
    return this.transactions;
  }
  getBalance() {
    return this.balance;
  }

  getAccountType() {
    // I'll come back to fix
    return this.accountType;
  }
  getCustomer() {
    return this.customer;
  }
  setCustomer(customer) {
    this.customer = customer;
  }
}

/**Class Class Bank*/
class Bank {
  name = "";
  address = "";
  code = "";

  constructor(name, address, code) {
    this.name = name;
    this.address = address;
    this.code = code;
    this.ATMs = [];
    this.accounts = null;
  }
  manage() {
    return true;
  }
  naintain() {
    return true;
  }
  verify(name) {
    this.name === name;
  }
  openAccount(account) {
    this.accounts.push(account); // เพิ่มบัญชีลงในรายการบัญชีของธนาคาร
  }
  closeAccount() {
    return true;
  }
  createTransaction(
    transactionId,
    transactionType,
    amount,
    transactionDate,
    status
  ) {
    const transaction = new Transaction(
      transactionId,
      transactionType,
      amount,
      transactionDate,
      status
    );
    return transaction;
  }
  createCustomer(name, address, phone, email) {
    const cus = new Customer(name, address, phone, email);
    return cus;
  }
  createATM(location, managedBy) {
    const atm = new ATM(location, managedBy);
    return atm;
  }
  createAccount(accountType) {
    let account;
    if (accountType === "CurrentAccount") {
      account = new CurrentAccount("Current01", 0, 20000, 0.3);
      return account;
    } else if (accountType === "SavingsAccount") {
      account = new SavingsAccount("Savings01", 0, 20000, 0.5);
      return account;
    }
  }
}

/**Class CurrentAccount*/
class CurrentAccount extends Account {
  overdraftLimit = 0;
  overdraftInterest = 0;
  constructor(accountNumber, balance, overdraftLimit, overdraftInterest) {
    super(accountNumber, balance);
    this.overdraftLimit = overdraftLimit;
    this.overdraftInterest = overdraftInterest;
  }
  calculateInterest() {
    return this.balance * this.overdraftInterest;
  }
  getOverdraftLimit() {
    return this.overdraftLimit;
  }
  setOverdraftLimit(amount) {
    this.overdraftLimit = amount;
  }
}

/**Class SavingsAccount*/
class SavingsAccount extends Account {
  interestRate = 0;
  constructor(accountNumber, balance, interestRate) {
    super(accountNumber, balance);
    this.interestRate = interestRate;
  }
  calculateInterest() {
    return this.balance * this.interestRate;
  }
  getInterestRate() {
    return this.interestRate;
  }
  setInterestRate(rate) {
    this.interestRate = rate;
  }
}

/**Class Transaction*/
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
  setStatus(Status) {
    this.status = Status;
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
  toString() {
    return `Transaction: ${this.transactionId}, ${this.transactionType}, ${this.amount}, ${this.transactionDate}, ${this.status}`;
  }
}


/** Class ATM*/
class ATM {
  location = "";
  managedBy = "";
  constructor(location, managedBy) {
    this.location = location;
    this.managedBy = managedBy;
  }
  identify(name) {
    return this.name === name;
  }
  checkBalance() {
    return this.balance;
  }
  withdraw(amount) {
    if (amount > 0 && amount >= this.balance) {
      this.balance -= amount;
      return this.balance;
    } else {
      console.log(`ไม่สามารถถอนเงินได้`);
    }
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return this.balance;
    } else {
      console.log(`ไม่สามารถฝากเงินได้`);
    }
  }
  changePin(phone) {
    return this.phone === phone;
  }
  transfer() {
    return true;
  }
  verify(name) {
    this.name === name;
  }
  toString() {
    return `ATM Location: ${this.location}, ManagedBy: ${this.managedBy}`
  }
}

/**Enum accountType */
class AccountType {
  static CURRENT = "CurrentAccount";
  static SAVIGNS = "SavingsAccount";
  constructor(name) {
    this.name = name;
  }
}


/**Enum Status */
class Status {
  static SUCC = "Successfully!";
  static FAIL = "Failed!";
  constructor(name) {
    this.name = name;
  }
}


/**Main function */
const main = () => {

  // Create Bank
  const firstBank = new Bank("SE-Bank", "NPRU", "101");
  // Create Customer
  const cus1 = new Customer("Kay", "KayHouse", "088-888-8888", "k@mail.com", AccountType.SAVIGNS);
  console.log(cus1.toString());

  // Create Account
  const account1 = firstBank.createAccount("CurrentAccount");
  const account2 = firstBank.createAccount("SavingsAccount");

  // Customer select to AccountType
  cus1.addAccount(account2);

  // Customer Deposit
  account2.deposit(500);
  console.log("Balance Total:" + " " + account2.getBalance());
  // Customer Withdraw
  account2.withdraw(100);
  console.log("Balance Total:" + " " + account2.getBalance());

  // Create a transaction
  const transaction1 = firstBank.createTransaction("Trans1", "Withdrawal Transactions", 100, "03/03/2024", Status.SUCC
  );

  console.log(transaction1.toString());

  // Create an ATM
  const firstAtm = firstBank.createATM("NAKHON PATHOM", cus1.name);

  console.log(firstAtm.toString());

};

main();
