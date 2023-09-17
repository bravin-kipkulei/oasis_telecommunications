// pageLoader.js

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
  pages.services = await loadPage('views/services.html');
  pages.contact = await loadPage('views/contact.html');
  pages.myaccount = await loadPage('views/myaccount.html');
  pages.signUp = await loadPage('views/signUp.html');
  pages.login = await loadPage('views/login.html');
  return pages;
};

//Explain the code above in simple terms
//The code above is a function that loads the pages from the root directory and the views directory
//The function is asynchronous because it uses the await keyword
//The function returns the pages object which contains the pages that have been loaded
//The pages object is a key-value pair object
//The key is the name of the page and the value is the page itself
//The pages object is returned to the main.js file where it is used to display the pages on the screen
//The main.js file is the file that is responsible for displaying the pages on the screen

// Path: main.js

