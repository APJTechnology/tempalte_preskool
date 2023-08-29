<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <componentheader :title="title" :items="items" />
        <div class="row">
          <div class="col-lg-12">
            <!-- Settings Menu -->
            <settingtab></settingtab>
            <!-- Settings Menu -->

            <div class="row">
              <othercontent></othercontent>
              <othercontent1></othercontent1>
              <othercontent2></othercontent2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Wrapper -->
  </div>
  <!-- /Main Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      title: 'Settings',
      items: [
        {
          text: 'Settings',
          href: '/index',
        },
        {
          text: 'Others Settings',
          active: true,
        },
      ],
    };
  },
};
</script>
