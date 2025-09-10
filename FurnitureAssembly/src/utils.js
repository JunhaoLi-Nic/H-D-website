export const createPageUrl = (pageName) => {
  const routes = {
    'Home': '/',
    'Services': '/services',
    'Quote': '/quote',
    'Reviews': '/reviews',
    'About': '/about',
    'Contact': '/contact'
  };
  
  return routes[pageName] || '/';
}; 