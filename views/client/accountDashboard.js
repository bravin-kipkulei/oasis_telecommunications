const render = () => {


  
  const div = document.createElement("div");
  div.innerHTML = `
  <div class="container mt-5">
  <h1>User Account Dashboard</h1>
  

  <div class="card card-body w-card">
    <div class="w-container">
      <!-- Content Goes Here -->
    </div>
  </div>

  <!-- Order History Section -->
  <div class="orders">
    <table class="table table-striped">
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p class="font-weight-normal">Account #(MBR) 6434</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

       <!-- User Profile Section -->
  <div class="user-profile">
    <h2 class="font-weight-bold">User Profile</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-body">
          <h3 >Profile Information</h3>
            <!-- left side Section -->
            <div class="d-flex">
              
              <div class="d-flex p-2 justify-content-around">
                <div class="row">
                  <p>John Doe</p>
                  <p>Customer ID: 66313</p>
                  <p>Email: johndoe@example.com</p>
                  <p>Username: johndoe123</p>
                  <span class="font-weight-light">customer since February 8, 2023</span>
                </div>
                <!-- Right side -->
                <div>
                  <p><span></span>Nakuru, Kenya</p>
                  <p><span></span>(+254-7121212121)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3 justify-self-end">
        <div class="card shadow">
          <div class="d-flex row text-center justify-content-center card-body">
            <h3>ACCOUNT BALANCE</h3>
            <p class="d-flex justify-content-center align-items-center">ksh
              <span class="m-2 fs-2 text-danger font-weight-bold">
                3,150.00
              </span>
            </p>
            <p class="text-danger">YOU OWE</p>
            <a href="#" class="text-success">View Statement</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MY SERVICES Section -->
  <div class="mt-5 col-md-6">
    
    <div class="card shadow p-4">
    <h3  class="col-md-4">MY SERVICES</h3>
      <div className="container">
        <div class="row">
          <div class="col-md-6">
            <div class="card shadow">
              <div class="card-body">
                <h4 class="card-title">Account ID:</h4>
                <p class="font-weight-bold card-text">7434</p>
                
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card shadow">
              <div class="card-body">
                <h4 class="card-title">Account Stauts:</h4>
                <p class="card-text">active</p>
                
              </div>
            </div>
          </div>

          <div class="mt-2 col-md-6">
            <div class="card shadow">
              <div class="card-body">
                <h4 class="card-title">user_name:</h4>
                <p class="card-text">Jane_Doe</p>
                
              </div>
            </div>
          </div>

          <div class="mt-2 col-md-6">
            <div class="card shadow">
              <div class="card-body">
                <h4 class="card-title">Service Cost:</h4>
                <p class="card-text">ksh 3,722 (exec,Tax)</p>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>
;`

  return div;
};

export { render };
