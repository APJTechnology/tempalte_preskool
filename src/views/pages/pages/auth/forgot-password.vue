<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper login-body">
    <div class="login-wrapper">
      <div class="container">
        <div class="loginbox">
          <div class="login-left">
            <img
              class="img-fluid"
              src="../../../../assets/img/login.png"
              alt="Logo"
            />
          </div>
          <div class="login-right">
            <div class="login-right-wrap">
              <h1>Reset Password</h1>
              <p class="account-subtitle">Let Us Help You</p>

              <!-- Form -->
              <form action="/">
                <div class="form-group">
                  <label
                    >Enter your registered email address
                    <span class="login-danger">*</span></label
                  >
                  <b-form-input class="form-control" type="text" />
                  <span class="profile-views"
                    ><i class="fas fa-envelope"></i
                  ></span>
                </div>
                <div class="form-group">
                  <b-button variant="primary" class="btn-block" type="submit">
                    Reset My Password
                  </b-button>
                </div>
                <div class="form-group mb-0">
                  <b-button
                    variant="primary"
                    class="primary-reset btn-block"
                    type="submit"
                  >
                    Login
                  </b-button>
                </div>
              </form>
              <!-- /Form -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Main Wrapper -->
</template>
