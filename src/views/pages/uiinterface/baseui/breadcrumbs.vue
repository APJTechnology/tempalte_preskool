<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <componentheader :title="title" :items="items" />
        <!-- Breadcrumbs -->
        <div class="col-md-12">
          <div class="card bg-white">
            <div class="card-body">
              <h5 class="card-title">Basic</h5>
              <p>
                Use an ordered or unordered list with linked list items to
                create a minimally styled breadcrumb. Use our utilities to add
                additional styles as desired.
              </p>
              <div class="rounded border p-4">
                <b-breadcrumb :items="itemsbasic" class="pre-breadcrumb">
                </b-breadcrumb>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="card bg-white">
            <div class="card-body">
              <h5 class="card-title">Line Separator</h5>
              <p>
                Add <code>.breadcrumb-lineto</code> enable line separator style
                for a breadcrumb.
              </p>
              <div class="rounded border p-4">
                <b-breadcrumb
                  :items="itemsbasic"
                  class="pre-breadcrumb breadcrumb-line"
                >
                </b-breadcrumb>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="card bg-white">
            <div class="card-body">
              <h5 class="card-title">Dot Separator</h5>
              <p>
                Add <code>.breadcrumb-dot</code> enable line separator style for
                a breadcrumb.
              </p>
              <div class="rounded border p-4">
                <b-breadcrumb
                  :items="itemsbasic"
                  class="pre-breadcrumb breadcrumb-dot"
                >
                </b-breadcrumb>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="card bg-white">
            <div class="card-body">
              <h5 class="card-title">Without Separator</h5>
              <p>
                Add <code>.breadcrumb-separatorless</code> to remove the
                separator.
              </p>
              <div class="rounded border p-4">
                <b-breadcrumb
                  :items="itemsbasic"
                  class="pre-breadcrumb breadcrumb-separatorless"
                >
                </b-breadcrumb>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="card bg-white">
            <div class="card-body">
              <h5 class="card-title">Colored Breadcrumb</h5>
              <p>use class <code> .breadcrumb-colored .bg-primary</code></p>
              <b-breadcrumb
                :items="itemslibrary"
                class="breadcrumb-colored bg-primary"
              ></b-breadcrumb>
              <b-breadcrumb
                :items="itemslibrary"
                class="breadcrumb-colored bg-secondary"
              ></b-breadcrumb>
              <b-breadcrumb
                :items="itemslibrary"
                class="breadcrumb-colored bg-success"
              ></b-breadcrumb>
              <b-breadcrumb
                :items="itemslibrary"
                class="breadcrumb-colored bg-info"
              ></b-breadcrumb>
              <b-breadcrumb
                :items="itemslibrary"
                class="breadcrumb-colored bg-warning"
              ></b-breadcrumb>
              <b-breadcrumb
                :items="itemslibrary"
                class="breadcrumb-colored bg-danger"
              ></b-breadcrumb>
              <b-breadcrumb
                :items="itemslibrary"
                class="breadcrumb-colored bg-dark"
              ></b-breadcrumb>
            </div>
          </div>
        </div>
        <!-- /Breadcrumbs -->
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
      title: 'Breadcrumbs',
      items: [
        {
          text: 'Dashboard',
          href: '/index',
        },
        {
          text: 'Components',
          active: true,
        },
      ],
      itemsbasic: [
        {
          text: 'Home',
          href: 'javascript:;',
        },
        {
          text: 'Library',
          href: 'javascript:;',
        },
        {
          text: 'Active',
          active: true,
        },
      ],
      itemslibrary: [
        {
          text: 'Library',
          href: 'javascript:;',
        },
        {
          text: 'Active',
          active: true,
        },
      ],
    };
  },
};
</script>
