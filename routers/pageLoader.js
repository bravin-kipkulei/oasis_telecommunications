// pageLoader.js 

export const loadPage = async (page) => {
    const response = await fetch(page);
    return response.text(); 
  };
  
  export const loadAllPages = async () => {
    const pages = {};
    
    pages.home = await loadPage('home.html');
    pages.about = await loadPage('about.html');
    pages.services = await loadPage('services.html'); 
    pages.contact = await loadPage('contact.html');
  
    return pages;
  };