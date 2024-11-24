import { restaurants, menuItems } from './js/data.js';
import { Cart } from './js/cart.js';
import { createRestaurantCard, createMenuItem, createCartItem } from './js/ui.js';

// Initialize cart
const cart = new Cart();

// DOM Elements
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const restaurantGrid = document.getElementById('restaurantGrid');
const menuGrid = document.getElementById('menuGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');

// Cart functionality
function updateCartUI(items) {
  document.querySelector('.cart-count').textContent = cart.getTotalItems();
  cartItems.innerHTML = items.map(createCartItem).join('');
  cartTotal.textContent = `₹${cart.getTotal()}`;
}

cart.subscribe(updateCartUI);

// Search functionality
function handleSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  const filteredMenu = menuItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm) ||
    item.description.toLowerCase().includes(searchTerm)
  );
  menuGrid.innerHTML = filteredMenu.map(createMenuItem).join('');
}

// Filter functionality
function handleFilter(category) {
  filterButtons.forEach(btn => btn.classList.remove('active'));
  this.classList.add('active');
  
  const filteredMenu = category === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === category);
  
  menuGrid.innerHTML = filteredMenu.map(createMenuItem).join('');
}

// Event Listeners
cartIcon.addEventListener('click', () => cartModal.classList.toggle('active'));
searchInput.addEventListener('input', handleSearch);
filterButtons.forEach(btn => 
  btn.addEventListener('click', function() {
    handleFilter.call(this, this.dataset.category);
  })
);

// Initialize UI
restaurantGrid.innerHTML = restaurants.map(createRestaurantCard).join('');
menuGrid.innerHTML = menuItems.map(createMenuItem).join('');

// Make functions available globally
window.addToCart = item => cart.addItem(item);
window.updateQuantity = (itemId, quantity) => cart.updateQuantity(itemId, quantity);