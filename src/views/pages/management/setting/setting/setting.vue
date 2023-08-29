<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <componentheader :title="title" :items="items" />

        <!-- Settings Menu -->
        <settingtab></settingtab>
        <!-- Settings Menu -->

        <div class="row">
          <settingcontent></settingcontent>

          <settingcontent1></settingcontent1>
        </div>
        <!-- /Settings -->
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
          text: 'General Settings',
          active: true,
        },
      ],
    };
  },
};
</script>
