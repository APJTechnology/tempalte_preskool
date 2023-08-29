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
          <div class="col-sm-12">
            <div class="card card-table">
              <div class="card-body">
                <!-- Page Header -->
                <div class="page-header">
                  <div class="row align-items-center">
                    <div class="col">
                      <h3 class="page-title">Sports</h3>
                    </div>
                    <div
                      class="col-auto text-end float-end ms-auto download-grp"
                    >
                      <a
                        href="javascript:void(0);"
                        class="btn btn-outline-primary me-2"
                        ><i class="fas fa-download"></i> Download</a
                      >
                      <router-link to="/add-sports" class="btn btn-primary"
                        ><i class="fas fa-plus"></i
                      ></router-link>
                    </div>
                  </div>
                </div>
                <!-- /Page Header -->
                <div class="table-responsive">
                  <div class="row">
                    <div class="col-sm-12 col-md-6">
                      <div class="dataTables_length mb-3">
                        Show
                        <select class="select-box form-control-sm">
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                        entries
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-6"></div>
                  </div>
                  <a-table
                    class="star-student"
                    :columns="columns"
                    :data-source="data"
                    @change="onChange"
                  >
                    <template #bodyCell="{ column }">
                      <template v-if="column.key === 'action'">
                        <div class="actions">
                          <a
                            href="javascript:void(0);"
                            class="btn btn-sm bg-success-light me-2"
                          >
                            <i class="fas fa-eye"></i>
                          </a>
                          <router-link
                            to="/edit-sports"
                            class="btn btn-sm bg-danger-light"
                          >
                            <i class="fas fa-edit"></i>
                          </router-link>
                        </div>
                      </template>
                    </template>
                  </a-table>
                </div>
              </div>
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
const columns = [
  {
    title: 'ID',
    dataIndex: 'sport_id',
    sorter: (a, b) => a.sport_id.localeCompare(b.sport_id),
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => {
      if (a.name === data[0].name || b.name === data[0].name) return 0;
      return a.name.length - b.name.length;
    },
  },
  {
    title: 'Coach',
    dataIndex: 'Coach',
    sorter: (a, b) => {
      if (a.Coach === data[0].Coach || b.Coach === data[0].Coach) return 0;
      return a.Coach.length - b.Coach.length;
    },
  },
  {
    title: 'started_year',
    dataIndex: 'started_year',
    sorter: {
      compare: (a, b) => a.started_year - b.started_year,
    },
  },
  {
    title: 'Action',
    key: 'action',
    class: 'text-end',
    sorter: true,
  },
];
const data = [
  {
    id: 1,
    sport_id: 'PRE1534',
    name: 'Hockey',
    Coach: 'Thomas',
    started_year: '2005',
  },
  {
    id: 2,
    sport_id: 'PRE2009',
    name: 'Carrom',
    Coach: 'Joseph',
    started_year: '2002',
  },
  {
    id: 3,
    sport_id: 'PRE2143',
    name: 'Volleyball',
    Coach: 'Thomas',
    started_year: '2006',
  },
  {
    id: 4,
    sport_id: 'PRE2153',
    name: 'Volleyball',
    Coach: 'Joseph',
    started_year: '2003',
  },
  {
    id: 5,
    sport_id: 'PRE2209',
    name: 'Cricket',
    Coach: 'Jenny',
    started_year: '2002',
  },
  {
    id: 6,
    sport_id: 'PRE2213',
    name: 'Basketball',
    Coach: 'Jenny',
    started_year: '2002',
  },
  {
    id: 7,
    sport_id: 'PRE2309',
    name: 'Cricket',
    Coach: 'Jenny',
    started_year: '2002',
  },
];
export default {
  setup() {
    return {
      title: 'Sports',
      items: [
        {
          text: 'Dashboard',
          href: '/',
        },
        {
          text: 'Sports',
          active: true,
        },
      ],
      data,
      columns,
    };
  },
};
</script>
<style>
.ant-tooltip {
  display: none !important;
}
</style>
