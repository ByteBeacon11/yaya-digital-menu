const ETB_RATE = 130;
const formatETB = (usd) => (usd * ETB_RATE).toFixed(0);

const menuData = [
  { id: 1, name: 'Doro Wat', desc: 'Spicy chicken stew simmered with berbere spice and hard-boiled eggs, served with injera', price: 14.00, section: 'ethiopian', type: 'non-fasting' },
  { id: 2, name: 'Beef Tibs', desc: 'Sautéed cubed beef with onions, peppers, and rosemary', price: 15.00, section: 'ethiopian', type: 'non-fasting' },
  { id: 3, name: 'Kitfo', desc: 'Minced raw beef seasoned with mitmita and clarified butter', price: 16.00, section: 'ethiopian', type: 'non-fasting' },
  { id: 4, name: 'Shiro Wat', desc: 'Creamy chickpea and lentil stew simmered with garlic and berbere', price: 9.00, section: 'ethiopian', type: 'fasting' },
  { id: 5, name: 'Misir Wat', desc: 'Red lentil stew cooked in spicy berbere sauce', price: 8.50, section: 'ethiopian', type: 'fasting' },
  { id: 6, name: 'Gomen', desc: 'Sautéed collard greens with garlic, ginger, and onions', price: 8.00, section: 'ethiopian', type: 'fasting' },
  { id: 7, name: 'Burger & Fries', desc: 'Juicy beef patty with lettuce, tomato, and crispy fries', price: 11.00, section: 'international', type: 'non-fasting' },
  { id: 8, name: 'Grilled Chicken', desc: 'Marinated chicken breast grilled to perfection, served with rice', price: 12.00, section: 'international', type: 'non-fasting' },
  { id: 9, name: 'Pasta Alfredo', desc: 'Creamy white sauce pasta with parmesan and herbs', price: 11.00, section: 'international', type: 'non-fasting' },
  { id: 10, name: 'Spicy Wings', desc: 'Chicken wings tossed in Yaya\'s signature hot sauce', price: 6.50, section: 'international', type: 'non-fasting' },
  { id: 11, name: 'Samosa', desc: 'Crispy pastry filled with spiced potatoes and peas', price: 4.50, section: 'international', type: 'fasting' },
  { id: 12, name: 'Spring Rolls', desc: 'Lightly fried rolls stuffed with vegetables and glass noodles', price: 5.00, section: 'international', type: 'fasting' },
  { id: 13, name: 'Veggie Pizza', desc: 'Thin-crust pizza topped with fresh seasonal vegetables and mozzarella', price: 10.00, section: 'international', type: 'fasting' },
  { id: 14, name: 'Fruit Salad', desc: 'Fresh seasonal fruits drizzled with honey and lime', price: 4.50, section: 'international', type: 'fasting' },
  { id: 15, name: 'Macchiato', desc: 'Espresso with a touch of steamed milk', price: 2.50, section: 'hot-drinks', type: null },
  { id: 16, name: 'Ethiopian Coffee', desc: 'Traditional coffee ceremony style, rich and aromatic', price: 2.50, section: 'hot-drinks', type: null },
  { id: 17, name: 'Spiced Tea', desc: 'Aromatic black tea with cardamom, cinnamon, and cloves', price: 2.00, section: 'hot-drinks', type: null },
  { id: 18, name: 'Tea', desc: 'Premium black or herbal tea', price: 1.50, section: 'hot-drinks', type: null },
  { id: 19, name: 'Fresh Juice', desc: 'Seasonal fresh fruit juice – mango, orange, or mix', price: 3.50, section: 'cold-drinks', type: null },
  { id: 20, name: 'Smoothie', desc: 'Creamy blended fruit smoothie with yogurt', price: 4.00, section: 'cold-drinks', type: null },
  { id: 21, name: 'Soda', desc: 'Choice of Coca-Cola, Sprite, Fanta, or Pepsi', price: 1.50, section: 'cold-drinks', type: null },
  { id: 22, name: 'Bottled Water', desc: 'Pure, refreshing bottled water', price: 1.00, section: 'cold-drinks', type: null }
];

const sectionLabels = {
  'all': 'All Items',
  'ethiopian': 'Ethiopian Foods',
  'international': 'Outside Ethiopia',
  'hot-drinks': 'Hot Drinks',
  'cold-drinks': 'Drinks & Soft Drinks'
};

const menuGrid = document.getElementById('menuGrid');
const catBtns = document.querySelectorAll('.cat-btn');
const subNav = document.getElementById('subNav');
const subBtns = document.querySelectorAll('.sub-btn');

let currentSection = 'all';
let currentType = 'all';

function renderMenu() {
  let items = currentSection === 'all'
    ? menuData
    : menuData.filter(item => item.section === currentSection);

  if (currentType !== 'all') {
    items = items.filter(item => item.type === currentType);
  }

  const showSectionHeaders = currentSection === 'all';

  let html = '';
  if (showSectionHeaders) {
    const sections = ['ethiopian', 'international', 'hot-drinks', 'cold-drinks'];
    sections.forEach(section => {
      const sectionItems = items.filter(item => item.section === section);
      if (sectionItems.length > 0) {
        html += `<h2 class="section-label">${sectionLabels[section]}</h2>`;
        html += renderItems(sectionItems);
      }
    });
  } else {
    html = renderItems(items);
  }

  menuGrid.innerHTML = html;
}

function renderItems(items) {
  return items.map(item => {
    const typeLabel = item.type ? `<span class="item-type ${item.type}">${item.type === 'fasting' ? 'ጾም' : 'ፆመ አፍታ'}</span>` : '';
    return `
    <div class="menu-item">
      <div class="item-header">
        <span class="item-name">${item.name}</span>
        <span class="item-price">$${item.price.toFixed(2)}
          <span class="item-price-etb">${formatETB(item.price)} ETB</span>
        </span>
      </div>
      <p class="item-desc">${item.desc}</p>
      ${typeLabel}
    </div>
  `}).join('');
}

catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentSection = btn.dataset.section;
    currentType = 'all';
    subBtns.forEach(b => b.classList.remove('active'));
    subBtns[0].classList.add('active');
    subNav.style.display = (currentSection === 'ethiopian' || currentSection === 'international') ? 'block' : 'none';
    renderMenu();
  });
});

subBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    subBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentType = btn.dataset.type;
    renderMenu();
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
