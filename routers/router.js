// router.js

import { loadAllPages } from './pageLoader';

const routes = new Map();
routes.set('default', `<h1>404 Not Found</h1>`); 

const loadRoutes = async () => {

  const pages = await loadAllPages();

  routes.set('/', pages.home);
  routes.set('/about', pages.about); 
  routes.set('/services', pages.services);
  routes.set('/contact', pages.contact);

};

const router = async () => {

  await loadRoutes();

  const root = document.getElementById('root');

  root.addEventListener('click', e => {
    
    if(e.target.matches('a.nav-link')) {
      
      e.preventDefault();
      
      const url = e.target.href;
      const page = routes.get(url);
      
      if(!page) {
        return root.innerHTML = routes.get('default');
      }
      
      root.innerHTML = page;
      
    }
    
  });

};

router();