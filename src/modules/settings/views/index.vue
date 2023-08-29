<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <RouterView />
      </div>
    </div>
    <!-- /Page Wrapper  -->
  </div>
  <!-- /Main Wrapper  -->
  <layout-footer></layout-footer>
</template>
