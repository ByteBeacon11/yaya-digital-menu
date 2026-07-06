const MENU_KEY = 'yayaMenuData';

const defaultMenuData = [
  {id:1,name:'Doro Wat',price:2000,section:'ethiopian',type:'non-fasting',desc:'Spicy chicken stew simmered with berbere spice and hard-boiled eggs, served with injera',ingredients:['Chicken','Berbere','Onions','Hard-boiled Eggs','Injera','Niter Kibbeh']},
  {id:2,name:'Sega Wat',price:1950,section:'ethiopian',type:'non-fasting',desc:'Rich and flavorful beef stew slow-cooked in berbere sauce',ingredients:['Beef','Berbere','Onions','Garlic','Niter Kibbeh','Injera']},
  {id:3,name:'Bozena Shiro',price:600,section:'ethiopian',type:'non-fasting',desc:'Savory shiro stew with tender pieces of beef',ingredients:['Beef','Chickpea Flour','Berbere','Onions','Garlic','Injera']},
  {id:4,name:'Tibs',price:1500,section:'ethiopian',type:'non-fasting',desc:'Sautéed meat with onions, peppers, and aromatic spices',ingredients:['Beef/Lamb','Onions','Bell Peppers','Rosemary','Niter Kibbeh','Injera']},
  {id:5,name:'Teferesho',price:1300,section:'ethiopian',type:'non-fasting',desc:'Traditional Ethiopian tripe dish prepared with spiced butter and herbs',ingredients:['Tripe','Niter Kibbeh','Spiced Butter','Herbs','Injera']},
  {id:6,name:'Kitfo',price:2080,section:'ethiopian',type:'non-fasting',desc:'Minced raw beef seasoned with mitmita and clarified butter',ingredients:['Minced Beef','Mitmita','Clarified Butter','Ayib','Injera']},
  {id:7,name:'Shiro Wat',price:300,section:'ethiopian',type:'fasting',desc:'Creamy chickpea and lentil stew simmered with garlic and berbere',ingredients:['Chickpea Flour','Lentils','Berbere','Garlic','Onions','Injera']},
  {id:8,name:'Misir Wat',price:400,section:'ethiopian',type:'fasting',desc:'Red lentil stew cooked in spicy berbere sauce',ingredients:['Red Lentils','Berbere','Onions','Garlic','Ginger','Injera']},
  {id:9,name:'Gomen',price:350,section:'ethiopian',type:'fasting',desc:'Sautéed collard greens with garlic, ginger, and onions',ingredients:['Collard Greens','Garlic','Ginger','Onions','Olive Oil','Injera']},
  {id:10,name:'Beyaynet',price:400,section:'ethiopian',type:'fasting',desc:'Assorted vegetarian platter with shiro, misir, gomen, and more',ingredients:['Shiro','Misir','Gomen','Lentils','Vegetables','Injera']},
  {id:11,name:'Pasta Besego',price:350,section:'ethiopian',type:'fasting',desc:'Pasta tossed with seasoned minced meat sauce',ingredients:['Pasta','Minced Meat','Tomato Sauce','Onions','Spices']},
  {id:12,name:'Pasta Batikelt',price:350,section:'ethiopian',type:'fasting',desc:'Pasta with fresh sautéed vegetables in light tomato sauce',ingredients:['Pasta','Mixed Vegetables','Tomato Sauce','Garlic','Olive Oil']},
  {id:13,name:'Denech Wat',price:400,section:'ethiopian',type:'fasting',desc:'Hearty potato stew seasoned with turmeric and herbs',ingredients:['Potatoes','Turmeric','Onions','Garlic','Herbs','Injera']},
  {id:14,name:'Ruz Besoya',price:370,section:'ethiopian',type:'fasting',desc:'Rice with flavorful meat sauce and aromatic spices',ingredients:['Rice','Meat Sauce','Spices','Onions','Tomato']},
  {id:15,name:'Tegabino',price:500,section:'ethiopian',type:'fasting',desc:'Traditional thick bean and grain stew, rich and filling',ingredients:['Beans','Grains','Berbere','Onions','Garlic','Injera']},
  {id:16,name:'Chicken Burger',price:1040,section:'international',type:'non-fasting',subsection:'burgers',desc:'Crispy chicken patty with lettuce, tomato, and mayo',ingredients:['Chicken Patty','Lettuce','Tomato','Mayo','Burger Bun','Fries']},
  {id:17,name:'Beef Burger',price:1105,section:'international',type:'non-fasting',subsection:'burgers',desc:'Classic beef patty with lettuce, tomato, and onions',ingredients:['Beef Patty','Lettuce','Tomato','Onions','Burger Bun','Fries']},
  {id:18,name:'Cheese Burger',price:1170,section:'international',type:'non-fasting',subsection:'burgers',desc:'Beef patty topped with melted cheddar cheese',ingredients:['Beef Patty','Cheddar Cheese','Lettuce','Tomato','Burger Bun','Fries']},
  {id:19,name:'Double Cheese Burger',price:1430,section:'international',type:'non-fasting',subsection:'burgers',desc:'Two beef patties with double cheddar cheese',ingredients:['2x Beef Patties','Double Cheddar','Lettuce','Tomato','Burger Bun','Fries']},
  {id:20,name:"Yaya's Special Burger",price:1560,section:'international',type:'non-fasting',subsection:'burgers',desc:'Signature beef patty with caramelized onions, bacon, and special sauce',ingredients:['Beef Patty','Bacon','Caramelized Onions','Special Sauce','Burger Bun','Fries']},
  {id:21,name:"Yaya's Double Special",price:1950,section:'international',type:'non-fasting',subsection:'burgers',desc:'Double the patty, double the cheese – our ultimate burger',ingredients:['2x Beef Patties','Double Cheddar','Bacon','Special Sauce','Burger Bun','Fries']},
  {id:22,name:'Margherita Pizza',price:1170,section:'international',type:'non-fasting',subsection:'pizzas',desc:'Classic tomato sauce, mozzarella, and fresh basil',ingredients:['Tomato Sauce','Mozzarella','Fresh Basil','Olive Oil','Pizza Dough']},
  {id:23,name:'Chicken Pizza',price:1430,section:'international',type:'non-fasting',subsection:'pizzas',desc:'Topped with grilled chicken, bell peppers, and mozzarella',ingredients:['Grilled Chicken','Bell Peppers','Mozzarella','Tomato Sauce','Pizza Dough']},
  {id:24,name:'Beef Pizza',price:1430,section:'international',type:'non-fasting',subsection:'pizzas',desc:'Seasoned beef with onions, olives, and melted cheese',ingredients:['Seasoned Beef','Onions','Olives','Mozzarella','Pizza Dough']},
  {id:25,name:'Tuna Pizza',price:1300,section:'international',type:'non-fasting',subsection:'pizzas',desc:'Tuna, onions, olives, and mozzarella on crispy crust',ingredients:['Tuna','Onions','Olives','Mozzarella','Tomato Sauce','Pizza Dough']},
  {id:26,name:"Yaya's Special Pizza",price:1820,section:'international',type:'non-fasting',subsection:'pizzas',desc:'Our signature pizza loaded with chicken, beef, veggies, and extra cheese',ingredients:['Chicken','Beef','Mixed Veggies','Extra Cheese','Special Sauce','Pizza Dough']},
  {id:27,name:'Chicken Mofo',price:1250,section:'international',type:'non-fasting',subsection:'chickens',desc:'Crispy fried chicken pieces with spicy dipping sauce',ingredients:['Chicken Pieces','Flour Coating','Spices','Dipping Sauce','Fries']},
  {id:28,name:'Grilled Chicken',price:1560,section:'international',type:'non-fasting',subsection:'chickens',desc:'Marinated chicken breast grilled to perfection, served with rice',ingredients:['Chicken Breast','Herb Marinade','Rice','Grilled Vegetables']},
  {id:29,name:'Chicken Wings',price:1100,section:'international',type:'non-fasting',subsection:'chickens',desc:"Crispy wings tossed in Yaya's signature hot sauce",ingredients:['Chicken Wings','Hot Sauce','Butter','Blue Cheese Dip','Celery']},
  {id:30,name:'Chicken Rice',price:1300,section:'international',type:'non-fasting',subsection:'chickens',desc:'Tender chicken pieces stir-fried with seasoned rice and vegetables',ingredients:['Chicken','Rice','Mixed Vegetables','Soy Sauce','Spices']},
  {id:31,name:"Yaya's Special Combo",price:2080,section:'international',type:'non-fasting',subsection:'chickens',desc:'Grilled chicken, wings, fries, and coleslaw – the full experience',ingredients:['Grilled Chicken','Chicken Wings','Fries','Coleslaw','Dipping Sauces']},
  {id:32,name:'Samosa',price:585,section:'international',type:'fasting',desc:'Crispy pastry filled with spiced potatoes and peas',ingredients:['Potatoes','Peas','Spices','Pastry Dough','Oil']},
  {id:33,name:'Spring Rolls',price:650,section:'international',type:'fasting',desc:'Lightly fried rolls stuffed with vegetables and glass noodles',ingredients:['Mixed Vegetables','Glass Noodles','Spring Roll Wrappers','Soy Sauce','Oil']},
  {id:34,name:'Veggie Pizza',price:1300,section:'international',type:'fasting',desc:'Thin-crust pizza topped with fresh seasonal vegetables and mozzarella',ingredients:['Seasonal Vegetables','Mozzarella','Tomato Sauce','Pizza Dough']},
  {id:35,name:'Fruit Salad',price:585,section:'international',type:'fasting',desc:'Fresh seasonal fruits drizzled with honey and lime',ingredients:['Seasonal Fruits','Honey','Lime Juice','Mint']},
  {id:67,name:'Vegetable Pizza',price:700,section:'international',type:'fasting',subsection:'pizzas',desc:'Thin-crust pizza loaded with fresh seasonal vegetables and cheese',ingredients:['Seasonal Vegetables','Mozzarella','Tomato Sauce','Pizza Dough']},
  {id:68,name:'Chicken Burrito',price:900,section:'international',type:'non-fasting',subsection:'burritos',desc:'Flour tortilla filled with seasoned chicken, rice, beans, and cheese',ingredients:['Chicken','Rice','Beans','Cheese','Flour Tortilla','Sour Cream']},
  {id:69,name:'Beef Burrito',price:870,section:'international',type:'non-fasting',subsection:'burritos',desc:'Hearty beef burrito with rice, beans, and melted cheese',ingredients:['Beef','Rice','Beans','Cheese','Flour Tortilla','Salsa']},
  {id:70,name:'Veggie Burrito',price:700,section:'international',type:'fasting',subsection:'burritos',desc:'Fresh vegetable burrito with rice, beans, and guacamole',ingredients:['Mixed Vegetables','Rice','Beans','Guacamole','Flour Tortilla']},
  {id:71,name:"Yaya's Special Burrito",price:1100,section:'international',type:'non-fasting',subsection:'burritos',desc:'Our signature burrito loaded with chicken, beef, and all the fixings',ingredients:['Chicken','Beef','Rice','Beans','Cheese','Guacamole','Sour Cream','Flour Tortilla']},
  {id:36,name:'Macchiato',price:130,section:'hot-drinks',type:null,desc:'Espresso with a touch of steamed milk',ingredients:['Espresso','Steamed Milk']},
  {id:37,name:'Ethiopian Coffee',price:60,section:'hot-drinks',type:null,desc:'Traditional coffee ceremony style, rich and aromatic',ingredients:['Ethiopian Coffee Beans','Water','Sugar (optional)']},
  {id:38,name:'Spiced Tea',price:120,section:'hot-drinks',type:null,desc:'Aromatic black tea with cardamom, cinnamon, and cloves',ingredients:['Black Tea','Cardamom','Cinnamon','Cloves','Honey']},
  {id:39,name:'Tea',price:60,section:'hot-drinks',type:null,desc:'Premium black or herbal tea',ingredients:['Tea Leaves','Hot Water','Sugar (optional)']},
  {id:40,name:'Avocado Juice',price:350,section:'cold-drinks',type:null,subsection:'juices',desc:'Creamy fresh avocado blended with milk and sugar',ingredients:['Avocado','Milk','Sugar','Vanilla']},
  {id:41,name:'Mango Juice',price:300,section:'cold-drinks',type:null,subsection:'juices',desc:'Sweet ripe mango blended to perfection',ingredients:['Ripe Mango','Milk','Sugar','Ice']},
  {id:42,name:'Pineapple Juice',price:390,section:'cold-drinks',type:null,subsection:'juices',desc:'Refreshing pineapple juice with a hint of lime',ingredients:['Pineapple','Lime','Sugar','Ice']},
  {id:43,name:'Orange Juice',price:390,section:'cold-drinks',type:null,subsection:'juices',desc:'Freshly squeezed orange juice',ingredients:['Fresh Oranges','Sugar (optional)','Ice']},
  {id:44,name:"Yaya's Special Juice",price:585,section:'cold-drinks',type:null,subsection:'juices',desc:'Our signature blend of tropical fruits and berries',ingredients:['Tropical Fruits','Berries','Honey','Ice']},
  {id:45,name:'Strawberry Milkshake',price:585,section:'cold-drinks',type:null,subsection:'milkshakes',desc:'Creamy strawberry milkshake topped with whipped cream',ingredients:['Strawberries','Vanilla Ice Cream','Milk','Whipped Cream']},
  {id:46,name:'Chocolate Milkshake',price:585,section:'cold-drinks',type:null,subsection:'milkshakes',desc:'Rich chocolate milkshake with a fudge swirl',ingredients:['Chocolate Ice Cream','Milk','Chocolate Fudge','Whipped Cream']},
  {id:47,name:'Vanilla Milkshake',price:520,section:'cold-drinks',type:null,subsection:'milkshakes',desc:'Classic vanilla milkshake made with real vanilla bean',ingredients:['Vanilla Ice Cream','Milk','Vanilla Bean','Whipped Cream']},
  {id:48,name:'Banana Milkshake',price:585,section:'cold-drinks',type:null,subsection:'milkshakes',desc:'Smooth banana milkshake with a touch of cinnamon',ingredients:['Banana','Vanilla Ice Cream','Milk','Cinnamon','Whipped Cream']},
  {id:49,name:'Oreo Milkshake',price:650,section:'cold-drinks',type:null,subsection:'milkshakes',desc:'Crushed Oreo cookies blended in creamy vanilla milkshake',ingredients:['Oreo Cookies','Vanilla Ice Cream','Milk','Whipped Cream']},
  {id:50,name:"Yaya's Special Shake",price:715,section:'cold-drinks',type:null,subsection:'milkshakes',desc:'Our signature mix of chocolate, caramel, and brownie bits',ingredients:['Chocolate','Caramel','Brownie Bits','Ice Cream','Milk','Whipped Cream']},
  {id:51,name:'Mixed Berry Smoothie',price:585,section:'cold-drinks',type:null,subsection:'smoothies',desc:'Blend of strawberries, blueberries, and raspberries with yogurt',ingredients:['Strawberries','Blueberries','Raspberries','Yogurt','Honey']},
  {id:52,name:'Tropical Smoothie',price:585,section:'cold-drinks',type:null,subsection:'smoothies',desc:'Mango, pineapple, and coconut blended with yogurt',ingredients:['Mango','Pineapple','Coconut Milk','Yogurt','Honey']},
  {id:53,name:'Green Smoothie',price:520,section:'cold-drinks',type:null,subsection:'smoothies',desc:'Spinach, banana, apple, and ginger – healthy and refreshing',ingredients:['Spinach','Banana','Apple','Ginger','Lime']},
  {id:54,name:'Peanut Butter Smoothie',price:650,section:'cold-drinks',type:null,subsection:'smoothies',desc:'Creamy peanut butter, banana, and chocolate protein blend',ingredients:['Peanut Butter','Banana','Chocolate Protein','Milk','Honey']},
  {id:55,name:'Mango Smoothie',price:585,section:'cold-drinks',type:null,subsection:'smoothies',desc:'Fresh mango blended with yogurt and a hint of honey',ingredients:['Mango','Yogurt','Honey','Ice']},
  {id:56,name:'Classic Mojito',price:585,section:'cold-drinks',type:null,subsection:'mojitos',desc:'Traditional Cuban mojito with fresh mint and lime',ingredients:['White Rum','Fresh Mint','Lime','Sugar','Soda Water','Ice']},
  {id:57,name:'Strawberry Mojito',price:650,section:'cold-drinks',type:null,subsection:'mojitos',desc:'Sweet strawberry twist on the classic mojito',ingredients:['White Rum','Fresh Strawberries','Mint','Lime','Sugar','Soda Water','Ice']},
  {id:58,name:'Mango Mojito',price:650,section:'cold-drinks',type:null,subsection:'mojitos',desc:'Tropical mango purée meets refreshing mojito',ingredients:['White Rum','Mango Purée','Mint','Lime','Sugar','Soda Water','Ice']},
  {id:59,name:'Passion Fruit Mojito',price:715,section:'cold-drinks',type:null,subsection:'mojitos',desc:'Tangy passion fruit with cool mint and lime',ingredients:['White Rum','Passion Fruit','Mint','Lime','Sugar','Soda Water','Ice']},
  {id:60,name:'Blueberry Mojito',price:650,section:'cold-drinks',type:null,subsection:'mojitos',desc:'Muddled blueberries with classic mojito freshness',ingredients:['White Rum','Blueberries','Mint','Lime','Sugar','Soda Water','Ice']},
  {id:61,name:'Watermelon Mojito',price:650,section:'cold-drinks',type:null,subsection:'mojitos',desc:'Juicy watermelon blended into a refreshing mojito',ingredients:['White Rum','Watermelon Purée','Mint','Lime','Sugar','Soda Water','Ice']},
  {id:62,name:"Yaya's Special Mojito",price:780,section:'cold-drinks',type:null,subsection:'mojitos',desc:'Our signature mojito with triple fruit blend and a secret twist',ingredients:['White Rum','Triple Fruit Blend','Mint','Lime','Secret Syrup','Soda Water','Ice']},
  {id:63,name:'Soda',price:90,section:'cold-drinks',type:null,subsection:'soft-drinks',desc:'Choice of Coca-Cola, Sprite, Fanta, or Pepsi',ingredients:['Carbonated Water','Sugar','Flavoring']},
  {id:64,name:'Bottled Water',price:120,section:'cold-drinks',type:null,subsection:'soft-drinks',desc:'Pure, refreshing bottled water',ingredients:['Purified Water','Electrolytes']},
  {id:65,name:'Energy Drink',price:390,section:'cold-drinks',type:null,subsection:'soft-drinks',desc:'Choice of Red Bull or Monster',ingredients:['Caffeine','Taurine','B Vitamins','Carbonated Water','Sugar']},
  {id:66,name:'Sparkling Water',price:195,section:'cold-drinks',type:null,subsection:'soft-drinks',desc:'Refreshing carbonated mineral water',ingredients:['Carbonated Water','Natural Minerals']}
];

/* ── DATA ABSTRACTION LAYER ── */
function lsLoad(key, fallback) {
  const stored = localStorage.getItem(key);
  if (stored) {
    try { return JSON.parse(stored); } catch(e) {}
  }
  return fallback;
}

function lsSave(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

async function loadMenuData() {
  const fb = isFirebaseConfigured();
  if (fb) {
    const fbData = await fbLoadCollection('menuItems');
    if (fbData && fbData.length > 0) return fbData;
  }
  return lsLoad(MENU_KEY, JSON.parse(JSON.stringify(defaultMenuData)));
}

async function saveMenuData(data) {
  lsSave(MENU_KEY, data);
  if (isFirebaseConfigured()) {
    await fbSaveCollection('menuItems', data);
  }
}

async function syncMenuToDb() {
  if (!isFirebaseConfigured()) return;
  const fbData = await fbLoadCollection('menuItems');
  const localData = lsLoad(MENU_KEY, null);
  if (!localData) {
    if (fbData && fbData.length > 0) {
      lsSave(MENU_KEY, fbData);
    } else {
      await fbSaveCollection('menuItems', defaultMenuData);
      lsSave(MENU_KEY, defaultMenuData);
    }
  } else if (!fbData || fbData.length === 0) {
    await fbSaveCollection('menuItems', localData);
  }
}

let menuData = [];
let currentUserRole = null;
let currentUserEmail = null;

const sectionLabels = {
  ethiopian: 'Ethiopian Foods',
  international: 'Outside Ethiopia',
  'hot-drinks': 'Hot Drinks',
  'cold-drinks': 'Drinks & Soft Drinks'
};

const subsectionLabels = {
  burgers: 'Burgers', pizzas: 'Pizzas', chickens: 'Chickens',
  juices: 'Juices', milkshakes: 'Milkshakes', smoothies: 'Smoothies',
  mojitos: 'Mojitos', 'soft-drinks': 'Soft Drinks', burritos: 'Burritos'
};

let searchQuery = '';

/* ─── DOM REFS ─── */
const loginScreen = document.getElementById('loginScreen');
const dashboardScreen = document.getElementById('dashboardScreen');

const setupForm = document.getElementById('setupForm');
const loginForm = document.getElementById('loginForm');
const requestForm = document.getElementById('requestForm');

const setupError = document.getElementById('setupError');
const loginError = document.getElementById('loginError');
const requestError = document.getElementById('requestError');
const requestSuccess = document.getElementById('requestSuccess');

const switchToRequest = document.getElementById('switchToRequest');
const switchToLoginFromReq = document.getElementById('switchToLoginFromReq');
const switchToLoginFromSetup = document.getElementById('switchToLoginFromSetup');

const logoutBtn = document.getElementById('logoutBtn');
const sidebarUser = document.getElementById('sidebarUser');
const sidebarToggle = document.getElementById('sidebarToggle');
const adminSidebar = document.getElementById('adminSidebar');
const pageTitle = document.getElementById('pageTitle');
const dbStatus = document.getElementById('dbStatus');

const staffNavLink = document.getElementById('staffNavLink');
const pendingBadgeSide = document.getElementById('pendingBadgeSide');

const dashTotalItems = document.getElementById('dashTotalItems');
const dashTotalStaff = document.getElementById('dashTotalStaff');
const dashPendingStaff = document.getElementById('dashPendingStaff');
const dashCategories = document.getElementById('dashCategories');
const dashDbPrompt = document.getElementById('dashDbPrompt');

const menuTableBody = document.getElementById('menuTableBody');
const itemCount = document.getElementById('itemCount');
const searchInput = document.getElementById('searchInput');
const addItemBtn = document.getElementById('addItemBtn');
const exportBtn = document.getElementById('exportBtn');
const emptyState = document.getElementById('emptyState');

const staffTableBody = document.getElementById('staffTableBody');
const staffCount = document.getElementById('staffCount');
const staffEmpty = document.getElementById('staffEmpty');

const itemModal = document.getElementById('itemModal');
const modalTitle = document.getElementById('modalTitle');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelModalBtn = document.getElementById('cancelModalBtn');
const itemForm = document.getElementById('itemForm');
const editId = document.getElementById('editId');
const itemName = document.getElementById('itemName');
const itemPrice = document.getElementById('itemPrice');
const itemSection = document.getElementById('itemSection');
const itemType = document.getElementById('itemType');
const itemSubsection = document.getElementById('itemSubsection');
const itemDesc = document.getElementById('itemDesc');
const itemIngredients = document.getElementById('itemIngredients');

const dbConfigForm = document.getElementById('dbConfigForm');
const testDbBtn = document.getElementById('testDbBtn');
const dbConfigStatus = document.getElementById('dbConfigStatus');

/* ─── AUTH WITH FIREBASE ─── */
function showLoginForm() {
  setupForm.style.display = 'none';
  requestForm.style.display = 'none';
  loginForm.style.display = 'block';
}

function showSetupForm() {
  loginForm.style.display = 'none';
  requestForm.style.display = 'none';
  setupForm.style.display = 'block';
}

function showRequestForm() {
  loginForm.style.display = 'none';
  setupForm.style.display = 'none';
  requestForm.style.display = 'block';
  requestSuccess.style.display = 'none';
  requestError.textContent = '';
}

async function checkHasManager() {
  if (localStorage.getItem('yaya_hasManager') === 'true') return true;
  if (!isFirebaseConfigured()) return false;
  try {
    const config = await fbGetDoc('_config', 'setup');
    if (config && config.hasManager) {
      localStorage.setItem('yaya_hasManager', 'true');
      return true;
    }
    return false;
  } catch(e) {
    return localStorage.getItem('yaya_hasManager') === 'true';
  }
}

function updateSidebarUI() {
  sidebarUser.textContent = currentUserEmail
    ? (currentUserRole === 'manager' ? currentUserEmail + ' (Manager)' : currentUserEmail + ' (Staff)')
    : 'Staff';
  staffNavLink.style.display = currentUserRole === 'manager' ? 'flex' : 'none';
  updateDbStatus();
}

let authReady = false;

async function requireAuth() {
  if (!authReady) {
    const hasManager = await checkHasManager();
    if (!hasManager) {
      showSetupForm();
      loginScreen.style.display = 'flex';
      dashboardScreen.style.display = 'none';
      return false;
    }
    return false;
  }

  const user = getCurrentUser();
  if (!user) {
    showLoginForm();
    loginScreen.style.display = 'flex';
    dashboardScreen.style.display = 'none';
    return false;
  }

  currentUserEmail = user.email;
  const roleDoc = await fbGetDoc('staff', user.uid);
  currentUserRole = roleDoc ? roleDoc.role : null;

  if (currentUserRole === 'manager') {
    localStorage.setItem('yaya_hasManager', 'true');
  }

  if (currentUserRole !== 'manager' && currentUserRole !== 'staff') {
    await fbSignOut();
    showLoginForm();
    loginError.textContent = 'Your account is not approved yet.';
    loginScreen.style.display = 'flex';
    dashboardScreen.style.display = 'none';
    currentUserRole = null;
    currentUserEmail = null;
    return false;
  }

  loginScreen.style.display = 'none';
  dashboardScreen.style.display = 'flex';
  updateSidebarUI();
  return true;
}

/* ─── AUTH STATE LISTENER ─── */
onAuthChanged(async (user) => {
  authReady = true;
  if (user) {
    const loggedIn = await requireAuth();
    if (loggedIn) {
      menuData = await loadMenuData();
      navigateTo('dashboard');
    }
  } else {
    currentUserRole = null;
    currentUserEmail = null;
    const hasManager = await checkHasManager();
    if (hasManager) {
      showLoginForm();
    } else {
      showSetupForm();
    }
    loginScreen.style.display = 'flex';
    dashboardScreen.style.display = 'none';
  }
});

/* ─── SIDEBAR NAV ─── */
function navigateTo(page) {
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  document.querySelectorAll('.admin-page').forEach(p => p.classList.remove('active'));

  const link = document.querySelector(`.sidebar-link[data-page="${page}"]`);
  if (link) link.classList.add('active');

  const pageEl = document.getElementById(`page-${page}`);
  if (pageEl) pageEl.classList.add('active');

  const titles = { dashboard: 'Dashboard', menu: 'Menu Items', staff: 'Staff Accounts', settings: 'Settings' };
  pageTitle.textContent = titles[page] || 'Dashboard';

  if (page === 'dashboard') renderDashboard();
  else if (page === 'menu') renderTable();
  else if (page === 'staff') renderStaffTable();
  else if (page === 'settings') loadSettingsForm();

  if (window.innerWidth <= 768) {
    adminSidebar.classList.remove('open');
  }
}

document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', () => navigateTo(link.dataset.page));
});

sidebarToggle.addEventListener('click', () => {
  adminSidebar.classList.toggle('open');
});

document.addEventListener('click', (e) => {
  if (window.innerWidth <= 768 && !adminSidebar.contains(e.target) && e.target !== sidebarToggle) {
    adminSidebar.classList.remove('open');
  }
});

/* ─── AUTH HANDLERS ─── */
switchToRequest.addEventListener('click', (e) => { e.preventDefault(); loginError.textContent = ''; showRequestForm(); });
switchToLoginFromReq.addEventListener('click', (e) => { e.preventDefault(); requestError.textContent = ''; requestSuccess.style.display = 'none'; showLoginForm(); });
switchToLoginFromSetup.addEventListener('click', (e) => { e.preventDefault(); setupError.textContent = ''; showLoginForm(); });

setupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('setupEmail').value.trim();
  const p = document.getElementById('setupPassword').value;
  const c = document.getElementById('setupConfirm').value;

  if (!email || !p || !c) { setupError.textContent = 'Please fill in all fields.'; return; }
  if (p !== c) { setupError.textContent = 'Passwords do not match.'; return; }
  if (p.length < 4) { setupError.textContent = 'Password must be at least 4 characters.'; return; }

  try {
    const user = await fbSignUp(email, p);
    await fbSaveDoc('staff', user.uid, { email, role: 'manager' });
    await fbSaveDoc('_config', 'setup', { hasManager: true });
    localStorage.setItem('yaya_hasManager', 'true');
    currentUserEmail = email;
    currentUserRole = 'manager';

    setupError.textContent = '';
    document.getElementById('setupEmail').value = '';
    document.getElementById('setupPassword').value = '';
    document.getElementById('setupConfirm').value = '';

    authReady = true;
    loginScreen.style.display = 'none';
    dashboardScreen.style.display = 'flex';
    updateSidebarUI();
    menuData = await loadMenuData();
    navigateTo('dashboard');
  } catch (err) {
    setupError.textContent = err.message;
  }
});

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const p = document.getElementById('loginPassword').value;

  if (!email || !p) { loginError.textContent = 'Please fill in all fields.'; return; }

  try {
    await fbSignIn(email, p);
    loginError.textContent = '';
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
  } catch (err) {
    loginError.textContent = err.message;
  }
});

requestForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('reqEmail').value.trim();
  const p = document.getElementById('reqPassword').value;
  const c = document.getElementById('reqConfirm').value;

  if (!email || !p || !c) { requestError.textContent = 'Please fill in all fields.'; return; }
  if (p !== c) { requestError.textContent = 'Passwords do not match.'; return; }
  if (p.length < 4) { requestError.textContent = 'Password must be at least 4 characters.'; return; }

  try {
    const user = await fbSignUp(email, p);
    await fbSaveDoc('staff', user.uid, { email, role: 'pending' });
    await fbSignOut();

    requestError.textContent = '';
    document.getElementById('reqEmail').value = '';
    document.getElementById('reqPassword').value = '';
    document.getElementById('reqConfirm').value = '';
    requestSuccess.style.display = 'block';
    requestSuccess.textContent = 'Request submitted! The manager will approve your account shortly.';
  } catch (err) {
    requestError.textContent = err.message;
  }
});

logoutBtn.addEventListener('click', async () => {
  await fbSignOut();
  currentUserRole = null;
  currentUserEmail = null;
  requireAuth();
});

/* ─── DASHBOARD ─── */
async function renderDashboard() {
  menuData = await loadMenuData();
  const staff = await fbLoadCollection('staff') || [];
  const sections = [...new Set(menuData.map(i => i.section))];

  dashTotalItems.textContent = menuData.length;
  dashTotalStaff.textContent = staff.filter(s => s.role === 'staff' || s.role === 'manager').length;
  dashPendingStaff.textContent = staff.filter(s => s.role === 'pending').length;
  dashCategories.textContent = sections.length;

  if (isFirebaseConfigured()) {
    dashDbPrompt.style.display = 'none';
  } else {
    dashDbPrompt.style.display = 'flex';
  }
}

/* ─── DB STATUS ─── */
function updateDbStatus() {
  if (isFirebaseConfigured()) {
    dbStatus.textContent = 'DB: Online';
    dbStatus.className = 'db-status online';
  } else {
    dbStatus.textContent = 'DB: Local';
    dbStatus.className = 'db-status offline';
  }
}

/* ─── SETTINGS ─── */
function loadSettingsForm() {
  const config = getDbConfig();
  if (config) {
    document.getElementById('fbProjectId').value = config.projectId || '';
    document.getElementById('fbApiKey').value = config.apiKey || '';
    document.getElementById('fbAuthDomain').value = config.authDomain || '';
    document.getElementById('fbStorageBucket').value = config.storageBucket || '';
    document.getElementById('fbSenderId').value = config.messagingSenderId || '';
    document.getElementById('fbAppId').value = config.appId || '';
  }
  dbConfigStatus.textContent = '';
}

dbConfigForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const config = {
    projectId: document.getElementById('fbProjectId').value.trim(),
    apiKey: document.getElementById('fbApiKey').value.trim(),
    authDomain: document.getElementById('fbAuthDomain').value.trim(),
    storageBucket: document.getElementById('fbStorageBucket').value.trim(),
    messagingSenderId: document.getElementById('fbSenderId').value.trim(),
    appId: document.getElementById('fbAppId').value.trim()
  };

  if (!config.projectId || !config.apiKey) {
    dbConfigStatus.textContent = 'Project ID and API Key are required.';
    dbConfigStatus.style.color = '#c62828';
    return;
  }

  saveDbConfig(config);
  dbConfigStatus.textContent = 'Testing connection...';
  dbConfigStatus.style.color = '#e65100';

  const result = await testFirebaseConnection();
  if (result.success) {
    dbConfigStatus.textContent = 'Connected! Syncing data to Firebase...';
    dbConfigStatus.style.color = '#2e7d32';
    await syncMenuToDb();
    updateDbStatus();
    setTimeout(() => navigateTo('dashboard'), 1500);
  } else {
    dbConfigStatus.textContent = 'Connection failed: ' + (result.error || 'Check your config values.');
    dbConfigStatus.style.color = '#c62828';
  }
});

testDbBtn.addEventListener('click', async () => {
  dbConfigStatus.textContent = 'Testing...';
  dbConfigStatus.style.color = '#e65100';
  const result = await testFirebaseConnection();
  dbConfigStatus.textContent = result.success
    ? 'Connection successful!'
    : 'Failed: ' + (result.error || 'check your config');
  dbConfigStatus.style.color = result.success ? '#2e7d32' : '#c62828';
});

/* ─── STAFF ─── */
async function updatePendingBadge() {
  const staff = await fbLoadCollection('staff') || [];
  const pending = staff.filter(a => a.role === 'pending').length;
  pendingBadgeSide.style.display = pending > 0 ? 'inline' : 'none';
  pendingBadgeSide.textContent = pending;
}

async function renderStaffTable() {
  const accounts = await fbLoadCollection('staff') || [];
  staffCount.textContent = accounts.length;
  updatePendingBadge();

  if (accounts.length === 0) {
    staffTableBody.innerHTML = '';
    staffEmpty.style.display = 'block';
    return;
  }
  staffEmpty.style.display = 'none';

  staffTableBody.innerHTML = accounts.map(acc => {
    const role = acc.role || 'pending';
    const statusClass = role === 'manager' ? 'approved' : role === 'staff' ? 'approved' : 'pending';
    const statusLabel = role === 'manager' ? 'Manager' : role === 'staff' ? 'Approved' : 'Pending';
    let actions = '';

    if (currentUserRole === 'manager' && role !== 'manager') {
      if (role === 'pending') {
        actions = `
          <button class="admin-btn admin-btn-sm admin-btn-approve" data-action="approve" data-uid="${acc._id || acc.email}">Approve</button>
          <button class="admin-btn admin-btn-sm admin-btn-reject" data-action="reject" data-uid="${acc._id || acc.email}">Reject</button>
        `;
      } else if (role === 'staff') {
        actions = `<button class="admin-btn admin-btn-sm admin-btn-delete" data-action="delete" data-uid="${acc._id || acc.email}">Remove</button>`;
      }
    }

    return `<tr>
      <td class="col-name">${escHtml(acc.email)}</td>
      <td><span class="admin-status-badge ${statusClass}">${statusLabel}</span></td>
      <td class="col-actions">${actions}</td>
    </tr>`;
  }).join('');

  staffTableBody.querySelectorAll('[data-action="approve"]').forEach(btn => {
    btn.addEventListener('click', () => { approveStaff(btn.dataset.uid); });
  });
  staffTableBody.querySelectorAll('[data-action="reject"]').forEach(btn => {
    btn.addEventListener('click', () => rejectStaff(btn.dataset.uid));
  });
  staffTableBody.querySelectorAll('[data-action="delete"]').forEach(btn => {
    btn.addEventListener('click', () => deleteStaff(btn.dataset.uid));
  });
}

async function approveStaff(uid) {
  const doc = await fbGetDoc('staff', uid);
  if (doc) {
    doc.role = 'staff';
    await fbSaveDoc('staff', uid, doc);
    renderStaffTable();
  }
}

async function rejectStaff(uid) {
  const doc = await fbGetDoc('staff', uid);
  if (!doc) return;
  if (!confirm(`Reject ${doc.email}? They will not be able to access the admin panel.`)) return;
  await fbDeleteDoc('staff', uid);
  renderStaffTable();
}

async function deleteStaff(uid) {
  const doc = await fbGetDoc('staff', uid);
  if (!doc) return;
  if (!confirm(`Remove ${doc.email}? They will no longer be able to access the admin panel.`)) return;
  await fbDeleteDoc('staff', uid);
  renderStaffTable();
}

/* ─── MENU CRUD ─── */
function getNextId() {
  return menuData.length > 0 ? Math.max(...menuData.map(i => i.id)) + 1 : 1;
}

function renderTable() {
  const query = searchQuery.toLowerCase().trim();
  let filtered = menuData;
  if (query) {
    filtered = menuData.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query) ||
      item.section.toLowerCase().includes(query) ||
      (item.subsection && item.subsection.toLowerCase().includes(query)) ||
      item.ingredients.some(ing => ing.toLowerCase().includes(query)) ||
      String(item.price).includes(query)
    );
  }

  itemCount.textContent = filtered.length + ' items';

  if (filtered.length === 0) {
    menuTableBody.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }
  emptyState.style.display = 'none';

  menuTableBody.innerHTML = filtered.map(item => {
    const sectionLabel = sectionLabels[item.section] || item.section;
    const typeLabel = item.type ? (item.type === 'fasting' ? 'ጾም' : 'የፍስክ') : '—';
    const subLabel = item.subsection ? (subsectionLabels[item.subsection] || item.subsection) : '—';
    const ingredientsStr = item.ingredients.join(', ');
    return `<tr>
      <td class="col-id">${item.id}</td>
      <td class="col-name">${escHtml(item.name)}</td>
      <td>${item.price}</td>
      <td>${sectionLabel}</td>
      <td>${typeLabel}</td>
      <td>${subLabel}</td>
      <td class="col-desc">${escHtml(item.desc)}</td>
      <td class="col-ingredients">${escHtml(ingredientsStr)}</td>
      <td class="col-actions">
        <button class="admin-btn admin-btn-sm admin-btn-edit" data-id="${item.id}">Edit</button>
        <button class="admin-btn admin-btn-sm admin-btn-delete" data-id="${item.id}">Delete</button>
      </td>
    </tr>`;
  }).join('');

  document.querySelectorAll('.admin-btn-edit').forEach(btn => {
    btn.addEventListener('click', () => openEditModal(Number(btn.dataset.id)));
  });
  document.querySelectorAll('.admin-btn-delete').forEach(btn => {
    btn.addEventListener('click', () => deleteItem(Number(btn.dataset.id)));
  });
}

function escHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

searchInput.addEventListener('input', () => {
  searchQuery = searchInput.value;
  renderTable();
});

addItemBtn.addEventListener('click', () => openAddModal());

function openAddModal() {
  modalTitle.textContent = 'Add New Item';
  editId.value = '';
  itemForm.reset();
  itemModal.style.display = 'flex';
}

function openEditModal(id) {
  const item = menuData.find(i => i.id === id);
  if (!item) return;
  modalTitle.textContent = 'Edit Item';
  editId.value = id;
  itemName.value = item.name;
  itemPrice.value = item.price;
  itemSection.value = item.section;
  itemType.value = item.type || '';
  itemSubsection.value = item.subsection || '';
  itemDesc.value = item.desc;
  itemIngredients.value = item.ingredients.join(', ');
  itemModal.style.display = 'flex';
}

function closeModal() { itemModal.style.display = 'none'; }

closeModalBtn.addEventListener('click', closeModal);
cancelModalBtn.addEventListener('click', closeModal);
itemModal.addEventListener('click', (e) => { if (e.target === itemModal) closeModal(); });

itemForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = editId.value ? Number(editId.value) : getNextId();
  const ingredients = itemIngredients.value.split(',').map(s => s.trim()).filter(s => s);

  const item = {
    id, name: itemName.value.trim(), price: Number(itemPrice.value),
    section: itemSection.value, type: itemType.value || null,
    subsection: itemSubsection.value || undefined,
    desc: itemDesc.value.trim(), ingredients
  };
  if (item.subsection === undefined) delete item.subsection;

  if (editId.value) {
    const idx = menuData.findIndex(i => i.id === Number(editId.value));
    if (idx !== -1) menuData[idx] = item;
  } else {
    menuData.push(item);
  }

  closeModal();
  await saveMenuData(menuData);
  renderTable();
});

async function deleteItem(id) {
  const item = menuData.find(i => i.id === id);
  if (!item) return;
  if (!confirm(`Delete "${item.name}"? This cannot be undone.`)) return;
  menuData = menuData.filter(i => i.id !== id);
  await saveMenuData(menuData);
  renderTable();
}

exportBtn.addEventListener('click', () => {
  const json = JSON.stringify(menuData, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'yaya-menu-data.json';
  document.body.appendChild(a); a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

/* ─── INIT ─── */
initFirebase();
