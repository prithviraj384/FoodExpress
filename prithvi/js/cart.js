export class Cart {
  constructor() {
    this.items = [];
    this.listeners = [];
  }

  addItem(item) {
    const existingItem = this.items.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }
    this.notify();
  }

  removeItem(itemId) {
    this.items = this.items.filter(item => item.id !== itemId);
    this.notify();
  }

  updateQuantity(itemId, quantity) {
    const item = this.items.find(i => i.id === itemId);
    if (item) {
      item.quantity = Math.max(0, quantity);
      if (item.quantity === 0) {
        this.removeItem(itemId);
      }
      this.notify();
    }
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getTotalItems() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  subscribe(callback) {
    this.listeners.push(callback);
  }

  notify() {
    this.listeners.forEach(callback => callback(this.items));
  }
}