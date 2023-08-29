<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <componentheader :title="title" :items="items" />

        <div class="card">
          <div class="card-body">
            <teacherabout />
            <div class="row">
              <skills />
              <setting />
            </div>
          </div>
        </div>
      </div>
      <layout-footer></layout-footer>
    </div>
    <!-- /Page Wrapper -->
  </div>
  <!-- /Main Wrapper -->
</template>

<script>
export default {
  data() {
    return {
      title: 'Teachers Details',
      items: [
        {
          text: 'Teachers',
          href: '/',
        },
        {
          text: 'Teachers Details',
          active: true,
        },
      ],
    };
  },
  components: {},
  mounted() {},
};
</script>
