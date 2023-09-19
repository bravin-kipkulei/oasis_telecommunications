// pageLoader.js

import { render as servicesRender } from '../views/services';
import { render as aboutRender } from '../views/about';
import { render as contactUsRender } from '../views/contactUs';
import { render as myaccountRender } from '../views/myaccount';
import { render as signUpRender } from '../views/signUp';
import { render as loginRender } from '../views/login';
import { render as  homepageRender } from   '../views/homePage';


// 
import { render as userdashboardRender } from '../views/client/accountDashboard';
import { render as  userinvoiceRender }  from '../views/client/invoice';





export const loadPage = async (page) => {
  const response = await fetch(page);
  return response.text();
};

export const loadAllPages = async () => {
  const pages = {};

  // Load index.html from the root directory
  pages.home = await loadPage('index.html');

  // Load other pages from the 'views' directory
  pages.about = aboutRender();
  pages.services = servicesRender();
  pages.contact = contactUsRender();
  pages.myaccount = myaccountRender();
  pages.signUp = signUpRender();
  pages.login = loginRender();
  pages.homepage = homepageRender();
  


  // load pages from client directory
  pages.userDashboard = userdashboardRender();
  pages.invoice = userinvoiceRender();


  return pages;
};
