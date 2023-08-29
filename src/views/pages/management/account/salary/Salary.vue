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
                      <h3 class="page-title">Salary</h3>
                    </div>
                    <div
                      class="col-auto text-end float-end ms-auto download-grp"
                    >
                      <a
                        href="javascript:void(0);"
                        class="btn btn-outline-primary me-2"
                        ><i class="fas fa-download"></i> Download</a
                      >
                      <router-link to="/add-salary" class="btn btn-primary"
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
                                require('../../../../../assets/img/profiles/' +
                                  record.image)
                              "
                              alt="User Image"
                            />
                          </a>
                          <a class="avatar-name">{{ record.name }}</a>
                        </h2>
                      </template>
                      <template v-else-if="column.key === 'tags'">
                        <span>
                          <a-tag
                            v-for="tag in record.tags"
                            :key="tag"
                            :color="
                              tag === 'Paid'
                                ? 'success'
                                : tag.length > 6
                                ? ''
                                : 'red'
                            "
                          >
                            {{ tag.toUpperCase() }}
                          </a-tag>
                        </span>
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
    dataIndex: 'salary_id',
    sorter: {
      compare: (a, b) => {
        a = a.salary_id.toLowerCase();
        b = b.salary_id.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'id',
    scopedSlots: { customRender: 'image-column' },
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    sorter: {
      compare: (a, b) => {
        a = a.gender.toLowerCase();
        b = b.gender.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Joining Date',
    dataIndex: 'joining_date',
    sorter: {
      compare: (a, b) => {
        a = a.joining_date.toLowerCase();
        b = b.joining_date.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    sorter: {
      compare: (a, b) => {
        a = a.amount.toLowerCase();
        b = b.amount.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Status',
    key: 'tags',
    dataIndex: 'tags',
    sorter: true,
  },
];
const data = [
  {
    id: 1,
    salary_id: 'PRE1234',
    name: 'Nathan Humphries',
    image: 'avatar-11.jpg',
    gender: 'Male',
    joining_date: '17 Nov 2020',
    amount: '$278',
    tags: ['Paid'],
  },
  {
    id: 2,
    salary_id: 'PRE1252',
    name: 'Joe Kelley',
    image: 'avatar-07.jpg',
    gender: 'Female',
    joining_date: '17 Oct 2020',
    amount: '$237',
    tags: ['Paid'],
  },
  {
    id: 3,
    salary_id: 'PRE1434',
    name: 'Vincent',
    image: 'avatar-08.jpg',
    gender: 'Male',
    joining_date: '05 Nov 2020',
    amount: '$567',
    tags: ['Paid'],
  },
  {
    id: 4,
    salary_id: 'PRE1534',
    name: 'Lois A',
    image: 'avatar-05.jpg',
    gender: 'Male',
    joining_date: '02 Oct 2020',
    amount: '$560',
    tags: ['Unpaid'],
  },
  {
    id: 5,
    salary_id: 'PRE2143',
    name: 'Level Scott',
    image: 'avatar-03.jpg',
    gender: 'Male',
    joining_date: '04 Sept 2020',
    amount: '$378',
    tags: ['Paid'],
  },
  {
    id: 6,
    salary_id: 'PRE2153',
    name: 'Calvin',
    image: 'avatar-06.jpg',
    gender: 'Male',
    joining_date: '28 Oct 2020',
    amount: '$236',
    tags: ['Unpaid'],
  },
  {
    id: 7,
    salary_id: 'PRE2209',
    name: 'Aaliyah',
    image: 'avatar-01.jpg',
    gender: 'Female',
    joining_date: '17 Aug 2020',
    amount: '$320',
    tags: ['Paid'],
  },
  {
    id: 8,
    salary_id: 'PRE2213',
    name: 'Malynne',
    image: 'avatar-02.jpg',
    gender: 'Female',
    joining_date: '05 Aug 2020',
    amount: '$536',
    tags: ['Paid'],
  },
  {
    id: 9,
    salary_id: 'PRE2345',
    name: 'Kozma  Tatari',
    image: 'avatar-09.jpg',
    gender: 'Female',
    joining_date: '12 Nov 2020',
    amount: '$564',
    tags: ['Paid'],
  },
  {
    id: 10,
    salary_id: 'PRE2365',
    name: 'John Chambers',
    image: 'avatar-10.jpg',
    gender: 'Male',
    joining_date: '15 Nov 2020',
    amount: '$234',
    tags: ['Paid'],
  },
  {
    id: 11,
    salary_id: 'PRE2431',
    name: 'Minnie',
    image: 'avatar-04.jpg',
    gender: 'Female',
    joining_date: '17 Sept 2020',
    amount: '$246',
    tags: ['Unpaid'],
  },
];
export default {
  data() {
    return {
      title: 'Salary',
      items: [
        {
          text: 'Dashboard',
          href: '/index',
        },
        {
          text: 'Salary',
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
