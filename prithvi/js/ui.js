export function createRestaurantCard(restaurant) {
  return `
    <div class="restaurant-card">
      <div class="restaurant-badge">${restaurant.deliveryTime}</div>
      <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
      <div class="restaurant-info">
        <h3 class="restaurant-name">${restaurant.name}</h3>
        <p class="restaurant-cuisine">${restaurant.cuisine}</p>
        <div class="restaurant-footer">
          <p class="restaurant-rating">★ ${restaurant.rating}</p>
          <button class="view-menu-btn">View Menu</button>
        </div>
      </div>
    </div>
  `;
}

export function createMenuItem(item) {
  return `
    <div class="menu-item">
      <div class="spice-level ${item.spiceLevel.toLowerCase()}">${item.spiceLevel}</div>
      <img src="${item.image}" alt="${item.name}" class="menu-image">
      <div class="menu-info">
        <div class="menu-header">
          <h3 class="menu-name">${item.name}</h3>
          <span class="menu-category">${item.category}</span>
        </div>
        <p class="menu-description">${item.description}</p>
        <div class="menu-footer">
          <p class="menu-price">₹${item.price}</p>
          <button class="add-to-cart" onclick="window.addToCart(${JSON.stringify(item)})">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

export function createCartItem(item) {
  return `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item-image">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p class="cart-item-price">₹${item.price}</p>
      </div>
      <div class="cart-item-controls">
        <button onclick="window.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
        <span>${item.quantity}</span>
        <button onclick="window.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
      </div>
    </div>
  `;
}