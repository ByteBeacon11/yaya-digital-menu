const menuData = [
  {
    id: 1,
    name: 'Samosa',
    desc: 'Crispy pastry filled with spiced potatoes and peas',
    price: 4.50,
    category: 'appetizers'
  },
  {
    id: 2,
    name: 'Spring Rolls',
    desc: 'Lightly fried rolls stuffed with vegetables and glass noodles',
    price: 5.00,
    category: 'appetizers'
  },
  {
    id: 3,
    name: 'Spicy Wings',
    desc: 'Chicken wings tossed in Yaya\'s signature hot sauce',
    price: 6.50,
    category: 'appetizers'
  },
  {
    id: 4,
    name: 'Grilled Chicken',
    desc: 'Marinated chicken breast grilled to perfection, served with rice',
    price: 12.00,
    category: 'mains'
  },
  {
    id: 5,
    name: 'Beef Stew',
    desc: 'Slow-cooked tender beef in rich aromatic sauce with injera',
    price: 14.00,
    category: 'mains'
  },
  {
    id: 6,
    name: 'Vegetarian Platter',
    desc: 'Assorted seasonal vegetables with your choice of starch',
    price: 10.50,
    category: 'mains'
  },
  {
    id: 7,
    name: 'Pasta Alfredo',
    desc: 'Creamy white sauce pasta with parmesan and herbs',
    price: 11.00,
    category: 'mains'
  },
  {
    id: 8,
    name: 'Fresh Juice',
    desc: 'Seasonal fresh fruit juice - mango, orange, or mix',
    price: 3.50,
    category: 'drinks'
  },
  {
    id: 9,
    name: 'Ethiopian Coffee',
    desc: 'Traditional coffee ceremony style, rich and aromatic',
    price: 2.50,
    category: 'drinks'
  },
  {
    id: 10,
    name: 'Smoothie',
    desc: 'Creamy blended fruit smoothie with yogurt',
    price: 4.00,
    category: 'drinks'
  },
  {
    id: 11,
    name: 'Soda',
    desc: 'Choice of Coca-Cola, Sprite, Fanta, or Pepsi',
    price: 1.50,
    category: 'drinks'
  },
  {
    id: 12,
    name: 'Tiramisu',
    desc: 'Classic Italian coffee-flavored layered dessert',
    price: 5.50,
    category: 'desserts'
  },
  {
    id: 13,
    name: 'Cheesecake',
    desc: 'Creamy New York style cheesecake with berry topping',
    price: 5.00,
    category: 'desserts'
  },
  {
    id: 14,
    name: 'Fruit Salad',
    desc: 'Fresh seasonal fruits drizzled with honey and lime',
    price: 4.50,
    category: 'desserts'
  }
];

const menuGrid = document.getElementById('menuGrid');
const categoryBtns = document.querySelectorAll('.cat-btn');

function renderMenu(category = 'all') {
  const filtered = category === 'all'
    ? menuData
    : menuData.filter(item => item.category === category);

  menuGrid.innerHTML = filtered.map(item => `
    <div class="menu-item">
      <div class="item-header">
        <span class="item-name">${item.name}</span>
        <span class="item-price">$${item.price.toFixed(2)}</span>
      </div>
      <p class="item-desc">${item.desc}</p>
      <span class="item-category">${item.category}</span>
    </div>
  `).join('');
}

categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(btn.dataset.category);
  });
});

renderMenu();

const currentUrl = window.location.href;
const qrContainer = document.getElementById('qrCode');

if (typeof QRCode !== 'undefined') {
  new QRCode(qrContainer, {
    text: currentUrl,
    width: 180,
    height: 180
  });
} else {
  qrContainer.innerHTML = '<p style="color:#6b5a4a;">QR code will appear here once deployed.</p>';
}
