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
                      <h3 class="page-title">Time Table</h3>
                    </div>
                    <div
                      class="col-auto text-end float-end ms-auto download-grp"
                    >
                      <a
                        href="javascript:;"
                        class="btn btn-outline-primary me-2"
                        ><i class="fas fa-download"></i> Download</a
                      >
                      <router-link to="add-time-table" class="btn btn-primary"
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
                          <a class="avatar-name">{{ record.name }}</a>
                        </h2>
                      </template>
                      <template v-if="column.key === 'action'">
                        <div class="actions">
                          <a
                            href="javascript:void(0);"
                            class="btn btn-sm bg-success-light me-2"
                          >
                            <i class="fas fa-eye"></i>
                          </a>
                          <router-link
                            to="/edit-time-table"
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
    dataIndex: 'table_id',
    sorter: (a, b) => a.table_id.localeCompare(b.table_id),
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'id',
    scopedSlots: { customRender: 'image-column' },
    sorter: (a, b) => {
      if (a.name === data[0].name || b.name === data[0].name) return 0;
      return a.name.length - b.name.length;
    },
  },
  {
    title: 'Class',
    dataIndex: 'class',
    sorter: (a, b) => {
      if (a.class === data[0].class || b.class === data[0].class) return 0;
      return a.class.length - b.class.length;
    },
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
    title: 'Start Time',
    dataIndex: 'start_time',
    sorter: {
      compare: (a, b) => {
        a = a.start_time.toLowerCase();
        b = b.start_time.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'End Time',
    dataIndex: 'end_time',
    sorter: {
      compare: (a, b) => {
        a = a.end_time.toLowerCase();
        b = b.end_time.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Date',
    dataIndex: 'date',
    sorter: {
      compare: (a, b) => {
        a = a.date.toLowerCase();
        b = b.date.toLowerCase();
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
    table_id: 'PRE1534',
    name: 'Vincent',
    image: 'avatar-07.jpg',
    class: '6',
    subject: 'Botony',
    start_time: '10:00 AM',
    end_time: '01:00 PM',
    date: '02 Jun 2020',
  },
  {
    id: 2,
    table_id: 'PRE2009',
    name: 'Lois A',
    image: 'avatar-07.jpg',
    class: '7',
    subject: 'History',
    start_time: '01:00 PM',
    end_time: '04:00 PM',
    date: '23 Jul 2020',
  },
  {
    id: 3,
    table_id: 'PRE2143',
    name: 'Minnie',
    image: 'avatar-04.jpg',
    class: '8',
    subject: 'Science',
    start_time: '01:00 PM',
    end_time: '04:00 PM',
    date: '18 Sep 2020',
  },
  {
    id: 4,
    table_id: 'PRE2153',
    name: 'Kozma  Tatari',
    image: 'avatar-08.jpg',
    class: '12',
    subject: 'Mathematics',
    start_time: '10:00 AM',
    end_time: '01:00 PM',
    date: '23 Apr 2020',
  },
  {
    id: 5,
    table_id: 'PRE2209',
    name: 'Malynne',
    image: 'avatar-02.jpg',
    class: '12',
    subject: 'Botony',
    start_time: '10:00 AM',
    end_time: '01:00 PM',
    date: '23 Apr 2020',
  },
  {
    id: 6,
    table_id: 'PRE2213',
    name: 'Levell Scott',
    image: 'avatar-02.jpg',
    class: '9',
    subject: 'Biology',
    start_time: '01:00 PM',
    end_time: '04:00 PM',
    date: '26 Nov 2020',
  },
  {
    id: 7,
    table_id: 'PRE2309',
    name: 'Aaliyah',
    image: 'avatar-01.jpg',
    class: '10',
    subject: 'English',
    start_time: '10:00 AM',
    end_time: '01:00 PM',
    date: '23 Apr 2020',
  },
  {
    id: 8,
    table_id: 'PRE2431',
    name: 'Calvin',
    image: 'avatar-06.jpg',
    class: '2',
    subject: 'Biology',
    start_time: '10:00 AM',
    end_time: '01:00 PM',
    date: '15 Oct 2020',
  },
];
export default {
  setup() {
    return {
      title: 'Time Table',
      items: [
        {
          text: 'Dashboard',
          href: '/',
        },
        {
          text: 'Time Table',
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
