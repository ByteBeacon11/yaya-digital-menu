const ETB_RATE = 130;
const formatETB = (usd) => (usd * ETB_RATE).toFixed(0);

const menuData = [
  // ══════════════════════════════════════════
  // ETHIOPIAN – NON-FASTING
  // ══════════════════════════════════════════
  {
    id: 1, name: 'Doro Wat', price: 14.00, section: 'ethiopian', type: 'non-fasting',
    desc: 'Spicy chicken stew simmered with berbere spice and hard-boiled eggs, served with injera',
    ingredients: ['Chicken', 'Berbere', 'Onions', 'Hard-boiled Eggs', 'Injera', 'Niter Kibbeh']
  },
  {
    id: 2, name: 'Sega Wat', price: 15.00, section: 'ethiopian', type: 'non-fasting',
    desc: 'Rich and flavorful beef stew slow-cooked in berbere sauce',
    ingredients: ['Beef', 'Berbere', 'Onions', 'Garlic', 'Niter Kibbeh', 'Injera']
  },
  {
    id: 3, name: 'Bozena Shiro', price: 13.00, section: 'ethiopian', type: 'non-fasting',
    desc: 'Savory shiro stew with tender pieces of beef',
    ingredients: ['Beef', 'Chickpea Flour', 'Berbere', 'Onions', 'Garlic', 'Injera']
  },
  {
    id: 4, name: 'Tibs', price: 15.00, section: 'ethiopian', type: 'non-fasting',
    desc: 'Sautéed meat with onions, peppers, and aromatic spices',
    ingredients: ['Beef/Lamb', 'Onions', 'Bell Peppers', 'Rosemary', 'Niter Kibbeh', 'Injera']
  },
  {
    id: 5, name: 'Teferesho', price: 14.00, section: 'ethiopian', type: 'non-fasting',
    desc: 'Traditional Ethiopian tripe dish prepared with spiced butter and herbs',
    ingredients: ['Tripe', 'Niter Kibbeh', 'Spiced Butter', 'Herbs', 'Injera']
  },
  {
    id: 6, name: 'Kitfo', price: 16.00, section: 'ethiopian', type: 'non-fasting',
    desc: 'Minced raw beef seasoned with mitmita and clarified butter',
    ingredients: ['Minced Beef', 'Mitmita', 'Clarified Butter', 'Ayib', 'Injera']
  },

  // ══════════════════════════════════════════
  // ETHIOPIAN – FASTING
  // ══════════════════════════════════════════
  {
    id: 7, name: 'Shiro Wat', price: 9.00, section: 'ethiopian', type: 'fasting',
    desc: 'Creamy chickpea and lentil stew simmered with garlic and berbere',
    ingredients: ['Chickpea Flour', 'Lentils', 'Berbere', 'Garlic', 'Onions', 'Injera']
  },
  {
    id: 8, name: 'Misir Wat', price: 8.50, section: 'ethiopian', type: 'fasting',
    desc: 'Red lentil stew cooked in spicy berbere sauce',
    ingredients: ['Red Lentils', 'Berbere', 'Onions', 'Garlic', 'Ginger', 'Injera']
  },
  {
    id: 9, name: 'Gomen', price: 8.00, section: 'ethiopian', type: 'fasting',
    desc: 'Sautéed collard greens with garlic, ginger, and onions',
    ingredients: ['Collard Greens', 'Garlic', 'Ginger', 'Onions', 'Olive Oil', 'Injera']
  },
  {
    id: 10, name: 'Beyaynet', price: 12.00, section: 'ethiopian', type: 'fasting',
    desc: 'Assorted vegetarian platter with shiro, misir, gomen, and more',
    ingredients: ['Shiro', 'Misir', 'Gomen', 'Lentils', 'Vegetables', 'Injera']
  },
  {
    id: 11, name: 'Pasta Besego', price: 10.00, section: 'ethiopian', type: 'fasting',
    desc: 'Pasta tossed with seasoned minced meat sauce',
    ingredients: ['Pasta', 'Minced Meat', 'Tomato Sauce', 'Onions', 'Spices']
  },
  {
    id: 12, name: 'Pasta Batikelt', price: 9.00, section: 'ethiopian', type: 'fasting',
    desc: 'Pasta with fresh sautéed vegetables in light tomato sauce',
    ingredients: ['Pasta', 'Mixed Vegetables', 'Tomato Sauce', 'Garlic', 'Olive Oil']
  },
  {
    id: 13, name: 'Denech Wat', price: 8.50, section: 'ethiopian', type: 'fasting',
    desc: 'Hearty potato stew seasoned with turmeric and herbs',
    ingredients: ['Potatoes', 'Turmeric', 'Onions', 'Garlic', 'Herbs', 'Injera']
  },
  {
    id: 14, name: 'Ruz Besoya', price: 10.00, section: 'ethiopian', type: 'fasting',
    desc: 'Rice with flavorful meat sauce and aromatic spices',
    ingredients: ['Rice', 'Meat Sauce', 'Spices', 'Onions', 'Tomato']
  },
  {
    id: 15, name: 'Tegabino', price: 9.50, section: 'ethiopian', type: 'fasting',
    desc: 'Traditional thick bean and grain stew, rich and filling',
    ingredients: ['Beans', 'Grains', 'Berbere', 'Onions', 'Garlic', 'Injera']
  },

  // ══════════════════════════════════════════
  // INTERNATIONAL – NON-FASTING
  // ══════════════════════════════════════════
  // ── Burgers ──
  {
    id: 16, name: 'Chicken Burger', price: 8.00, section: 'international', type: 'non-fasting', subsection: 'burgers',
    desc: 'Crispy chicken patty with lettuce, tomato, and mayo',
    ingredients: ['Chicken Patty', 'Lettuce', 'Tomato', 'Mayo', 'Burger Bun', 'Fries']
  },
  {
    id: 17, name: 'Beef Burger', price: 8.50, section: 'international', type: 'non-fasting', subsection: 'burgers',
    desc: 'Classic beef patty with lettuce, tomato, and onions',
    ingredients: ['Beef Patty', 'Lettuce', 'Tomato', 'Onions', 'Burger Bun', 'Fries']
  },
  {
    id: 18, name: 'Cheese Burger', price: 9.00, section: 'international', type: 'non-fasting', subsection: 'burgers',
    desc: 'Beef patty topped with melted cheddar cheese',
    ingredients: ['Beef Patty', 'Cheddar Cheese', 'Lettuce', 'Tomato', 'Burger Bun', 'Fries']
  },
  {
    id: 19, name: 'Double Cheese Burger', price: 11.00, section: 'international', type: 'non-fasting', subsection: 'burgers',
    desc: 'Two beef patties with double cheddar cheese',
    ingredients: ['2x Beef Patties', 'Double Cheddar', 'Lettuce', 'Tomato', 'Burger Bun', 'Fries']
  },
  {
    id: 20, name: "Yaya's Special Burger", price: 12.00, section: 'international', type: 'non-fasting', subsection: 'burgers',
    desc: 'Signature beef patty with caramelized onions, bacon, and special sauce',
    ingredients: ['Beef Patty', 'Bacon', 'Caramelized Onions', 'Special Sauce', 'Burger Bun', 'Fries']
  },
  {
    id: 21, name: "Yaya's Double Special", price: 15.00, section: 'international', type: 'non-fasting', subsection: 'burgers',
    desc: 'Double the patty, double the cheese – our ultimate burger',
    ingredients: ['2x Beef Patties', 'Double Cheddar', 'Bacon', 'Special Sauce', 'Burger Bun', 'Fries']
  },

  // ── Pizzas ──
  {
    id: 22, name: 'Margherita Pizza', price: 9.00, section: 'international', type: 'non-fasting', subsection: 'pizzas',
    desc: 'Classic tomato sauce, mozzarella, and fresh basil',
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Fresh Basil', 'Olive Oil', 'Pizza Dough']
  },
  {
    id: 23, name: 'Chicken Pizza', price: 11.00, section: 'international', type: 'non-fasting', subsection: 'pizzas',
    desc: 'Topped with grilled chicken, bell peppers, and mozzarella',
    ingredients: ['Grilled Chicken', 'Bell Peppers', 'Mozzarella', 'Tomato Sauce', 'Pizza Dough']
  },
  {
    id: 24, name: 'Beef Pizza', price: 11.00, section: 'international', type: 'non-fasting', subsection: 'pizzas',
    desc: 'Seasoned beef with onions, olives, and melted cheese',
    ingredients: ['Seasoned Beef', 'Onions', 'Olives', 'Mozzarella', 'Pizza Dough']
  },
  {
    id: 25, name: 'Tuna Pizza', price: 10.00, section: 'international', type: 'non-fasting', subsection: 'pizzas',
    desc: 'Tuna, onions, olives, and mozzarella on crispy crust',
    ingredients: ['Tuna', 'Onions', 'Olives', 'Mozzarella', 'Tomato Sauce', 'Pizza Dough']
  },
  {
    id: 26, name: "Yaya's Special Pizza", price: 14.00, section: 'international', type: 'non-fasting', subsection: 'pizzas',
    desc: 'Our signature pizza loaded with chicken, beef, veggies, and extra cheese',
    ingredients: ['Chicken', 'Beef', 'Mixed Veggies', 'Extra Cheese', 'Special Sauce', 'Pizza Dough']
  },

  // ── Chickens ──
  {
    id: 27, name: 'Chicken Mofo', price: 9.00, section: 'international', type: 'non-fasting', subsection: 'chickens',
    desc: 'Crispy fried chicken pieces with spicy dipping sauce',
    ingredients: ['Chicken Pieces', 'Flour Coating', 'Spices', 'Dipping Sauce', 'Fries']
  },
  {
    id: 28, name: 'Grilled Chicken', price: 12.00, section: 'international', type: 'non-fasting', subsection: 'chickens',
    desc: 'Marinated chicken breast grilled to perfection, served with rice',
    ingredients: ['Chicken Breast', 'Herb Marinade', 'Rice', 'Grilled Vegetables']
  },
  {
    id: 29, name: 'Chicken Wings', price: 7.00, section: 'international', type: 'non-fasting', subsection: 'chickens',
    desc: 'Crispy wings tossed in Yaya\'s signature hot sauce',
    ingredients: ['Chicken Wings', 'Hot Sauce', 'Butter', 'Blue Cheese Dip', 'Celery']
  },
  {
    id: 30, name: 'Chicken Rice', price: 10.00, section: 'international', type: 'non-fasting', subsection: 'chickens',
    desc: 'Tender chicken pieces stir-fried with seasoned rice and vegetables',
    ingredients: ['Chicken', 'Rice', 'Mixed Vegetables', 'Soy Sauce', 'Spices']
  },
  {
    id: 31, name: "Yaya's Special Combo", price: 16.00, section: 'international', type: 'non-fasting', subsection: 'chickens',
    desc: 'Grilled chicken, wings, fries, and coleslaw – the full experience',
    ingredients: ['Grilled Chicken', 'Chicken Wings', 'Fries', 'Coleslaw', 'Dipping Sauces']
  },

  // ══════════════════════════════════════════
  // INTERNATIONAL – FASTING
  // ══════════════════════════════════════════
  {
    id: 32, name: 'Samosa', price: 4.50, section: 'international', type: 'fasting',
    desc: 'Crispy pastry filled with spiced potatoes and peas',
    ingredients: ['Potatoes', 'Peas', 'Spices', 'Pastry Dough', 'Oil']
  },
  {
    id: 33, name: 'Spring Rolls', price: 5.00, section: 'international', type: 'fasting',
    desc: 'Lightly fried rolls stuffed with vegetables and glass noodles',
    ingredients: ['Mixed Vegetables', 'Glass Noodles', 'Spring Roll Wrappers', 'Soy Sauce', 'Oil']
  },
  {
    id: 34, name: 'Veggie Pizza', price: 10.00, section: 'international', type: 'fasting',
    desc: 'Thin-crust pizza topped with fresh seasonal vegetables and mozzarella',
    ingredients: ['Seasonal Vegetables', 'Mozzarella', 'Tomato Sauce', 'Pizza Dough']
  },
  {
    id: 35, name: 'Fruit Salad', price: 4.50, section: 'international', type: 'fasting',
    desc: 'Fresh seasonal fruits drizzled with honey and lime',
    ingredients: ['Seasonal Fruits', 'Honey', 'Lime Juice', 'Mint']
  },

  // ══════════════════════════════════════════
  // HOT DRINKS
  // ══════════════════════════════════════════
  {
    id: 36, name: 'Macchiato', price: 2.50, section: 'hot-drinks', type: null,
    desc: 'Espresso with a touch of steamed milk',
    ingredients: ['Espresso', 'Steamed Milk']
  },
  {
    id: 37, name: 'Ethiopian Coffee', price: 2.50, section: 'hot-drinks', type: null,
    desc: 'Traditional coffee ceremony style, rich and aromatic',
    ingredients: ['Ethiopian Coffee Beans', 'Water', 'Sugar (optional)']
  },
  {
    id: 38, name: 'Spiced Tea', price: 2.00, section: 'hot-drinks', type: null,
    desc: 'Aromatic black tea with cardamom, cinnamon, and cloves',
    ingredients: ['Black Tea', 'Cardamom', 'Cinnamon', 'Cloves', 'Honey']
  },
  {
    id: 39, name: 'Tea', price: 1.50, section: 'hot-drinks', type: null,
    desc: 'Premium black or herbal tea',
    ingredients: ['Tea Leaves', 'Hot Water', 'Sugar (optional)']
  },

  // ══════════════════════════════════════════
  // COLD DRINKS
  // ══════════════════════════════════════════
  // ── Juices ──
  {
    id: 40, name: 'Avocado Juice', price: 3.50, section: 'cold-drinks', type: null, subsection: 'juices',
    desc: 'Creamy fresh avocado blended with milk and sugar',
    ingredients: ['Avocado', 'Milk', 'Sugar', 'Vanilla']
  },
  {
    id: 41, name: 'Mango Juice', price: 3.50, section: 'cold-drinks', type: null, subsection: 'juices',
    desc: 'Sweet ripe mango blended to perfection',
    ingredients: ['Ripe Mango', 'Milk', 'Sugar', 'Ice']
  },
  {
    id: 42, name: 'Pineapple Juice', price: 3.00, section: 'cold-drinks', type: null, subsection: 'juices',
    desc: 'Refreshing pineapple juice with a hint of lime',
    ingredients: ['Pineapple', 'Lime', 'Sugar', 'Ice']
  },
  {
    id: 43, name: 'Orange Juice', price: 3.00, section: 'cold-drinks', type: null, subsection: 'juices',
    desc: 'Freshly squeezed orange juice',
    ingredients: ['Fresh Oranges', 'Sugar (optional)', 'Ice']
  },
  {
    id: 44, name: "Yaya's Special Juice", price: 4.50, section: 'cold-drinks', type: null, subsection: 'juices',
    desc: 'Our signature blend of tropical fruits and berries',
    ingredients: ['Tropical Fruits', 'Berries', 'Honey', 'Ice']
  },

  // ── Milkshakes ──
  {
    id: 45, name: 'Strawberry Milkshake', price: 4.50, section: 'cold-drinks', type: null, subsection: 'milkshakes',
    desc: 'Creamy strawberry milkshake topped with whipped cream',
    ingredients: ['Strawberries', 'Vanilla Ice Cream', 'Milk', 'Whipped Cream']
  },
  {
    id: 46, name: 'Chocolate Milkshake', price: 4.50, section: 'cold-drinks', type: null, subsection: 'milkshakes',
    desc: 'Rich chocolate milkshake with a fudge swirl',
    ingredients: ['Chocolate Ice Cream', 'Milk', 'Chocolate Fudge', 'Whipped Cream']
  },
  {
    id: 47, name: 'Vanilla Milkshake', price: 4.00, section: 'cold-drinks', type: null, subsection: 'milkshakes',
    desc: 'Classic vanilla milkshake made with real vanilla bean',
    ingredients: ['Vanilla Ice Cream', 'Milk', 'Vanilla Bean', 'Whipped Cream']
  },
  {
    id: 48, name: 'Banana Milkshake', price: 4.50, section: 'cold-drinks', type: null, subsection: 'milkshakes',
    desc: 'Smooth banana milkshake with a touch of cinnamon',
    ingredients: ['Banana', 'Vanilla Ice Cream', 'Milk', 'Cinnamon', 'Whipped Cream']
  },
  {
    id: 49, name: 'Oreo Milkshake', price: 5.00, section: 'cold-drinks', type: null, subsection: 'milkshakes',
    desc: 'Crushed Oreo cookies blended in creamy vanilla milkshake',
    ingredients: ['Oreo Cookies', 'Vanilla Ice Cream', 'Milk', 'Whipped Cream']
  },
  {
    id: 50, name: "Yaya's Special Shake", price: 5.50, section: 'cold-drinks', type: null, subsection: 'milkshakes',
    desc: 'Our signature mix of chocolate, caramel, and brownie bits',
    ingredients: ['Chocolate', 'Caramel', 'Brownie Bits', 'Ice Cream', 'Milk', 'Whipped Cream']
  },

  // ── Smoothies ──
  {
    id: 51, name: 'Mixed Berry Smoothie', price: 4.50, section: 'cold-drinks', type: null, subsection: 'smoothies',
    desc: 'Blend of strawberries, blueberries, and raspberries with yogurt',
    ingredients: ['Strawberries', 'Blueberries', 'Raspberries', 'Yogurt', 'Honey']
  },
  {
    id: 52, name: 'Tropical Smoothie', price: 4.50, section: 'cold-drinks', type: null, subsection: 'smoothies',
    desc: 'Mango, pineapple, and coconut blended with yogurt',
    ingredients: ['Mango', 'Pineapple', 'Coconut Milk', 'Yogurt', 'Honey']
  },
  {
    id: 53, name: 'Green Smoothie', price: 4.00, section: 'cold-drinks', type: null, subsection: 'smoothies',
    desc: 'Spinach, banana, apple, and ginger – healthy and refreshing',
    ingredients: ['Spinach', 'Banana', 'Apple', 'Ginger', 'Lime']
  },
  {
    id: 54, name: 'Peanut Butter Smoothie', price: 5.00, section: 'cold-drinks', type: null, subsection: 'smoothies',
    desc: 'Creamy peanut butter, banana, and chocolate protein blend',
    ingredients: ['Peanut Butter', 'Banana', 'Chocolate Protein', 'Milk', 'Honey']
  },
  {
    id: 55, name: 'Mango Smoothie', price: 4.50, section: 'cold-drinks', type: null, subsection: 'smoothies',
    desc: 'Fresh mango blended with yogurt and a hint of honey',
    ingredients: ['Mango', 'Yogurt', 'Honey', 'Ice']
  },

  // ── Mojitos ──
  {
    id: 56, name: 'Classic Mojito', price: 4.50, section: 'cold-drinks', type: null, subsection: 'mojitos',
    desc: 'Traditional Cuban mojito with fresh mint and lime',
    ingredients: ['White Rum', 'Fresh Mint', 'Lime', 'Sugar', 'Soda Water', 'Ice']
  },
  {
    id: 57, name: 'Strawberry Mojito', price: 5.00, section: 'cold-drinks', type: null, subsection: 'mojitos',
    desc: 'Sweet strawberry twist on the classic mojito',
    ingredients: ['White Rum', 'Fresh Strawberries', 'Mint', 'Lime', 'Sugar', 'Soda Water', 'Ice']
  },
  {
    id: 58, name: 'Mango Mojito', price: 5.00, section: 'cold-drinks', type: null, subsection: 'mojitos',
    desc: 'Tropical mango purée meets refreshing mojito',
    ingredients: ['White Rum', 'Mango Purée', 'Mint', 'Lime', 'Sugar', 'Soda Water', 'Ice']
  },
  {
    id: 59, name: 'Passion Fruit Mojito', price: 5.50, section: 'cold-drinks', type: null, subsection: 'mojitos',
    desc: 'Tangy passion fruit with cool mint and lime',
    ingredients: ['White Rum', 'Passion Fruit', 'Mint', 'Lime', 'Sugar', 'Soda Water', 'Ice']
  },
  {
    id: 60, name: 'Blueberry Mojito', price: 5.00, section: 'cold-drinks', type: null, subsection: 'mojitos',
    desc: 'Muddled blueberries with classic mojito freshness',
    ingredients: ['White Rum', 'Blueberries', 'Mint', 'Lime', 'Sugar', 'Soda Water', 'Ice']
  },
  {
    id: 61, name: 'Watermelon Mojito', price: 5.00, section: 'cold-drinks', type: null, subsection: 'mojitos',
    desc: 'Juicy watermelon blended into a refreshing mojito',
    ingredients: ['White Rum', 'Watermelon Purée', 'Mint', 'Lime', 'Sugar', 'Soda Water', 'Ice']
  },
  {
    id: 62, name: "Yaya's Special Mojito", price: 6.00, section: 'cold-drinks', type: null, subsection: 'mojitos',
    desc: 'Our signature mojito with triple fruit blend and a secret twist',
    ingredients: ['White Rum', 'Triple Fruit Blend', 'Mint', 'Lime', 'Secret Syrup', 'Soda Water', 'Ice']
  },

  // ── Soft Drinks ──
  {
    id: 63, name: 'Soda', price: 1.50, section: 'cold-drinks', type: null, subsection: 'soft-drinks',
    desc: 'Choice of Coca-Cola, Sprite, Fanta, or Pepsi',
    ingredients: ['Carbonated Water', 'Sugar', 'Flavoring']
  },
  {
    id: 64, name: 'Bottled Water', price: 1.00, section: 'cold-drinks', type: null, subsection: 'soft-drinks',
    desc: 'Pure, refreshing bottled water',
    ingredients: ['Purified Water', 'Electrolytes']
  },
  {
    id: 65, name: 'Energy Drink', price: 3.00, section: 'cold-drinks', type: null, subsection: 'soft-drinks',
    desc: 'Choice of Red Bull or Monster',
    ingredients: ['Caffeine', 'Taurine', 'B Vitamins', 'Carbonated Water', 'Sugar']
  },
  {
    id: 66, name: 'Sparkling Water', price: 1.50, section: 'cold-drinks', type: null, subsection: 'soft-drinks',
    desc: 'Refreshing carbonated mineral water',
    ingredients: ['Carbonated Water', 'Natural Minerals']
  }
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
  'chickens': '🍗 Chickens',
  'juices': '🧃 Juices',
  'milkshakes': '🥤 Milkshakes',
  'smoothies': '🥭 Smoothies',
  'mojitos': '🍸 Mojitos',
  'soft-drinks': '🥤 Soft Drinks'
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
    const ingredients = item.ingredients.map(ing =>
      `<span class="item-ingredient">${ing}</span>`
    ).join('');
    return `
    <div class="menu-item">
      <div class="item-header">
        <span class="item-name">${item.name}</span>
        <span class="item-price">$${item.price.toFixed(2)}
          <span class="item-price-etb">${formatETB(item.price)} ETB</span>
        </span>
      </div>
      <p class="item-desc">${item.desc}</p>
      <div class="item-ingredients">${ingredients}</div>
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

setTimeout(() => {
  const splash = document.getElementById('splash');
  if (splash) splash.classList.add('splash-hidden');
}, 3000);
