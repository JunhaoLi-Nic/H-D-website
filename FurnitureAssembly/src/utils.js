export const createPageUrl = (pageName) => {
  const routes = {
    'Home': '/',
    'Services': '/services',
    'Quote': '/quote',
    'About': '/about',
    'Contact': '/contact'
  };
  
  return routes[pageName] || '/';
}; 