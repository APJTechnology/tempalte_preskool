<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <componentheader :title="title" :items="items" />

        <div class="student-group-form">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="form-group">
                <b-form-input
                  type="text"
                  class="form-control"
                  placeholder="Search by ID ..."
                />
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="form-group">
                <b-form-input
                  type="text"
                  class="form-control"
                  placeholder="Search by Name ..."
                />
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="form-group">
                <b-from-input
                  type="text"
                  class="form-control"
                  placeholder="Search by Class ..."
                />
              </div>
            </div>
            <div class="col-lg-2">
              <div class="search-student-btn">
                <b-button type="btn" variant="btn btn-primary">Search</b-button>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <div class="card card-table">
              <div class="card-body">
                <!-- Page Header -->
                <div class="page-header">
                  <div class="row align-items-center">
                    <div class="col">
                      <h3 class="page-title">Subjects</h3>
                    </div>
                    <div
                      class="col-auto text-end float-end ms-auto download-grp"
                    >
                      <a
                        href="javascript:;"
                        class="btn btn-outline-primary me-2"
                        ><i class="fas fa-download"></i> Download</a
                      >
                      <router-link to="add-subject" class="btn btn-primary"
                        ><i class="fas fa-plus"></i
                      ></router-link>
                    </div>
                  </div>
                </div>
                <!-- /Page Header -->
                <div class="table-responsive">
                  <a-table
                    class="star-student"
                    :columns="columns"
                    :data-source="data"
                    @change="onChange"
                    :row-selection="{
                      selectedRowKeys: selectedRowKeys,
                      onChange: onSelectChange,
                    }"
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
                            to="/edit-subject"
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
import { computed, reactive, toRefs } from 'vue';

const columns = [
  {
    title: 'ID',
    dataIndex: 'subject_id',
    sorter: {
      compare: (a, b) => {
        a = a.subject_id.toLowerCase();
        b = b.subject_id.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Name',
    dataIndex: 'subject_name',
    sorter: (a, b) => a.subject_name.localeCompare(b.subject_name),
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
    title: 'Action',
    key: 'action',
    class: 'text-end',
    sorter: true,
  },
];
const data = [
  {
    id: 1,
    subject_id: 'PRE1534',
    subject_name: 'Botony',
    class: '9',
  },
  {
    id: 2,
    subject_id: 'PRE2143',
    subject_name: 'Science',
    class: '3',
  },
  {
    id: 3,
    subject_id: 'PRE2153',
    subject_name: 'English',
    class: '4',
  },
  {
    id: 4,
    subject_id: 'PRE2209',
    subject_name: 'Mathematics',
    class: '5',
  },
  {
    id: 5,
    subject_id: 'PRE2213',
    subject_name: 'History',
    class: '6',
  },
  {
    id: 6,
    subject_id: 'PRE2431',
    subject_name: 'Geography',
    class: '8',
  },
];
const state = reactive({
  selectedRowKeys: [],
  // Check here to configure the default column
  loading: false,
});
const hasSelected = computed(() => state.selectedRowKeys.length > 0);
const start = () => {
  state.loading = true;
  // ajax request after empty completing
  setTimeout(() => {
    state.loading = false;
    state.selectedRowKeys = [];
  }, 1000);
};
const onSelectChange = (selectedRowKeys) => {
  console.log('selectedRowKeys changed: ', selectedRowKeys);
  state.selectedRowKeys = selectedRowKeys;
};
export default {
  data() {
    return {
      title: 'Subjects',
      items: [
        {
          text: 'Dashboard',
          href: '/',
        },
        {
          text: 'Subjects',
          active: true,
        },
      ],
      data,
      columns,
      hasSelected,
      ...toRefs(state), // func
      start,
      onSelectChange,
    };
  },
  components: {},
  mounted() {},
};
</script>
