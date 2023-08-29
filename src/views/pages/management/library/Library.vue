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
                      <h3 class="page-title">Library</h3>
                    </div>
                    <div
                      class="col-auto text-end float-end ms-auto download-grp"
                    >
                      <a
                        href="javascript:;"
                        class="btn btn-outline-primary me-2"
                        ><i class="fas fa-download"></i> Download</a
                      >
                      <router-link to="add-books" class="btn btn-primary"
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
                      <template v-if="column.key === 'status'">
                        <span>
                          <a-tag
                            v-for="tag in record.status"
                            :key="tag"
                            :color="
                              tag === 'In Stock'
                                ? 'success'
                                : tag.length < 11
                                ? ''
                                : 'red'
                            "
                          >
                            {{ tag.toUpperCase() }}
                          </a-tag>
                        </span>
                      </template>
                      <template v-else-if="column.key === 'action'">
                        <div class="actions">
                          <a
                            href="javascript:void(0);"
                            class="btn btn-sm bg-success-light me-2"
                          >
                            <i class="fas fa-eye"></i>
                          </a>
                          <router-link
                            to="/edit-books"
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
    dataIndex: 'library_id',
    sorter: {
      compare: (a, b) => {
        a = a.library_id.toLowerCase();
        b = b.library_id.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
    scopedSlots: { customRender: 'image-column' },
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Language',
    dataIndex: 'language',
    sorter: {
      compare: (a, b) => {
        a = a.language.toLowerCase();
        b = b.language.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Department',
    dataIndex: 'department',
    sorter: {
      compare: (a, b) => {
        a = a.department.toLowerCase();
        b = b.department.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Class',
    dataIndex: 'class',
    sorter: {
      compare: (a, b) => {
        a = a.class.toLowerCase();
        b = b.class.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Type',
    dataIndex: 'type',
    sorter: {
      compare: (a, b) => {
        a = a.type.toLowerCase();
        b = b.type.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    sorter: true,
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    class: 'text-end',
    sorter: true,
  },
];
const data = [
  {
    id: 1,
    library_id: 'PRE1534',
    name: 'Acoustics',
    language: ' English',
    department: 'science',
    class: '10',
    type: ' book',
    status: ['In Stock'],
  },
  {
    id: 2,
    library_id: 'PRE2009',
    name: 'Calculus',
    language: ' English',
    department: 'Mathematics',
    class: '9',
    type: 'Book',
    status: ['In Stock'],
  },
  {
    id: 3,
    library_id: 'PRE2143',
    name: 'Chess',
    language: ' English',
    department: 'General',
    class: '7',
    type: 'Book',
    status: ['Out of Stock'],
  },
  {
    id: 4,
    library_id: 'PRE2153',
    name: 'Robotics',
    language: ' English',
    department: 'Science',
    class: '10',
    type: 'Book',
    status: ['Out of Stock'],
  },
  {
    id: 5,
    library_id: 'PRE2209',
    name: 'Acoustics',
    language: 'Geometry',
    department: 'Science',
    class: '8',
    type: 'Book',
    status: ['In Stock'],
  },
  {
    id: 6,
    library_id: 'PRE2213',
    name: 'Games',
    language: 'English',
    department: 'General',
    class: '9',
    type: 'Book',
    status: ['In Stock'],
  },
  {
    id: 7,
    library_id: 'PRE2309',
    name: 'Acoustics',
    language: 'English',
    department: 'Science',
    class: '10',
    type: 'Book',
    status: ['In Stock'],
  },
  {
    id: 8,
    library_id: 'PRE431',
    name: 'Visual Basic',
    language: 'English',
    department: 'Computer Science',
    class: '11',
    type: 'Book',
    status: ['Out of Stock'],
  },
];
export default {
  data() {
    return {
      title: 'Library',
      items: [
        {
          text: 'Dashboard',
          href: '/index',
        },
        {
          text: 'Library',
          active: true,
        },
      ],
      data,
      columns,
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style>
.ant-tooltip {
  display: none !important;
}
</style>
