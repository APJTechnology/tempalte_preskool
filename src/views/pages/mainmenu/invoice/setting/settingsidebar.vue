<template>
  <div class="col-xl-3 col-md-4">
    <div class="widget settings-menu">
      <ul>
        <li class="nav-item">
          <router-link to="/invoices-settings" class="nav-link">
            <i class="fa fa-cog"></i> <span>General Settings</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tax-settings" class="nav-link">
            <i class="fa fa-bookmark"></i> <span>Tax Settings</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/bank-settings" class="nav-link">
            <i class="fas fa-university"></i> <span>Bank Settings</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    currentPath() {
      return this.$route.name;
    },
  },
  mounted() {},
  data() {
    return {
      activeClass: 'active',
    };
    //  isactive : true
  },
};
</script>
