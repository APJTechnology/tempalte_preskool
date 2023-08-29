<template>
  <div class="error-page" style="height: 100vh">
    <!-- Main Wrapper -->
    <div class="main-wrapper">
      <div class="error-box">
        <h1>404</h1>
        <h3 class="h2 mb-3">
          <i class="fas fa-exclamation-triangle"></i> Oops! Page not found!
        </h3>
        <p class="h4 font-weight-normal">
          The page you requested was not found.
        </p>
        <router-link to="/index" class="btn btn-primary"
          >Back to Home</router-link
        >
      </div>
    </div>
    <!-- /Main Wrapper -->
  </div>
</template>
