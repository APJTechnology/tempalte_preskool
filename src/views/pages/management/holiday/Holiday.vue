<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <!-- Page Header -->
        <div class="page-header">
          <div class="row align-items-center">
            <div class="col">
              <h3 class="page-title">Holiday</h3>
              <ul class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/index">Dashboard</router-link>
                </li>
                <li class="breadcrumb-item active">Holiday</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- /Page Header -->

        <div class="row">
          <div class="col-sm-12">
            <div class="card card-table">
              <div class="card-body">
                <!-- Page Header -->
                <div class="page-header">
                  <div class="row align-items-center">
                    <div class="col">
                      <h3 class="page-title">Holiday</h3>
                    </div>
                    <div
                      class="col-auto text-end float-end ms-auto download-grp"
                    >
                      <a
                        href="javascript:;"
                        class="btn btn-outline-primary me-2"
                        ><i class="fas fa-download"></i> Download</a
                      >
                      <router-link to="add-holiday" class="btn btn-primary"
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
                    <template #bodyCell="{ column, record }">
                      <template v-if="column.key === 'action'">
                        <div class="actions">
                          <a
                            href="javascript:void(0);"
                            class="btn btn-sm bg-success-light me-2"
                          >
                            <i class="fas fa-eye"></i>
                          </a>
                          <router-link
                            to="/edit-fees"
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
    dataIndex: 'holiday_id',
    sorter: {
      compare: (a, b) => {
        a = a.holiday_id.toLowerCase();
        b = b.holiday_id.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Holiday Name',
    dataIndex: 'holiday_name',
    sorter: (a, b) => a.holiday_name.localeCompare(b.holiday_name),
  },
  {
    title: 'Type',
    dataIndex: 'Type',
    sorter: {
      compare: (a, b) => {
        a = a.Type.toLowerCase();
        b = b.Type.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Start Date',
    dataIndex: 'start_date',
    sorter: (a, b) => a.start_date.localeCompare(b.start_date),
  },
  {
    title: 'End Date',
    dataIndex: 'end_date',
    sorter: {
      compare: (a, b) => {
        a = a.end_date.toLowerCase();
        b = b.end_date.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];
const data = [
  {
    id: 1,
    holiday_id: 'PRE2143',
    holiday_name: 'Annual Day',
    Type: 'College Holiday',
    start_date: '04 Sept 2020',
    end_date: '07 Sept 2020',
  },
  {
    id: 2,
    holiday_id: 'PRE2143',
    holiday_name: 'Annual Day',
    Type: 'College Holiday',
    start_date: '04 Sept 2020',
    end_date: '07 Sept 2020',
  },
  {
    id: 3,
    holiday_id: 'PRE2209',
    holiday_name: 'Sports Day',
    Type: 'College Holiday',
    start_date: '17 Aug 2020',
    end_date: '19 Aug 2020',
  },
  {
    id: 4,
    holiday_id: 'PRE2209',
    holiday_name: 'Sports Day',
    Type: 'College Holiday',
    start_date: '17 Aug 2020',
    end_date: '19 Aug 2020',
  },
  {
    id: 5,
    holiday_id: 'PRE2213',
    holiday_name: 'Memorial Day',
    Type: 'Public Holiday',
    start_date: '05 Aug 2020',
    end_date: '06 Aug 2020',
  },
  {
    id: 6,
    holiday_id: 'PRE2213',
    holiday_name: 'Memorial Day',
    Type: 'Public Holiday',
    start_date: '05 Aug 2020',
    end_date: '06 Aug 2020',
  },
  {
    id: 7,
    holiday_id: 'PRE2431',
    holiday_name: 'Exam Holiday',
    Type: 'Semester Leave',
    start_date: '17 Sept 2020',
    end_date: '30 Sept 2020',
  },
  {
    id: 8,
    holiday_id: 'PRE2431',
    holiday_name: 'Exam Holiday',
    Type: 'Semester Leave',
    start_date: '17 Sept 2020',
    end_date: '30 Sept 2020',
  },
];
export default {
  data() {
    return {
      title: 'Holiday',
      items: [
        {
          text: 'Dashboard',
          href: '/index',
        },
        {
          text: 'Holiday',
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
