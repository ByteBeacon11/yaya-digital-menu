
const STORAGE_KEY = 'yayaMenuData';

async function loadMenuData() {
  if (typeof isFirebaseConfigured !== 'undefined' && isFirebaseConfigured()) {
    try {
      const fbData = await fbLoadCollection('menuItems');
      if (fbData && fbData.length > 0) return fbData;
    } catch(e) {}
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length) return parsed;
    } catch(e) {}
  }
  return null;
}

let menuData = [];

// Original data below is kept as inline fallback
const fallbackMenuData = [
  // ══════════════════════════════════════════
  // ETHIOPIAN – NON-FASTING
  // ══════════════════════════════════════════
  {
    id: 1, name: 'Doro Wat', price: 2000, section: 'ethiopian', type: 'non-fasting', active: true,
    desc: 'Spicy chicken stew simmered with berbere spice and hard-boiled eggs, served with injera',
    ingredients: ['Chicken', 'Berbere', 'Onions', 'Hard-boiled Eggs', 'Injera', 'Niter Kibbeh']
  },
  {
    id: 2, name: 'Sega Wat', price: 1950, section: 'ethiopian', type: 'non-fasting', active: true,
    desc: 'Rich and flavorful beef stew slow-cooked in berbere sauce',
    ingredients: ['Beef', 'Berbere', 'Onions', 'Garlic', 'Niter Kibbeh', 'Injera']
  },
  {
    id: 3, name: 'Bozena Shiro', price: 600, section: 'ethiopian', type: 'non-fasting', active: true,
    desc: 'Savory shiro stew with tender pieces of beef',
    ingredients: ['Beef', 'Chickpea Flour', 'Berbere', 'Onions', 'Garlic', 'Injera']
  },
  {
    id: 4, name: 'Tibs', price: 1500, section: 'ethiopian', type: 'non-fasting', active: true,
    desc: 'Sautéed meat with onions, peppers, and aromatic spices',
    ingredients: ['Beef/Lamb', 'Onions', 'Bell Peppers', 'Rosemary', 'Niter Kibbeh', 'Injera']
  },
  {
    id: 5, name: 'Teferesho', price: 1300, section: 'ethiopian', type: 'non-fasting', active: true,
    desc: 'Traditional Ethiopian tripe dish prepared with spiced butter and herbs',
    ingredients: ['Tripe', 'Niter Kibbeh', 'Spiced Butter', 'Herbs', 'Injera']
  },
  {
    id: 6, name: 'Kitfo', price: 2080, section: 'ethiopian', type: 'non-fasting', active: true,
    desc: 'Minced raw beef seasoned with mitmita and clarified butter',
    ingredients: ['Minced Beef', 'Mitmita', 'Clarified Butter', 'Ayib', 'Injera']
  },

  // ══════════════════════════════════════════
  // ETHIOPIAN – FASTING
  // ══════════════════════════════════════════
  {
    id: 7, name: 'Shiro Wat', price: 300, section: 'ethiopian', type: 'fasting', active: true,
    desc: 'Creamy chickpea and lentil stew simmered with garlic and berbere',
    ingredients: ['Chickpea Flour', 'Lentils', 'Berbere', 'Garlic', 'Onions', 'Injera']
  },
  {
    id: 8, name: 'Misir Wat', price: 400, section: 'ethiopian', type: 'fasting', active: true,
    desc: 'Red lentil stew cooked in spicy berbere sauce',
    ingredients: ['Red Lentils', 'Berbere', 'Onions', 'Garlic', 'Ginger', 'Injera']
  },
  {
    id: 9, name: 'Gomen', price: 350, section: 'ethiopian', type: 'fasting', active: true,
    desc: 'Sautéed collard greens with garlic, ginger, and onions',
    ingredients: ['Collard Greens', 'Garlic', 'Ginger', 'Onions', 'Olive Oil', 'Injera']
  },
  {
    id: 10, name: 'Beyaynet', price: 400, section: 'ethiopian', type: 'fasting', active: true,
    desc: 'Assorted vegetarian platter with shiro, misir, gomen, and more',
    ingredients: ['Shiro', 'Misir', 'Gomen', 'Lentils', 'Vegetables', 'Injera']
  },
  {
    id: 11, name: 'Pasta Besego', price: 350, section: 'ethiopian', type: 'fasting', active: true,
    desc: 'Pasta tossed with seasoned minced meat sauce',
    ingredients: ['Pasta', 'Minced Meat', 'Tomato Sauce', 'Onions', 'Spices']
  },
  {
    id: 12, name: 'Pasta Batikelt', price: 350, section: 'ethiopian', type: 'fasting', active: true,
    desc: 'Pasta with fresh sautéed vegetables in light tomato sauce',
    ingredients: ['Pasta', 'Mixed Vegetables', 'Tomato Sauce', 'Garlic', 'Olive Oil']
  },
  {
    id: 13, name: 'Denech Wat', price: 400, section: 'ethiopian', type: 'fasting', active: true,
    desc: 'Hearty potato stew seasoned with turmeric and herbs',
    ingredients: ['Potatoes', 'Turmeric', 'Onions', 'Garlic', 'Herbs', 'Injera']
  },
  {
    id: 14, name: 'Ruz Besoya', price: 370, section: 'ethiopian', type: 'fasting', active: true,
    desc: 'Rice with flavorful meat sauce and aromatic spices',
    ingredients: ['Rice', 'Meat Sauce', 'Spices', 'Onions', 'Tomato']
  },
  {
    id: 15, name: 'Tegabino', price: 500, section: 'ethiopian', type: 'fasting', active: true,
    desc: 'Traditional thick bean and grain stew, rich and filling',
    ingredients: ['Beans', 'Grains', 'Berbere', 'Onions', 'Garlic', 'Injera']
  },

  // ══════════════════════════════════════════
  // INTERNATIONAL – NON-FASTING
  // ══════════════════════════════════════════
  // ── Burgers ──
  {
    id: 16, name: 'Chicken Burger', price: 1040, section: 'international', type: 'non-fasting', subsection: 'burgers', active: true,
    desc: 'Crispy chicken patty with lettuce, tomato, and mayo',
    ingredients: ['Chicken Patty', 'Lettuce', 'Tomato', 'Mayo', 'Burger Bun', 'Fries']
  },
  {
    id: 17, name: 'Beef Burger', price: 1105, section: 'international', type: 'non-fasting', subsection: 'burgers', active: true,
    desc: 'Classic beef patty with lettuce, tomato, and onions',
    ingredients: ['Beef Patty', 'Lettuce', 'Tomato', 'Onions', 'Burger Bun', 'Fries']
  },
  {
    id: 18, name: 'Cheese Burger', price: 1170, section: 'international', type: 'non-fasting', subsection: 'burgers', active: true,
    desc: 'Beef patty topped with melted cheddar cheese',
    ingredients: ['Beef Patty', 'Cheddar Cheese', 'Lettuce', 'Tomato', 'Burger Bun', 'Fries']
  },
  {
    id: 19, name: 'Double Cheese Burger', price: 1430, section: 'international', type: 'non-fasting', subsection: 'burgers', active: true,
    desc: 'Two beef patties with double cheddar cheese',
    ingredients: ['2x Beef Patties', 'Double Cheddar', 'Lettuce', 'Tomato', 'Burger Bun', 'Fries']
  },
  {
    id: 20, name: "Yaya's Special Burger", price: 1560, section: 'international', type: 'non-fasting', subsection: 'burgers', active: true,
    desc: 'Signature beef patty with caramelized onions, bacon, and special sauce',
    ingredients: ['Beef Patty', 'Bacon', 'Caramelized Onions', 'Special Sauce', 'Burger Bun', 'Fries']
  },
  {
    id: 21, name: "Yaya's Double Special", price: 1950, section: 'international', type: 'non-fasting', subsection: 'burgers', active: true,
    desc: 'Double the patty, double the cheese – our ultimate burger',
    ingredients: ['2x Beef Patties', 'Double Cheddar', 'Bacon', 'Special Sauce', 'Burger Bun', 'Fries']
  },

  // ── Pizzas ──
  {
    id: 22, name: 'Margherita Pizza', price: 1170, section: 'international', type: 'non-fasting', subsection: 'pizzas', active: true,
    desc: 'Classic tomato sauce, mozzarella, and fresh basil',
    ingredients: ['Tomato Sauce', 'Mozzarella', 'Fresh Basil', 'Olive Oil', 'Pizza Dough']
  },
  {
    id: 23, name: 'Chicken Pizza', price: 1430, section: 'international', type: 'non-fasting', subsection: 'pizzas', active: true,
    desc: 'Topped with grilled chicken, bell peppers, and mozzarella',
    ingredients: ['Grilled Chicken', 'Bell Peppers', 'Mozzarella', 'Tomato Sauce', 'Pizza Dough']
  },
  {
    id: 24, name: 'Beef Pizza', price: 1430, section: 'international', type: 'non-fasting', subsection: 'pizzas', active: true,
    desc: 'Seasoned beef with onions, olives, and melted cheese',
    ingredients: ['Seasoned Beef', 'Onions', 'Olives', 'Mozzarella', 'Pizza Dough']
  },
  {
    id: 25, name: 'Tuna Pizza', price: 1300, section: 'international', type: 'non-fasting', subsection: 'pizzas', active: true,
    desc: 'Tuna, onions, olives, and mozzarella on crispy crust',
    ingredients: ['Tuna', 'Onions', 'Olives', 'Mozzarella', 'Tomato Sauce', 'Pizza Dough']
  },
  {
    id: 26, name: "Yaya's Special Pizza", price: 1820, section: 'international', type: 'non-fasting', subsection: 'pizzas', active: true,
    desc: 'Our signature pizza loaded with chicken, beef, veggies, and extra cheese',
    ingredients: ['Chicken', 'Beef', 'Mixed Veggies', 'Extra Cheese', 'Special Sauce', 'Pizza Dough']
  },

  // ── Chickens ──
  {
    id: 27, name: 'Chicken Mofo', price: 1250, section: 'international', type: 'non-fasting', subsection: 'chickens', active: true,
    desc: 'Crispy fried chicken pieces with spicy dipping sauce',
    ingredients: ['Chicken Pieces', 'Flour Coating', 'Spices', 'Dipping Sauce', 'Fries']
  },
  {
    id: 28, name: 'Grilled Chicken', price: 1560, section: 'international', type: 'non-fasting', subsection: 'chickens', active: true,
    desc: 'Marinated chicken breast grilled to perfection, served with rice',
    ingredients: ['Chicken Breast', 'Herb Marinade', 'Rice', 'Grilled Vegetables']
  },
  {
    id: 29, name: 'Chicken Wings', price: 1100, section: 'international', type: 'non-fasting', subsection: 'chickens', active: true,
    desc: 'Crispy wings tossed in Yaya\'s signature hot sauce',
    ingredients: ['Chicken Wings', 'Hot Sauce', 'Butter', 'Blue Cheese Dip', 'Celery']
  },
  {
    id: 30, name: 'Chicken Rice', price: 1300, section: 'international', type: 'non-fasting', subsection: 'chickens', active: true,
    desc: 'Tender chicken pieces stir-fried with seasoned rice and vegetables',
    ingredients: ['Chicken', 'Rice', 'Mixed Vegetables', 'Soy Sauce', 'Spices']
  },
  {
    id: 31, name: "Yaya's Special Combo", price: 2080, section: 'international', type: 'non-fasting', subsection: 'chickens', active: true,
    desc: 'Grilled chicken, wings, fries, and coleslaw – the full experience',
    ingredients: ['Grilled Chicken', 'Chicken Wings', 'Fries', 'Coleslaw', 'Dipping Sauces']
  },

  // ══════════════════════════════════════════
  // INTERNATIONAL – FASTING
  // ══════════════════════════════════════════
  {
    id: 32, name: 'Samosa', price: 585, section: 'international', type: 'fasting', active: true,
    desc: 'Crispy pastry filled with spiced potatoes and peas',
    ingredients: ['Potatoes', 'Peas', 'Spices', 'Pastry Dough', 'Oil']
  },
  {
    id: 33, name: 'Spring Rolls', price: 650, section: 'international', type: 'fasting', active: true,
    desc: 'Lightly fried rolls stuffed with vegetables and glass noodles',
    ingredients: ['Mixed Vegetables', 'Glass Noodles', 'Spring Roll Wrappers', 'Soy Sauce', 'Oil']
  },
  {
    id: 34, name: 'Veggie Pizza', price: 1300, section: 'international', type: 'fasting', active: true,
    desc: 'Thin-crust pizza topped with fresh seasonal vegetables and mozzarella',
    ingredients: ['Seasonal Vegetables', 'Mozzarella', 'Tomato Sauce', 'Pizza Dough']
  },
  {
    id: 35, name: 'Fruit Salad', price: 585, section: 'international', type: 'fasting', active: true,
    desc: 'Fresh seasonal fruits drizzled with honey and lime',
    ingredients: ['Seasonal Fruits', 'Honey', 'Lime Juice', 'Mint']
  },
  {
    id: 67, name: 'Vegetable Pizza', price: 700, section: 'international', type: 'fasting', subsection: 'pizzas', active: true,
    desc: 'Thin-crust pizza loaded with fresh seasonal vegetables and cheese',
    ingredients: ['Seasonal Vegetables', 'Mozzarella', 'Tomato Sauce', 'Pizza Dough']
  },

  // ── Burritos ──
  {
    id: 68, name: 'Chicken Burrito', price: 900, section: 'international', type: 'non-fasting', subsection: 'burritos', active: true,
    desc: 'Flour tortilla filled with seasoned chicken, rice, beans, and cheese',
    ingredients: ['Chicken', 'Rice', 'Beans', 'Cheese', 'Flour Tortilla', 'Sour Cream']
  },
  {
    id: 69, name: 'Beef Burrito', price: 870, section: 'international', type: 'non-fasting', subsection: 'burritos', active: true,
    desc: 'Hearty beef burrito with rice, beans, and melted cheese',
    ingredients: ['Beef', 'Rice', 'Beans', 'Cheese', 'Flour Tortilla', 'Salsa']
  },
  {
    id: 70, name: 'Veggie Burrito', price: 700, section: 'international', type: 'fasting', subsection: 'burritos', active: true,
    desc: 'Fresh vegetable burrito with rice, beans, and guacamole',
    ingredients: ['Mixed Vegetables', 'Rice', 'Beans', 'Guacamole', 'Flour Tortilla']
  },
  {
    id: 71, name: "Yaya's Special Burrito", price: 1100, section: 'international', type: 'non-fasting', subsection: 'burritos', active: true,
    desc: 'Our signature burrito loaded with chicken, beef, and all the fixings',
    ingredients: ['Chicken', 'Beef', 'Rice', 'Beans', 'Cheese', 'Guacamole', 'Sour Cream', 'Flour Tortilla']
  },

  // ══════════════════════════════════════════
  // HOT DRINKS
  // ══════════════════════════════════════════
  {
    id: 36, name: 'Macchiato', price: 130, section: 'hot-drinks', type: null, active: true,
    desc: 'Espresso with a touch of steamed milk',
    ingredients: ['Espresso', 'Steamed Milk']
  },
  {
    id: 37, name: 'Ethiopian Coffee', price: 60, section: 'hot-drinks', type: null, active: true,
    desc: 'Traditional coffee ceremony style, rich and aromatic',
    ingredients: ['Ethiopian Coffee Beans', 'Water', 'Sugar (optional)']
  },
  {
    id: 38, name: 'Spiced Tea', price: 120, section: 'hot-drinks', type: null, active: true,
    desc: 'Aromatic black tea with cardamom, cinnamon, and cloves',
    ingredients: ['Black Tea', 'Cardamom', 'Cinnamon', 'Cloves', 'Honey']
  },
  {
    id: 39, name: 'Tea', price: 60, section: 'hot-drinks', type: null, active: true,
    desc: 'Premium black or herbal tea',
    ingredients: ['Tea Leaves', 'Hot Water', 'Sugar (optional)']
  },

  // ══════════════════════════════════════════
  // COLD DRINKS
  // ══════════════════════════════════════════
  // ── Juices ──
  {
    id: 40, name: 'Avocado Juice', price: 350, section: 'cold-drinks', type: null, subsection: 'juices', active: true,
    desc: 'Creamy fresh avocado blended with milk and sugar',
    ingredients: ['Avocado', 'Milk', 'Sugar', 'Vanilla']
  },
  {
    id: 41, name: 'Mango Juice', price: 300, section: 'cold-drinks', type: null, subsection: 'juices', active: true,
    desc: 'Sweet ripe mango blended to perfection',
    ingredients: ['Ripe Mango', 'Milk', 'Sugar', 'Ice']
  },
  {
    id: 42, name: 'Pineapple Juice', price: 390, section: 'cold-drinks', type: null, subsection: 'juices', active: true,
    desc: 'Refreshing pineapple juice with a hint of lime',
    ingredients: ['Pineapple', 'Lime', 'Sugar', 'Ice']
  },
  {
    id: 43, name: 'Orange Juice', price: 390, section: 'cold-drinks', type: null, subsection: 'juices', active: true,
    desc: 'Freshly squeezed orange juice',
    ingredients: ['Fresh Oranges', 'Sugar (optional)', 'Ice']
  },
  {
    id: 44, name: "Yaya's Special Juice", price: 585, section: 'cold-drinks', type: null, subsection: 'juices', active: true,
    desc: 'Our signature blend of tropical fruits and berries',
    ingredients: ['Tropical Fruits', 'Berries', 'Honey', 'Ice']
  },

  // ── Milkshakes ──
  {
    id: 45, name: 'Strawberry Milkshake', price: 585, section: 'cold-drinks', type: null, subsection: 'milkshakes', active: true,
    desc: 'Creamy strawberry milkshake topped with whipped cream',
    ingredients: ['Strawberries', 'Vanilla Ice Cream', 'Milk', 'Whipped Cream']
  },
  {
    id: 46, name: 'Chocolate Milkshake', price: 585, section: 'cold-drinks', type: null, subsection: 'milkshakes', active: true,
    desc: 'Rich chocolate milkshake with a fudge swirl',
    ingredients: ['Chocolate Ice Cream', 'Milk', 'Chocolate Fudge', 'Whipped Cream']
  },
  {
    id: 47, name: 'Vanilla Milkshake', price: 520, section: 'cold-drinks', type: null, subsection: 'milkshakes', active: true,
    desc: 'Classic vanilla milkshake made with real vanilla bean',
    ingredients: ['Vanilla Ice Cream', 'Milk', 'Vanilla Bean', 'Whipped Cream']
  },
  {
    id: 48, name: 'Banana Milkshake', price: 585, section: 'cold-drinks', type: null, subsection: 'milkshakes', active: true,
    desc: 'Smooth banana milkshake with a touch of cinnamon',
    ingredients: ['Banana', 'Vanilla Ice Cream', 'Milk', 'Cinnamon', 'Whipped Cream']
  },
  {
    id: 49, name: 'Oreo Milkshake', price: 650, section: 'cold-drinks', type: null, subsection: 'milkshakes', active: true,
    desc: 'Crushed Oreo cookies blended in creamy vanilla milkshake',
    ingredients: ['Oreo Cookies', 'Vanilla Ice Cream', 'Milk', 'Whipped Cream']
  },
  {
    id: 50, name: "Yaya's Special Shake", price: 715, section: 'cold-drinks', type: null, subsection: 'milkshakes', active: true,
    desc: 'Our signature mix of chocolate, caramel, and brownie bits',
    ingredients: ['Chocolate', 'Caramel', 'Brownie Bits', 'Ice Cream', 'Milk', 'Whipped Cream']
  },

  // ── Smoothies ──
  {
    id: 51, name: 'Mixed Berry Smoothie', price: 585, section: 'cold-drinks', type: null, subsection: 'smoothies', active: true,
    desc: 'Blend of strawberries, blueberries, and raspberries with yogurt',
    ingredients: ['Strawberries', 'Blueberries', 'Raspberries', 'Yogurt', 'Honey']
  },
  {
    id: 52, name: 'Tropical Smoothie', price: 585, section: 'cold-drinks', type: null, subsection: 'smoothies', active: true,
    desc: 'Mango, pineapple, and coconut blended with yogurt',
    ingredients: ['Mango', 'Pineapple', 'Coconut Milk', 'Yogurt', 'Honey']
  },
  {
    id: 53, name: 'Green Smoothie', price: 520, section: 'cold-drinks', type: null, subsection: 'smoothies', active: true,
    desc: 'Spinach, banana, apple, and ginger – healthy and refreshing',
    ingredients: ['Spinach', 'Banana', 'Apple', 'Ginger', 'Lime']
  },
  {
    id: 54, name: 'Peanut Butter Smoothie', price: 650, section: 'cold-drinks', type: null, subsection: 'smoothies', active: true,
    desc: 'Creamy peanut butter, banana, and chocolate protein blend',
    ingredients: ['Peanut Butter', 'Banana', 'Chocolate Protein', 'Milk', 'Honey']
  },
  {
    id: 55, name: 'Mango Smoothie', price: 585, section: 'cold-drinks', type: null, subsection: 'smoothies', active: true,
    desc: 'Fresh mango blended with yogurt and a hint of honey',
    ingredients: ['Mango', 'Yogurt', 'Honey', 'Ice']
  },

  // ── Mojitos ──
  {
    id: 56, name: 'Classic Mojito', price: 585, section: 'cold-drinks', type: null, subsection: 'mojitos', active: true,
    desc: 'Traditional Cuban mojito with fresh mint and lime',
    ingredients: ['White Rum', 'Fresh Mint', 'Lime', 'Sugar', 'Soda Water', 'Ice']
  },
  {
    id: 57, name: 'Strawberry Mojito', price: 650, section: 'cold-drinks', type: null, subsection: 'mojitos', active: true,
    desc: 'Sweet strawberry twist on the classic mojito',
    ingredients: ['White Rum', 'Fresh Strawberries', 'Mint', 'Lime', 'Sugar', 'Soda Water', 'Ice']
  },
  {
    id: 58, name: 'Mango Mojito', price: 650, section: 'cold-drinks', type: null, subsection: 'mojitos', active: true,
    desc: 'Tropical mango purée meets refreshing mojito',
    ingredients: ['White Rum', 'Mango Purée', 'Mint', 'Lime', 'Sugar', 'Soda Water', 'Ice']
  },
  {
    id: 59, name: 'Passion Fruit Mojito', price: 715, section: 'cold-drinks', type: null, subsection: 'mojitos', active: true,
    desc: 'Tangy passion fruit with cool mint and lime',
    ingredients: ['White Rum', 'Passion Fruit', 'Mint', 'Lime', 'Sugar', 'Soda Water', 'Ice']
  },
  {
    id: 60, name: 'Blueberry Mojito', price: 650, section: 'cold-drinks', type: null, subsection: 'mojitos', active: true,
    desc: 'Muddled blueberries with classic mojito freshness',
    ingredients: ['White Rum', 'Blueberries', 'Mint', 'Lime', 'Sugar', 'Soda Water', 'Ice']
  },
  {
    id: 61, name: 'Watermelon Mojito', price: 650, section: 'cold-drinks', type: null, subsection: 'mojitos', active: true,
    desc: 'Juicy watermelon blended into a refreshing mojito',
    ingredients: ['White Rum', 'Watermelon Purée', 'Mint', 'Lime', 'Sugar', 'Soda Water', 'Ice']
  },
  {
    id: 62, name: "Yaya's Special Mojito", price: 780, section: 'cold-drinks', type: null, subsection: 'mojitos', active: true,
    desc: 'Our signature mojito with triple fruit blend and a secret twist',
    ingredients: ['White Rum', 'Triple Fruit Blend', 'Mint', 'Lime', 'Secret Syrup', 'Soda Water', 'Ice']
  },

  // ── Soft Drinks ──
  {
    id: 63, name: 'Soda', price: 90, section: 'cold-drinks', type: null, subsection: 'soft-drinks', active: true,
    desc: 'Choice of Coca-Cola, Sprite, Fanta, or Pepsi',
    ingredients: ['Carbonated Water', 'Sugar', 'Flavoring']
  },
  {
    id: 64, name: 'Bottled Water', price: 120, section: 'cold-drinks', type: null, subsection: 'soft-drinks', active: true,
    desc: 'Pure, refreshing bottled water',
    ingredients: ['Purified Water', 'Electrolytes']
  },
  {
    id: 65, name: 'Energy Drink', price: 390, section: 'cold-drinks', type: null, subsection: 'soft-drinks', active: true,
    desc: 'Choice of Red Bull or Monster',
    ingredients: ['Caffeine', 'Taurine', 'B Vitamins', 'Carbonated Water', 'Sugar']
  },
  {
    id: 66, name: 'Sparkling Water', price: 195, section: 'cold-drinks', type: null, subsection: 'soft-drinks', active: true,
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
  'soft-drinks': '🥤 Soft Drinks',
  'burritos': '🌯 Burritos'
};

const menuGrid = document.getElementById('menuGrid');
const catBtns = document.querySelectorAll('.cat-btn');
const subNav = document.getElementById('subNav');
const subBtns = document.querySelectorAll('.sub-btn');

let currentSection = 'all';
let currentType = 'all';
let searchTerm = '';
let ratingsCache = {};

function matchesSearch(item, tokens) {
  const haystack = [
    item.name,
    item.desc,
    (item.ingredients || []).join(' '),
    sectionLabels[item.section] || '',
    subsectionLabels[item.subsection] || ''
  ].join(' ').toLowerCase();
  return tokens.every(token => haystack.includes(token));
}

function renderMenu() {
  const term = searchTerm.trim().toLowerCase();
  const searching = term.length > 0;
  const tokens = searching ? term.split(/\s+/).filter(Boolean) : [];

  let items = menuData.filter(item => item.active !== false);

  if (searching) {
    items = items.filter(item => matchesSearch(item, tokens));
  } else {
    if (currentSection !== 'all') {
      items = items.filter(item => item.section === currentSection);
    }

    if (currentType !== 'all') {
      items = items.filter(item => item.type === currentType);
    }
  }

  items.sort((a, b) => getAvgRating(b.id) - getAvgRating(a.id));

  // Search always looks across the full menu and groups results by section.
  const showSectionHeaders = searching || currentSection === 'all';
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

  if (!html) {
    html = searching
      ? `<div class="menu-empty">No dishes or drinks match “${escAttr(searchTerm.trim())}”.</div>`
      : '<div class="menu-empty">No items available in this category.</div>';
  }

  menuGrid.innerHTML = html;
  applyItemImages();
  updateSearchSummary(items.length);
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

async function loadRatings() {
  if (typeof fbLoadCollection !== 'undefined' && isFirebaseConfigured()) {
    try {
      const all = await fbLoadCollection('ratings');
      if (all) {
        all.forEach(r => { ratingsCache[r.itemId] = r; });
      }
    } catch(e) {}
  }
}

function getMyRating(id) {
  const r = JSON.parse(localStorage.getItem('yayaRatings') || '{}');
  return r[id] || 0;
}

function setMyRating(id, stars) {
  const r = JSON.parse(localStorage.getItem('yayaRatings') || '{}');
  r[id] = stars;
  localStorage.setItem('yayaRatings', JSON.stringify(r));
}

function getAvgRating(itemId) {
  const r = ratingsCache[itemId];
  if (!r || !r.count) return 0;
  return Math.round(r.total / r.count);
}

function getRatingCount(itemId) {
  const r = ratingsCache[itemId];
  return r ? r.count : 0;
}

async function saveRating(itemId, newStars) {
  const oldStars = getMyRating(itemId);
  setMyRating(itemId, newStars);

  if (typeof fbSaveDoc === 'undefined' || !isFirebaseConfigured()) return;

  const r = ratingsCache[itemId] || { itemId, total: 0, count: 0 };
  if (oldStars > 0) {
    r.total += (newStars - oldStars);
  } else if (newStars > 0) {
    r.total += newStars;
    r.count += 1;
  }
  ratingsCache[itemId] = r;
  await fbSaveDoc('ratings', String(itemId), r);
  renderMenu();
}

function renderStars(itemId, section, subsection) {
  if (subsection === 'soft-drinks') return '';
  const avg = getAvgRating(itemId);
  const count = getRatingCount(itemId);
  const myRating = getMyRating(itemId);
  const displayStars = myRating || avg;
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    const filled = i <= displayStars ? 'filled' : '';
    stars += `<span class="star ${filled}" data-item="${itemId}" data-star="${i}">★</span>`;
  }
  const countLabel = count > 0 ? `<span class="rating-count">${count}</span>` : '';
  return `<div class="star-rating" data-item="${itemId}">${stars}${countLabel}</div>`;
}

/* ─── ITEM BACKGROUND IMAGES ─── */
const itemImageCache = new Map();
let cardImageObserver = null;

function escAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/* Wraps the matched search words so results stand out in the menu cards. */
function markMatches(text) {
  const value = String(text == null ? '' : text);
  const term = searchTerm.trim();
  if (!term) return value;

  const pattern = term
    .split(/\s+/)
    .filter(Boolean)
    .map(token => token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');

  if (!pattern) return value;

  return value.replace(new RegExp(`(${pattern})`, 'gi'), '<mark class="search-hit">$1</mark>');
}

async function loadItemImageData(id) {
  if (itemImageCache.has(id)) return itemImageCache.get(id);
  if (typeof fbGetItemImage === 'undefined' ||
      typeof isFirebaseConfigured === 'undefined' ||
      !isFirebaseConfigured()) {
    return null;
  }
  try {
    const data = await fbGetItemImage(id);
    itemImageCache.set(id, data);
    return data;
  } catch (e) {
    return null;
  }
}

function paintCardImage(card, data, position) {
  card.style.backgroundImage = `url("${data}")`;
  card.style.backgroundPosition = position;
  card.classList.remove('image-pending');
  card.classList.add('image-loaded');
}

function clearCardImage(card) {
  card.classList.remove('has-image', 'image-pending', 'image-loaded');
  card.style.backgroundImage = '';
}

async function hydrateCardImage(card) {
  const id = Number(card.dataset.imageId);
  const data = await loadItemImageData(id);

  if (!data) {
    clearCardImage(card);
    return;
  }

  const position = ['top', 'bottom', 'center'].includes(card.dataset.imagePosition)
    ? card.dataset.imagePosition
    : 'center';

  // Linked images load from another website. Wait for them to arrive so the
  // shimmer stays visible, and fall back to a plain card if the link is dead.
  if (/^https?:\/\//i.test(data)) {
    const probe = new Image();
    probe.onload = () => paintCardImage(card, data, position);
    probe.onerror = () => clearCardImage(card);
    probe.src = data;
    return;
  }

  paintCardImage(card, data, position);
}

function applyItemImages() {
  const cards = menuGrid.querySelectorAll('.menu-item[data-image-id]');
  if (!cards.length) return;

  if (!('IntersectionObserver' in window)) {
    cards.forEach(card => hydrateCardImage(card));
    return;
  }

  if (cardImageObserver) cardImageObserver.disconnect();
  cardImageObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      obs.unobserve(entry.target);
      hydrateCardImage(entry.target);
    });
  }, { rootMargin: '300px 0px' });

  cards.forEach(card => cardImageObserver.observe(card));
}

function renderItems(items) {
  return items.map(item => {
    const typeLabel = item.type ? `<span class="item-type ${item.type}">${item.type === 'fasting' ? 'ጾም' : 'የፍስክ'}</span>` : '';
    const ingredients = item.ingredients.map(ing =>
      `<span class="item-ingredient">${markMatches(ing)}</span>`
    ).join('');

    const hasImage = !!(item.hasImage || item.image);
    const position = ['top', 'bottom', 'center'].includes(item.imagePosition) ? item.imagePosition : 'center';
    const lazyImage = hasImage && !item.image;
    const imageAttrs = lazyImage
      ? ` data-image-id="${item.id}" data-image-position="${position}"`
      : '';
    const imageStyle = item.image
      ? ` style="background-image:url('${escAttr(item.image)}');background-position:${position};"`
      : '';
    const imageClass = hasImage ? ` has-image${lazyImage ? ' image-pending' : ''}` : '';

    return `
    <div class="menu-item${imageClass}"${imageAttrs}${imageStyle}>
      <div class="item-header">
        <span class="item-name">${markMatches(item.name)}</span>
        <span class="item-price">${item.price} ETB</span>
      </div>
      <p class="item-desc">${markMatches(item.desc)}</p>
      <div class="item-ingredients">${ingredients}</div>
      <div class="item-footer">
        ${typeLabel}
        ${renderStars(item.id, item.section, item.subsection)}
      </div>
    </div>
  `}).join('');
}

menuGrid.addEventListener('click', (e) => {
  const star = e.target.closest('.star');
  if (star) {
    const itemId = Number(star.dataset.item);
    const rating = Number(star.dataset.star);
    const current = getMyRating(itemId);
    saveRating(itemId, current === rating ? 0 : rating);
  }
});

catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Choosing a category leaves search mode so the filter actually applies.
    resetSearchState();
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
    resetSearchState();
    subBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentType = btn.dataset.type;
    renderMenu();
  });
});

/* ─── MENU SEARCH ─── */
const headerSearchBtn = document.getElementById('headerSearchBtn');
const headerSearch = document.getElementById('headerSearch');
const menuSearchInput = document.getElementById('menuSearchInput');
const menuSearchClear = document.getElementById('menuSearchClear');
const searchSummary = document.getElementById('searchSummary');
let searchOpen = false;

/* Clears the active search but leaves the search field open. */
function resetSearchState() {
  if (!searchTerm) return;
  searchTerm = '';
  if (menuSearchInput) menuSearchInput.value = '';
  if (menuSearchClear) menuSearchClear.hidden = true;
  updateSearchSummary(0);
}

function updateSearchSummary(count) {
  if (!searchSummary) return;
  const term = searchTerm.trim();

  if (!term) {
    searchSummary.textContent = '';
    searchSummary.classList.remove('empty');
    return;
  }

  const isOne = count === 1;
  searchSummary.textContent = count === 0
    ? `No dishes or drinks match “${term}”.`
    : `${count} ${isOne ? 'item' : 'items'} found for “${term}”.`;
  searchSummary.classList.toggle('empty', count === 0);
}

function openSearch() {
  if (!headerSearch) return;
  searchOpen = true;
  headerSearch.hidden = false;
  headerSearchBtn.classList.add('active');
  headerSearchBtn.setAttribute('aria-expanded', 'true');
  if (!menuSearchInput.value) menuSearchClear.hidden = true;
  menuSearchInput.focus();
}

function closeSearch() {
  if (!headerSearch) return;
  searchOpen = false;
  headerSearch.hidden = true;
  headerSearchBtn.classList.remove('active');
  headerSearchBtn.setAttribute('aria-expanded', 'false');
  menuSearchClear.hidden = true;
  menuSearchInput.value = '';
  searchTerm = '';
  renderMenu();
  headerSearchBtn.focus();
}

headerSearchBtn.addEventListener('click', () => {
  if (searchOpen) closeSearch();
  else openSearch();
});

menuSearchInput.addEventListener('input', () => {
  searchTerm = menuSearchInput.value;
  menuSearchClear.hidden = !searchTerm;
  renderMenu();
});

menuSearchClear.addEventListener('click', () => {
  menuSearchInput.value = '';
  searchTerm = '';
  menuSearchClear.hidden = true;
  renderMenu();
  menuSearchInput.focus();
});

document.addEventListener('keydown', (e) => {
  const tag = document.activeElement ? document.activeElement.tagName : '';
  const typing = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';

  if ((e.key === 'k' || e.key === 'K') && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    openSearch();
  } else if (e.key === '/' && !typing) {
    e.preventDefault();
    openSearch();
  } else if (e.key === 'Escape' && searchOpen) {
    closeSearch();
  }
});

function initQR() {
  const currentUrl = window.location.href.startsWith('file://') ? 'https://yayas-house-menu.web.app/' : window.location.href;
  const qrContainer = document.getElementById('qrCode');
  if (!qrContainer) return;
  const img = new Image();
  const apis = [
    'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=',
    'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl='
  ];
  let apiIdx = 0;
  function tryApi() {
    if (apiIdx >= apis.length) {
      qrContainer.innerHTML = '<a href="' + currentUrl + '" style="color:#f0a050;font-weight:600;text-decoration:underline;">Open Menu on Your Phone</a>';
      return;
    }
    img.src = apis[apiIdx] + encodeURIComponent(currentUrl);
    apiIdx++;
  }
  img.onload = function() { qrContainer.innerHTML = ''; qrContainer.appendChild(img); };
  img.onerror = tryApi;
  img.alt = 'QR Code';
  img.width = 180;
  img.height = 180;
  img.style.cssText = 'display:block;margin:0 auto;border-radius:8px;';
  tryApi();
}

/* ─── RESTAURANT DETAILS (editable from the admin panel) ─── */
const RESTAURANT_CACHE_KEY = 'yayaRestaurantInfo';

const restaurantDefaults = {
  name: "Yaya's House",
  tagline: 'Savor the Flavor, Feel the Love',
  location: 'Addis Ababa, Bole-Atlas',
  phone: '+251 911 123 00321',
  email: 'yayashouse@gmail.com',
  mapUrl: '',
  hours: '',
  instagram: '',
  facebook: '',
  telegram: ''
};

const SOCIAL_DEFS = [
  {
    key: 'instagram',
    label: 'Instagram',
    base: 'https://instagram.com/',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none"></circle></svg>'
  },
  {
    key: 'facebook',
    label: 'Facebook',
    base: 'https://facebook.com/',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 21v-7h2.6l.4-3h-3V9.2c0-.9.3-1.5 1.5-1.5h1.6V5.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9V11H9v3h2.5v7z"></path></svg>'
  },
  {
    key: 'telegram',
    label: 'Telegram',
    base: 'https://t.me/',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 4.5-3.2 15c-.2 1-.9 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.2.2-.4.4-.9.4l.3-4.7 8.5-7.7c.4-.3-.1-.5-.6-.2L6.8 12.5 2.2 11c-1-.3-1-1 .2-1.5l17.2-6.6c.8-.3 1.6.2 1.4 1.6z"></path></svg>'
  }
];

function socialHref(value, base) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  if (/^https?:\/\//i.test(raw)) return raw;
  return base + raw.replace(/^@+/, '').replace(/^\/+/, '');
}

function isSafeHttpUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (e) {
    return false;
  }
}

function applyRestaurantInfo(raw) {
  const info = Object.assign({}, restaurantDefaults, raw || {});

  const name = String(info.name || '').trim() || restaurantDefaults.name;
  document.getElementById('restaurantName').textContent = name;
  document.getElementById('footerRestaurantName').textContent = name;
  document.title = name + ' - Digital Menu';

  const splashName = document.querySelector('.splash-name');
  if (splashName) splashName.textContent = name;

  const tagline = String(info.tagline || '').trim();
  const taglineEl = document.getElementById('restaurantTagline');
  taglineEl.textContent = tagline;
  taglineEl.hidden = !tagline;

  let visibleContacts = 0;

  const location = String(info.location || '').trim();
  const locationLink = document.getElementById('restaurantLocationLink');
  document.getElementById('restaurantLocation').textContent = location;
  if (location) {
    const customMap = String(info.mapUrl || '').trim();
    locationLink.href = isSafeHttpUrl(customMap)
      ? customMap
      : 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(location);
    locationLink.target = '_blank';
    locationLink.rel = 'noopener';
    locationLink.hidden = false;
    visibleContacts++;
  } else {
    locationLink.hidden = true;
  }

  const phone = String(info.phone || '').trim();
  const phoneLink = document.getElementById('restaurantPhoneLink');
  document.getElementById('restaurantPhone').textContent = phone;
  if (phone) {
    phoneLink.href = 'tel:' + phone.replace(/[^\d+]/g, '');
    phoneLink.hidden = false;
    visibleContacts++;
  } else {
    phoneLink.hidden = true;
  }

  const email = String(info.email || '').trim();
  const emailLink = document.getElementById('restaurantEmailLink');
  document.getElementById('restaurantEmail').textContent = email;
  if (email) {
    emailLink.href = 'mailto:' + email;
    emailLink.hidden = false;
    visibleContacts++;
  } else {
    emailLink.hidden = true;
  }

  document.getElementById('restaurantContact').hidden = visibleContacts === 0;

  const hours = String(info.hours || '').trim();
  const hoursWrap = document.getElementById('restaurantHoursWrap');
  document.getElementById('restaurantHours').textContent = hours;
  hoursWrap.hidden = !hours;

  const socialWrap = document.getElementById('restaurantSocials');
  socialWrap.innerHTML = '';
  SOCIAL_DEFS.forEach(def => {
    const href = socialHref(info[def.key], def.base);
    if (!href || !isSafeHttpUrl(href)) return;

    const link = document.createElement('a');
    link.className = 'social-link';
    link.href = href;
    link.target = '_blank';
    link.rel = 'noopener';
    link.title = def.label;
    link.setAttribute('aria-label', def.label);
    link.innerHTML = def.icon;
    socialWrap.appendChild(link);
  });
  socialWrap.hidden = socialWrap.childElementCount === 0;
}

async function loadRestaurantInfo() {
  let cached = null;
  try {
    cached = JSON.parse(localStorage.getItem(RESTAURANT_CACHE_KEY) || 'null');
  } catch (e) {
    cached = null;
  }
  if (cached && typeof cached === 'object') {
    applyRestaurantInfo(cached);
  }

  if (typeof isFirebaseConfigured === 'undefined' || !isFirebaseConfigured()) return;

  try {
    const remote = await fbGetDoc('restaurant', 'info');
    if (remote && typeof remote === 'object') {
      applyRestaurantInfo(remote);
      try {
        localStorage.setItem(RESTAURANT_CACHE_KEY, JSON.stringify(remote));
      } catch (e) {}
    }
  } catch (e) {}
}

(async () => {
  const data = await loadMenuData();
  if (data && data.length > 0) {
    menuData = data;
  } else {
    menuData = fallbackMenuData;
  }
  await loadRatings();
  renderMenu();
  initQR();
  loadRestaurantInfo();
  setTimeout(() => {
    const splash = document.getElementById('splash');
    if (splash) splash.classList.add('splash-hidden');
  }, 3000);
})();
