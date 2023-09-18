// pageLoader.js

import { render as servicesRender } from '../views/services'; // Import the render function from services.js

export const loadPage = async (page) => {
  const response = await fetch(page);
  return response.text();
};

export const loadAllPages = async () => {
  const pages = {};

  // Load index.html from the root directory
  pages.home = await loadPage('index.html');

  // Load other pages from the 'views' directory
  pages.about = await loadPage('views/about.html');
  // Use the render function from services.js for the services page
  pages.services = servicesRender();
  pages.contact = await loadPage('views/contact.html');
  pages.myaccount = await loadPage('views/myaccount.html');
  pages.signUp = await loadPage('views/signUp.html');
  pages.login = await loadPage('views/login.html');
  
  return pages;
};
