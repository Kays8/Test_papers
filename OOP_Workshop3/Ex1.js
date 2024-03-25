/* ------ Author ------ */
class Author {
  name = "";
  email = "";
  gender = "";
  constructor(name, email, gender) {
    this.name = name;
    this.email = email;
    this.gender = gender;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  setEmail(email) {
    this.email = email;
  }
  toString() {
    return `Author [name = ${this.name}, email = ${this.email}, gender = ${this.gender}]`;
  }
}

/* ------ Book ------ */
class Book {
  name = "";
  authors = [];
  price = 0;
  qty = 0;
  constructor(name, authors, price, qty = 0) {
    this.name = name;
    this.authors = authors;
    this.price = price;
    this.qty = qty;
  }
  getName() {
    return this.name;
  }
  getAuthors() {
    return this.authors;
  }
  getPrice() {
    return this.price;
  }
  getPrice(price) {
    this.price = price;
  }
  getQty() {
    return this.qty;
  }
  setQty(qty) {
    this.qty = qty;
  }
  toString() {
    let authorDetails = "";
    for (let i = 0; i < this.authors.length; i++) {
      authorDetails += this.authors[i] + `, gender = ${this.authors[i]}]`;
      if (i < this.authors.length - 1) {
        authorDetails += ", ";
      }
    }
    return `Book [name = ${this.name}, authors = {${authorDetails}}, price = ${this.price}, qty = ${this.qty}]`;
  }
  getAuthorNames() {
    let authorNames = [];
    for (let i = 0; i < this.authors.length; i++) {
      authorNames += this.authors[i].getName();
      if (i < this.authors.length - 1) {
        authorNames += ", ";
      }
    }

    return `"${authorNames}"`;
  }
}

/* ------ Main ------ */
const main = () => {
  const author1 = new Author("Kay", "Kay@example.com", "M");
  const author2 = new Author("Vick", "Vick@example.com", "F");

  console.log(author1.toString());
  console.log(author2.toString());

  const book1 = new Book(
    "JavaScript Programming",
    [author1, author2],
    29.99,
    3
  );
  const book2 = new Book("Python Programming", [author2], 39.99);

  console.log(book1.toString());
  console.log(book2.toString());

  console.log(book1.getAuthorNames());
};
main();
