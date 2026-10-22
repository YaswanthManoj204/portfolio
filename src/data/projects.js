// status: 'live' | 'development' | 'concept'. Set repo/live to null to show a disabled placeholder.
export const statusLabel = { live: 'Live demo', development: 'Currently under development', concept: 'Demo concept' }

export const projects = [
  {
    id: 'stockpilot', no: '01', title: 'StockPilot', category: 'SaaS / Inventory Management', preview: 'dashboard', status: 'development',
    description: 'An inventory management platform for wholesalers and distributors that keeps stock, sales and risk signals in one clear dashboard.',
    details: 'Wholesalers often track stock across spreadsheets and memory. StockPilot is being built to replace that with one place to see what is running low, what is selling fast, and where stock may be at risk, so teams can reorder before they run out. The React front end talks to a Django REST API backed by PostgreSQL.',
    tech: ['React', 'Django', 'PostgreSQL', 'REST API'],
    features: ['Stock tracking with low-inventory flags', 'Sales monitoring with trend charts', 'Risk indicators for slow-moving or low stock', 'REST API connecting React and Django'],
    repo: null, live: null,
  },
  {
    id: 'rentradar', no: '02', title: 'RentRadar', category: 'Property Discovery / Web Application', preview: 'listings', status: 'live',
    description: 'A rental discovery app that gathers listings in one place so you can search, filter and compare places faster.',
    details: 'Finding a rental usually means checking many sites and keeping notes by hand. RentRadar pulls listing data together with a Flask backend and BeautifulSoup, then presents it through a lightweight HTML, CSS and JavaScript interface with search controls and side-by-side comparison, so choosing a suitable place takes less time.',
    tech: ['Python', 'Flask', 'BeautifulSoup', 'HTML', 'CSS', 'JavaScript'],
    features: ['Search and filter controls', 'Side-by-side comparison of rental options', 'Listing data collected with BeautifulSoup', 'Deployed as a live demo'],
    repo: 'https://github.com/YaswanthManoj204/RentRadar', live: 'https://rent-radar-demo.vercel.app/',
  },
  {
    id: 'nova-store', no: '03', title: 'Nova Store', category: 'E-commerce', preview: 'store', status: 'live',
    description: 'A full shopping flow built with Django: browse products, open details, fill a cart and check out.',
    details: 'Nova Store walks through the whole buying journey of an online shop. Shoppers browse the catalogue, open a product page, add items to a cart and move through a simple checkout. The backend is Django with PostgreSQL, and the interface uses plain HTML, CSS and JavaScript.',
    tech: ['Django', 'Python', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    features: ['Product catalogue and detail pages', 'Cart add, update and remove interactions', 'Clean checkout experience', 'Deployed as a live demo'],
    repo: 'https://github.com/YaswanthManoj204/Technical-Assessment', live: 'https://nova-store-india.vercel.app/',
  },
  {
    id: 'devflow', no: '04', title: 'DevFlow', category: 'Productivity / Developer Tools', preview: 'board', status: 'concept',
    description: 'A conceptual productivity dashboard for organizing development tasks, tracking project progress, and managing daily work in one place.',
    details: 'A conceptual productivity dashboard for organizing development tasks, tracking project progress, and managing daily work in one place.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Local Storage'],
    features: ['Task board with status columns', 'Progress indicators and filters', 'Tasks saved in Local Storage'],
    repo: null, live: null,
  },
]
