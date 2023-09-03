// router.js
import { loadAllPages } from './pageLoader';
import { pushState, replaceState, onPopState, onPushState } from './history';


const routes = new Map();
routes.set('default', `<h1>404 Not Found</h1>`);

const loadRoutes = async () => {
    const pages = await loadAllPages();
    routes.set('/', pages.home);
    routes.set('/about', pages.about);
    routes.set('/services', pages.services);
    routes.set('/contact', pages.contact);
  };

// Define and export onNavClick handler
export const onNavClick = async (pathname) => {
    const root = document.getElementById('root');
    const pageContent = routes.get(pathname) || routes.get('default');
  
    // Set the root's innerHTML with the page content
    root.innerHTML = pageContent;

    // Update the URL in the address bar
    window.history.pushState({}, pathname, window.location.origin + pathname);
  };

const router = async () => {
    await loadRoutes();
  
    const root = document.getElementById('root');
  
    root.addEventListener('click', async (e) => {
      if (e.target.matches('a.nav-link')) {
        e.preventDefault();
        const pathname = e.target.getAttribute('href');
        await onNavClick(pathname);
      }
    });
  };
  
  router();
