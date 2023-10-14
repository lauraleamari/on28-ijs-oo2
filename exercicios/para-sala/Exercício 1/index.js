class InvoiceItem {
  #id;
  #description;
  #quantity;
  #unitPrice;

  constructor(id, description, quantity, unitPrice) {
    this.#id = id;
    this.#description = description;
    this.#quantity = quantity;
    this.#unitPrice = unitPrice;
  }

  get id(){
    return this.#id
  }

  get description(){
    return this.#description
  }

  get quantity(){
    return this.#quantity
  }

  set quantity(newQuantity) {
    this.#quantity = newQuantity
  }

  get unitPrice(){
    this.#unitPrice
  }

  set unitPrice(newUnitPrice){
    this.#unitPrice = newUnitPrice
  }

  get total(){
    return this.#unitPrice * this.#quantity
  }

  InvoiceItem() {
    return `id: ${this.#id}, description: ${this.#description}, quantity: ${this.#quantity}, unitPricec: ${this.#unitPrice}`;
  }

}

const carrinho1 = new InvoiceItem('1213233', 'computador', 10, 1999.99)
console.log(carrinho1)
console.log(carrinho1.id)
console.log(carrinho1.description)
console.log(carrinho1.total)
console.log(carrinho1.InvoiceItem());