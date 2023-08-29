<template>
  <!-- Page Header -->
  <div class="page-header">
    <div class="row">
      <div class="col">
        <h3 class="page-title">{{ title }}</h3>
        <ul class="breadcrumb">
          <li
            class="breadcrumb-item"
            v-for="(item, index) in items"
            :key="index"
            :class="{ active: item[0] }"
          >
            <a href="javascript: void(0);">{{ item.text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- /Page Header -->
</template>
<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>
