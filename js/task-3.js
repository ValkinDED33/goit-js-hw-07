class StringBuilder {
  #value; // Оголошення приватної властивості

  constructor(initialValue) {
    this.#value = initialValue; // Ініціалізація приватної властивості
  }

  getValue() {
    return this.#value; // Повернення значення приватної властивості
  }

  padEnd(str) {
    this.#value += str; // Додавання рядка в кінець значення
  }

  padStart(str) {
    this.#value = str + this.#value; // Додавання рядка на початок значення
  }

  padBoth(str) {
    this.padStart(str); // Виклик padStart
    this.padEnd(str); // Виклик padEnd
  }
}

// Код для перевірки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
