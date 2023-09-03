// Import the onNavClick function from router.js
import { onNavClick } from '../../routers/router';

const createHeader = () => {
  const header = document.getElementById('header');
  header.innerHTML = `
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand nav-link fs-4" href="/">OASIS</a>
        <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="sidebar offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header text-white border-bottom">
            <h5 class="offcanvas-title " id="offcanvasDarkNavbarLabel">OASIS</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body d-flex flex-lg-row flex-column p-4 p-lg-0"> 
            <ul class="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/services">Services</a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
            <!-- Login/Sign up -->
            <div class="d-flex flex-column  flex-lg-row justify-content-center align-items-center gap-3">
            <a href="/myaccount" id="myAccount" class="text-decoration-none px-3 py-1 nav-link">Selfcare</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `;

  // Add click event listeners to the navigation links
  const navLinks = header.querySelectorAll('a.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent the default link behavior
      const pathname = link.getAttribute('href');
      onNavClick(pathname); // Call onNavClick function

       // Log the class name of the clicked element
       console.log(`Clicked element class name: ${link.className}`)
       console.log(`Clicked element href content: ${pathname}`);
    });
  });

  return header;
};

export { createHeader };
