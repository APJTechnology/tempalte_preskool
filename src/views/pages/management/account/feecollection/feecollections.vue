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
                      <h3 class="page-title">Fees Collections</h3>
                    </div>
                    <div
                      class="col-auto text-end float-end ms-auto download-grp"
                    >
                      <a
                        href="javascript:void(0);"
                        class="btn btn-outline-primary me-2"
                        ><i class="fas fa-download"></i> Download</a
                      >
                      <router-link
                        to="/add-fees-collection"
                        class="btn btn-primary"
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
                          <a class="avatar-name">{{ record.student_name }}</a>
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
    dataIndex: 'collection_id',
    sorter: {
      compare: (a, b) => {
        a = a.collection_id.toLowerCase();
        b = b.collection_id.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Name',
    dataIndex: 'student_name',
    key: 'id',
    scopedSlots: { customRender: 'image-column' },
    sorter: (a, b) => a.student_name.localeCompare(b.student_name),
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
    title: 'Fees',
    dataIndex: 'fees_type',
    sorter: {
      compare: (a, b) => {
        a = a.fees_type.toLowerCase();
        b = b.fees_type.toLowerCase();
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
    title: 'Paid Date',
    dataIndex: 'paid_date',
    sorter: {
      compare: (a, b) => {
        a = a.paid_date.toLowerCase();
        b = b.paid_date.toLowerCase();
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
    collection_id: 'PRE1234',
    student_name: 'Nathan Humphries',
    image: 'avatar-11.jpg',
    gender: 'Male',
    fees_type: 'Exam Fees',
    amount: '$278',
    paid_date: '17 Nov 2020',
    tags: ['Paid'],
  },
  {
    id: 2,
    collection_id: 'PRE1252',
    student_name: 'Joe Kelley',
    image: 'avatar-07.jpg',
    gender: 'Female',
    fees_type: 'Transport Fees',
    amount: '$237',
    paid_date: '17 Nov 2020',
    tags: ['Paid'],
  },
  {
    id: 3,
    collection_id: 'PRE1434',
    student_name: 'Vincent',
    image: 'avatar-08.jpg',
    gender: 'Male',
    fees_type: 'Mess Fees',
    amount: '$567',
    paid_date: '05 Oct 2020',
    tags: ['Paid'],
  },
  {
    id: 4,
    collection_id: 'PRE1534',
    student_name: 'Lois A',
    image: 'avatar-05.jpg',
    gender: 'Male',
    fees_type: 'Exam Fees',
    amount: '$56',
    paid_date: '02 Oct 2020',
    tags: ['Unpaid'],
  },
  {
    id: 5,
    collection_id: 'PRE2143',
    student_name: 'Levell Scott',
    image: 'avatar-03.jpg',
    gender: 'Male',
    fees_type: 'Exam Fees',
    amount: '$378',
    paid_date: '04 Sep 2020',
    tags: ['Paid'],
  },
  {
    id: 6,
    collection_id: 'PRE2153',
    student_name: 'Calvin',
    image: 'avatar-06.jpg',
    gender: 'Male',
    fees_type: 'Exam Fees',
    amount: '$236',
    paid_date: '28 Oct 2020',
    tags: ['Unpaid'],
  },
  {
    id: 7,
    collection_id: 'PRE2209',
    student_name: 'Aaliyah',
    image: 'avatar-01.jpg',
    gender: 'Female',
    fees_type: 'Mess Fees',
    amount: '$120',
    paid_date: '17 Aug 2020',
    tags: ['Paid'],
  },
  {
    id: 8,
    collection_id: 'PRE2213',
    student_name: 'Malynne',
    image: 'avatar-01.jpg',
    gender: 'Female',
    fees_type: 'Class Test',
    amount: '$56',
    paid_date: '05 Aug 2020',
    tags: ['Paid'],
  },
  {
    id: 9,
    collection_id: 'PRE2345',
    student_name: 'Kozma  Tatari',
    image: 'avatar-09.jpg',
    gender: 'Female',
    fees_type: 'Exam Fees',
    amount: '$564',
    paid_date: '12 Nov 2020',
    tags: ['Paid'],
  },
  {
    id: 10,
    collection_id: 'PRE2365',
    student_name: 'John Chambers',
    image: 'avatar-10.jpg',
    gender: 'Male',
    fees_type: 'Class Test',
    amount: '$234',
    paid_date: '15 Nov 2020',
    tags: ['Paid'],
  },
  {
    id: 11,
    collection_id: 'PRE2431',
    student_name: 'Minnie',
    image: 'avatar-04.jpg',
    gender: 'Female',
    fees_type: 'Exam Fees',
    amount: '$246',
    paid_date: '17 Sep 2020',
    tags: ['Unpaid'],
  },
];
export default {
  data() {
    return {
      title: 'Fees Collections',
      items: [
        {
          text: 'Dashboard',
          href: '/index',
        },
        {
          text: 'Fees Collections',
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
