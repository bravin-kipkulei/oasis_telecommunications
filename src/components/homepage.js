
const createHomePage = () => {
    const header = document.getElementById('main');
    header.innerHTML = `
    <div class="content d-flex align-items-center bg-light">
      <h2 class="w-100 text-center">Footer #6</h2>
    </div>
    
    `;
  
    return header;
  };
 
  
  export { createHomePage };
  