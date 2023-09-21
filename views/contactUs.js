// contact us view

export const render = () => {
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="container mt-5">
      <h1>Contact Us</h1>
      <p>Feel free to contact us using the form below:</p>
      <form id="contact-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary contact-btn">Submit</button>
      </form>
      <div id="success-message" class="mt-3"></div>
    </div>
    <style>
      /*  shadow and padding to the submit button */
      .contact-btn {
        box-shadow: 0 2px 4px rgba(128, 128, 128, 0.34);
        padding: 10px 20px;
      }
    </style>
  `;

  
  const contactForm = div.querySelector("#contact-form");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const successMessage = div.querySelector("#success-message");
    successMessage.innerHTML = "<div class='alert alert-success'>Form submitted successfully!</div>";
   
  });

  return div;
};
