export const render = () => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="text-center header">
        <h1>Profile Settings</h1>
        
    </div>
        <div class="d-flex container mt-4 gap-5">           
            
            <!-- Personal Information -->
            <div class="col-md-5 card shadow p-4 mb-4">
                <div class="card-body ">
                    <h4 class="card-title">Personal Information</h4>
                    <form>
                        <div class="mt-2 form-group">
                            <label for="firstName">First Name:</label>
                            <input type="text" class="mt-2  form-control shadow" id="firstName" placeholder="First Name">
                        </div>
                        <div class="mt-2 form-group">
                            <label for="lastName">Last Name:</label>
                            <input type="text" class="mt-2  form-control shadow" id="lastName" placeholder="Last Name">
                        </div>
                        <div class="mt-2  form-group">
                            <label for="altNumber">Alternative Number:</label>
                            <input type="tel" class="mt-2  form-control shadow" id="altNumber" placeholder="Alternative Number">
                        </div>
                        <button type="submit" class="mt-3 btn btn-primary">Update Profile</button>
                    </form>
                </div>
            </div>
            
            <!-- Password Update -->
            <div class="col-md-5 card shadow p-4 mb-4">
                <div class="card-body">
                    <h4 class="card-title">Password Update</h4>
                    <form>
                        <div class="mt-2  form-group">
                            <label for="oldPassword">Old Password:</label>
                            <input type="password" class="mt-2  form-control shadow" id="oldPassword" placeholder="Old Password">
                        </div>
                        <div class="mt-2  form-group">
                            <label for="newPassword">New Password:</label>
                            <input type="password" class="mt-2  form-control shadow" id="newPassword" placeholder="New Password">
                        </div>
                        <div class="mt-2  form-group">
                            <label for="confirmPassword">Confirm Password:</label>
                            <input type="password" class="mt-2 form-control shadow" id="confirmPassword" placeholder="Confirm Password">
                        </div>
                        <button type="submit" class="mt-3  btn btn-primary">Update Password</button>
                    </form>
                </div>
            </div>
        </div>
    `;

    return div;
}
