<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <componentheader :title="title" :items="items" />
        <studentgroupform />
        <div class="row">
          <div class="col-sm-12">
            <div class="card card-table">
              <div class="card-body">
                <!-- Page Header -->
                <div class="page-header">
                  <div class="row align-items-center">
                    <div class="col">
                      <h3 class="page-title">Departments</h3>
                    </div>
                    <div
                      class="col-auto text-end float-end ms-auto download-grp"
                    >
                      <a
                        href="javascript:;"
                        class="btn btn-outline-primary me-2"
                        ><i class="fas fa-download"></i> Download</a
                      >
                      <router-link to="/add-department" class="btn btn-primary"
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
                            to="/edit-department"
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
    dataIndex: 'department_id',
    sorter: {
      compare: (a, b) => {
        a = a.department_id.toLowerCase();
        b = b.department_id.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Name',
    dataIndex: 'department_name',
    sorter: (a, b) => a.department_name.localeCompare(b.department_name),
  },
  {
    title: 'HOD',
    dataIndex: 'hod',
    sorter: {
      compare: (a, b) => {
        a = a.hod.toLowerCase();
        b = b.hod.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Started Year',
    dataIndex: 'started_year',
    sorter: (a, b) => a.started_year.localeCompare(b.started_year),
  },
  {
    title: 'No Of Students',
    dataIndex: 'no_of_students',
    sorter: {
      compare: (a, b) => {
        a = a.no_of_students.toLowerCase();
        b = b.no_of_students.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
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
    department_id: 'PRE1534',
    department_name: 'MCA',
    hod: 'Lois A',
    started_year: '1992',
    no_of_students: '200',
  },
  {
    id: 2,
    department_id: 'PRE2143',
    department_name: 'Electrical Engg',
    hod: 'Levell Scott',
    started_year: '1994',
    no_of_students: '163',
  },
  {
    id: 3,
    department_id: 'PRE2153',
    department_name: 'BCA',
    hod: 'Calvin',
    started_year: '1992',
    no_of_students: '152',
  },
  {
    id: 4,
    department_id: 'PRE2209',
    department_name: 'Computer Science Engg',
    hod: 'Aaliyah',
    started_year: '1995',
    no_of_students: '180',
  },
  {
    id: 5,
    department_id: 'PRE2213',
    department_name: 'Mechanical Engg',
    hod: 'Malynne',
    started_year: '1999',
    no_of_students: '240',
  },
  {
    id: 6,
    department_id: 'PRE2431',
    department_name: 'Civil Engg',
    hod: 'Minnie',
    started_year: '2000',
    no_of_students: '195',
  },
];
export default {
  data() {
    return {
      title: 'Departments',
      items: [
        {
          text: 'Dashboard',
          href: '/',
        },
        {
          text: 'Departments',
          active: true,
        },
      ],
      data,
      columns,
    };
  },
  components: {},
  mounted() {},
};
</script>
