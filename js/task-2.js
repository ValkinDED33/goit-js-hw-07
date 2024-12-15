class Storage {
  #items; // Оголошення приватної властивості

  constructor(initialItems) {
    this.#items = initialItems; // Ініціалізація приватної властивості
  }

  getItems() {
    return this.#items; // Повернення приватної властивості items
  }

  addItem(newItem) {
    this.#items.push(newItem); // Додавання нового товару
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove); // Видалення товару
  }
}

// Код для перевірки
const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem('Scaner');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
