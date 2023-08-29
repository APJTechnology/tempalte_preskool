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
                      <h3 class="page-title">Teachers</h3>
                    </div>
                    <div
                      class="col-auto text-end float-end ms-auto download-grp"
                    >
                      <router-link
                        to="teachers"
                        class="btn btn-outline-gray me-2 active"
                        ><i class="feather-list"></i
                      ></router-link>
                      <router-link
                        to="teachers-grid"
                        class="btn btn-outline-gray me-2"
                        ><i class="feather-grid"></i
                      ></router-link>
                      <a
                        href="javascript:;"
                        class="btn btn-outline-primary me-2"
                        ><i class="fas fa-download"></i> Download</a
                      >
                      <router-link to="add-teacher" class="btn btn-primary"
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
                    :row-selection="{
                      selectedRowKeys: selectedRowKeys,
                      onChange: onSelectChange,
                    }"
                    @change="onChange"
                  >
                    <template #bodyCell="{ column, record }">
                      <template
                        v-if="column.key === 'id'"
                        slot="image-column"
                        slot-scope="image"
                      >
                        <h2 class="table-avatar">
                          <a class="avatar avatar-sm me-2">
                            <img
                              class="avatar-img rounded-circle"
                              :src="
                                require('../../../../assets/img/profiles/' +
                                  record.image)
                              "
                              alt="User Image"
                            />
                          </a>
                          <a class="avatar-name">{{ record.teacher_name }}</a>
                        </h2>
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
                            to="/edit-teacher"
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
    dataIndex: 'teacher_id',
    sorter: {
      compare: (a, b) => {
        a = a.teacher_id.toLowerCase();
        b = b.teacher_id.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Name',
    dataIndex: 'teacher_name',
    key: 'id',
    sorter: (a, b) => a.teacher_name.localeCompare(b.teacher_name),
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
    title: 'Gender',
    dataIndex: 'gender',
    sorter: (a, b) => a.gender.localeCompare(b.gender),
  },
  {
    title: 'Subject',
    dataIndex: 'subject',
    sorter: {
      compare: (a, b) => {
        a = a.subject.toLowerCase();
        b = b.subject.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Section',
    key: 'section',
    dataIndex: 'section',
    sorter: (a, b) => {
      if (a.section === data[0].section || b.section === data[0].section)
        return 0;
      return a.section.length - b.section.length;
    },
  },
  {
    title: 'Mobile Number',
    dataIndex: 'mobile_number',
    sorter: (a, b) => {
      if (
        a.mobile_number === data[0].mobile_number ||
        b.mobile_number === data[0].mobile_number
      )
        return 0;
      return a.mobile_number.length - b.mobile_number.length;
    },
  },
  {
    title: 'Address',
    dataIndex: 'address',
    sorter: (a, b) => {
      if (a.address === data[0].address || b.address === data[0].address)
        return 0;
      return a.address.length - b.address.length;
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
    teacher_id: 'PRE1234',
    teacher_name: 'Nathan Humphries',
    image: 'avatar-11.jpg',
    class: '10',
    gender: 'Male',
    subject: 'Biology',
    section: 'A',
    mobile_number: '077 3499 9959',
    address: '86 Lamphey Road, Thelnetham',
  },
  {
    id: 2,
    teacher_id: 'PRE1434',
    teacher_name: 'Vincent',
    image: 'avatar-08.jpg',
    class: '10',
    gender: 'Male',
    subject: 'Mathematics',
    section: 'C',
    mobile_number: '402 221 7523',
    address: '3979  Ashwood Drive, Omaha',
  },
  {
    id: 3,
    teacher_id: 'PRE1534',
    teacher_name: 'Lois A',
    image: 'avatar-06.jpg',
    class: '10',
    gender: 'Female',
    subject: 'English',
    section: 'C',
    mobile_number: '413 289 1314',
    address: '2844 Leverton Cove Road, Palmer',
  },
  {
    id: 4,
    teacher_id: 'PRE2143',
    teacher_name: 'Levell Scott',
    image: 'avatar-04.jpg',
    class: '10',
    gender: 'Male',
    subject: 'Science',
    section: ' B',
    mobile_number: '026 7318 4366',
    address: 'P.O. Box: 41, Gaborone',
  },
  {
    id: 5,
    teacher_id: 'PRE2153',
    teacher_name: 'Calvin',
    image: 'avatar-07.jpg',
    class: '9',
    gender: 'Male',
    subject: 'Mathematics',
    section: 'C',
    mobile_number: '701 753 3810',
    address: '1900  Hidden Meadow Drive, Crete',
  },
  {
    id: 6,
    teacher_id: 'PRE2209',
    teacher_name: 'Aaliyah',
    image: 'avatar-02.jpg',
    class: '10',
    gender: 'Female',
    subject: 'Mathematics',
    section: 'A',
    mobile_number: '097 3584 5870',
    address: '911 Deer Ridge Drive,USA',
  },
  {
    id: 7,
    teacher_id: 'PRE2213',
    teacher_name: 'Malynne',
    image: 'avatar-03.jpg',
    class: '8',
    gender: 'Female',
    subject: 'Physics',
    section: 'A',
    mobile_number: '242 362 3100',
    address: 'Bacardi Rd P.O. Box N-4880, New Providence',
  },
  {
    id: 8,
    teacher_id: 'PRE2345',
    teacher_name: 'Kozma  Tatari',
    image: 'avatar-09.jpg',
    class: '9',
    gender: 'Female',
    subject: 'Science',
    section: 'A',
    mobile_number: '04 2239 968',
    address: 'Rruga E Kavajes, Condor Center, Tirana',
  },
  {
    id: 9,
    teacher_id: 'PRE2365',
    teacher_name: 'John Chambers',
    image: 'avatar-10.jpg',
    class: '11',
    gender: 'Male',
    subject: 'Botony',
    section: 'B',
    mobile_number: '870 663 2334',
    address: '4667 Sunset Drive, Pine Bluff',
  },
  {
    id: 10,
    teacher_id: 'PRE2431',
    teacher_name: 'Minnie',
    image: 'avatar-05.jpg',
    class: '11',
    gender: 'Male',
    subject: 'History',
    section: 'C',
    mobile_number: '952 512 4909',
    address: '4771  Oral Lake Road, Golden Valley',
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
      title: 'Teachers',
      items: [
        {
          text: 'Dashboard',
          href: '/',
        },
        {
          text: 'Teachers',
          active: true,
        },
      ],
      data,
      columns,
      hasSelected,
      ...toRefs(state),
      // func
      start,
      onSelectChange,
    };
  },
  components: {},
  mounted() {},
};
</script>
