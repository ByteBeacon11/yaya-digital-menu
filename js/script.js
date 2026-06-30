const ETB_RATE = 130;
const formatETB = (usd) => (usd * ETB_RATE).toFixed(0);

const menuData = [
  // ── Ethiopian – Non-Fasting ──
  { id: 1,  name: 'Doro Wat',     desc: 'Spicy chicken stew simmered with berbere spice and hard-boiled eggs, served with injera', price: 14.00, section: 'ethiopian', type: 'non-fasting' },
  { id: 2,  name: 'Sega Wat',     desc: 'Rich and flavorful beef stew slow-cooked in berbere sauce', price: 15.00, section: 'ethiopian', type: 'non-fasting' },
  { id: 3,  name: 'Bozena Shiro', desc: 'Savory shiro stew with tender pieces of beef', price: 13.00, section: 'ethiopian', type: 'non-fasting' },
  { id: 4,  name: 'Tibs',         desc: 'Sautéed meat with onions, peppers, and aromatic spices', price: 15.00, section: 'ethiopian', type: 'non-fasting' },
  { id: 5,  name: 'Teferesho',    desc: 'Traditional Ethiopian tripe dish prepared with spiced butter and herbs', price: 14.00, section: 'ethiopian', type: 'non-fasting' },
  { id: 6,  name: 'Kitfo',        desc: 'Minced raw beef seasoned with mitmita and clarified butter', price: 16.00, section: 'ethiopian', type: 'non-fasting' },

  // ── Ethiopian – Fasting ──
  { id: 7,  name: 'Shiro Wat',    desc: 'Creamy chickpea and lentil stew simmered with garlic and berbere', price: 9.00, section: 'ethiopian', type: 'fasting' },
  { id: 8,  name: 'Misir Wat',    desc: 'Red lentil stew cooked in spicy berbere sauce', price: 8.50, section: 'ethiopian', type: 'fasting' },
  { id: 9,  name: 'Gomen',        desc: 'Sautéed collard greens with garlic, ginger, and onions', price: 8.00, section: 'ethiopian', type: 'fasting' },
  { id: 10, name: 'Beyaynet',     desc: 'Assorted vegetarian platter with shiro, misir, gomen, and more', price: 12.00, section: 'ethiopian', type: 'fasting' },
  { id: 11, name: 'Pasta Besego', desc: 'Pasta tossed with seasoned minced meat sauce', price: 10.00, section: 'ethiopian', type: 'fasting' },
  { id: 12, name: 'Pasta Batikelt', desc: 'Pasta with fresh sautéed vegetables in light tomato sauce', price: 9.00, section: 'ethiopian', type: 'fasting' },
  { id: 13, name: 'Denech Wat',   desc: 'Hearty potato stew seasoned with turmeric and herbs', price: 8.50, section: 'ethiopian', type: 'fasting' },
  { id: 14, name: 'Ruz Besoya',   desc: 'Rice with flavorful meat sauce and aromatic spices', price: 10.00, section: 'ethiopian', type: 'fasting' },
  { id: 15, name: 'Tegabino',     desc: 'Traditional thick bean and grain stew, rich and filling', price: 9.50, section: 'ethiopian', type: 'fasting' },

  // ── International – Non-Fasting ──
  // Burgers
  { id: 16, name: 'Chicken Burger',          desc: 'Crispy chicken patty with lettuce, tomato, and mayo', price: 8.00, section: 'international', type: 'non-fasting', subsection: 'burgers' },
  { id: 17, name: 'Beef Burger',             desc: 'Classic beef patty with lettuce, tomato, and onions', price: 8.50, section: 'international', type: 'non-fasting', subsection: 'burgers' },
  { id: 18, name: 'Cheese Burger',           desc: 'Beef patty topped with melted cheddar cheese', price: 9.00, section: 'international', type: 'non-fasting', subsection: 'burgers' },
  { id: 19, name: 'Double Cheese Burger',    desc: 'Two beef patties with double cheddar cheese', price: 11.00, section: 'international', type: 'non-fasting', subsection: 'burgers' },
  { id: 20, name: "Yaya's Special Burger",   desc: 'Signature beef patty with caramelized onions, bacon, and special sauce', price: 12.00, section: 'international', type: 'non-fasting', subsection: 'burgers' },
  { id: 21, name: "Yaya's Double Special",   desc: 'Double the patty, double the cheese – our ultimate burger', price: 15.00, section: 'international', type: 'non-fasting', subsection: 'burgers' },

  // Pizzas
  { id: 22, name: 'Margherita Pizza',        desc: 'Classic tomato sauce, mozzarella, and fresh basil', price: 9.00, section: 'international', type: 'non-fasting', subsection: 'pizzas' },
  { id: 23, name: 'Chicken Pizza',           desc: 'Topped with grilled chicken, bell peppers, and mozzarella', price: 11.00, section: 'international', type: 'non-fasting', subsection: 'pizzas' },
  { id: 24, name: 'Beef Pizza',              desc: 'Seasoned beef with onions, olives, and melted cheese', price: 11.00, section: 'international', type: 'non-fasting', subsection: 'pizzas' },
  { id: 25, name: 'Tuna Pizza',              desc: 'Tuna, onions, olives, and mozzarella on crispy crust', price: 10.00, section: 'international', type: 'non-fasting', subsection: 'pizzas' },
  { id: 26, name: "Yaya's Special Pizza",    desc: 'Our signature pizza loaded with chicken, beef, veggies, and extra cheese', price: 14.00, section: 'international', type: 'non-fasting', subsection: 'pizzas' },

  // Chickens
  { id: 27, name: 'Chicken Mofo',            desc: 'Crispy fried chicken pieces with spicy dipping sauce', price: 9.00, section: 'international', type: 'non-fasting', subsection: 'chickens' },
  { id: 28, name: 'Grilled Chicken',         desc: 'Marinated chicken breast grilled to perfection, served with rice', price: 12.00, section: 'international', type: 'non-fasting', subsection: 'chickens' },
  { id: 29, name: 'Chicken Wings',           desc: 'Crispy wings tossed in Yaya\'s signature hot sauce', price: 7.00, section: 'international', type: 'non-fasting', subsection: 'chickens' },
  { id: 30, name: 'Chicken Rice',            desc: 'Tender chicken pieces stir-fried with seasoned rice and vegetables', price: 10.00, section: 'international', type: 'non-fasting', subsection: 'chickens' },
  { id: 31, name: "Yaya's Special Combo",    desc: 'Grilled chicken, wings, fries, and coleslaw – the full experience', price: 16.00, section: 'international', type: 'non-fasting', subsection: 'chickens' },

  // ── International – Fasting ──
  { id: 32, name: 'Samosa',       desc: 'Crispy pastry filled with spiced potatoes and peas', price: 4.50, section: 'international', type: 'fasting' },
  { id: 33, name: 'Spring Rolls', desc: 'Lightly fried rolls stuffed with vegetables and glass noodles', price: 5.00, section: 'international', type: 'fasting' },
  { id: 34, name: 'Veggie Pizza', desc: 'Thin-crust pizza topped with fresh seasonal vegetables and mozzarella', price: 10.00, section: 'international', type: 'fasting' },
  { id: 35, name: 'Fruit Salad',  desc: 'Fresh seasonal fruits drizzled with honey and lime', price: 4.50, section: 'international', type: 'fasting' },

  // ── Hot Drinks ──
  { id: 36, name: 'Macchiato',       desc: 'Espresso with a touch of steamed milk', price: 2.50, section: 'hot-drinks', type: null },
  { id: 37, name: 'Ethiopian Coffee', desc: 'Traditional coffee ceremony style, rich and aromatic', price: 2.50, section: 'hot-drinks', type: null },
  { id: 38, name: 'Spiced Tea',      desc: 'Aromatic black tea with cardamom, cinnamon, and cloves', price: 2.00, section: 'hot-drinks', type: null },
  { id: 39, name: 'Tea',             desc: 'Premium black or herbal tea', price: 1.50, section: 'hot-drinks', type: null },

  // ── Cold Drinks ──
  { id: 40, name: 'Fresh Juice',  desc: 'Seasonal fresh fruit juice – mango, orange, or mix', price: 3.50, section: 'cold-drinks', type: null },
  { id: 41, name: 'Smoothie',     desc: 'Creamy blended fruit smoothie with yogurt', price: 4.00, section: 'cold-drinks', type: null },
  { id: 42, name: 'Soda',         desc: 'Choice of Coca-Cola, Sprite, Fanta, or Pepsi', price: 1.50, section: 'cold-drinks', type: null },
  { id: 43, name: 'Bottled Water', desc: 'Pure, refreshing bottled water', price: 1.00, section: 'cold-drinks', type: null }
];

const sectionLabels = {
  'all': 'All Items',
  'ethiopian': 'Ethiopian Foods',
  'international': 'Outside Ethiopia',
  'hot-drinks': 'Hot Drinks',
  'cold-drinks': 'Drinks & Soft Drinks'
};

const subsectionLabels = {
  'burgers': '🍔 Burgers',
  'pizzas': '🍕 Pizzas',
  'chickens': '🍗 Chickens'
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
  const hasSubsections = items.some(item => item.subsection);

  let html = '';
  if (showSectionHeaders) {
    const sections = ['ethiopian', 'international', 'hot-drinks', 'cold-drinks'];
    sections.forEach(section => {
      const sectionItems = items.filter(item => item.section === section);
      if (sectionItems.length > 0) {
        html += `<h2 class="section-label">${sectionLabels[section]}</h2>`;
        html += renderItemsGrouped(sectionItems);
      }
    });
  } else if (hasSubsections) {
    html = renderItemsGrouped(items);
  } else {
    html = renderItems(items);
  }

  menuGrid.innerHTML = html;
}

function renderItemsGrouped(items) {
  const subsections = [...new Set(items.filter(i => i.subsection).map(i => i.subsection))];
  const noSubsection = items.filter(i => !i.subsection);

  let html = '';
  subsections.forEach(sub => {
    const subItems = items.filter(i => i.subsection === sub);
    html += `<h3 class="subsection-label">${subsectionLabels[sub] || sub}</h3>`;
    html += renderItems(subItems);
  });
  if (noSubsection.length > 0) {
    html += renderItems(noSubsection);
  }
  return html;
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
