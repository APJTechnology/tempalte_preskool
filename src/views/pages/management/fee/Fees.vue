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
                      <h3 class="page-title">Fees</h3>
                    </div>
                    <div
                      class="col-auto text-end float-end ms-auto download-grp"
                    >
                      <a
                        href="javascript:;"
                        class="btn btn-outline-primary me-2"
                        ><i class="fas fa-download"></i> Download</a
                      >
                      <router-link to="add-fees" class="btn btn-primary"
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
    dataIndex: 'fee_id',
    sorter: {
      compare: (a, b) => {
        a = a.fee_id.toLowerCase();
        b = b.fee_id.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Fees Name',
    dataIndex: 'fees_name',
    sorter: (a, b) => a.fees_name.localeCompare(b.fees_name),
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
    title: 'Amount',
    dataIndex: 'Amount',
    sorter: (a, b) => a.Amount.localeCompare(b.Amount),
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
    fee_id: 'PRE1234',
    fees_name: 'Class Test Fees',
    class: '5',
    Amount: '$242',
    start_date: '23 Apr 2022',
    end_date: '28 Apr 2022',
  },
  {
    id: 2,
    fee_id: 'PRE1434',
    fees_name: 'Sports Day Fees',
    class: '6',
    Amount: '$341',
    start_date: '23 Apr 2022',
    end_date: '28 Apr 2022',
  },
  {
    id: 3,
    fee_id: 'PRE1534',
    fees_name: 'Exam Fees',
    class: '7',
    Amount: '$265',
    start_date: '23 Apr 2022',
    end_date: '28 Apr 2022',
  },
  {
    id: 4,
    fee_id: 'PRE2143',
    fees_name: 'Exam Fees',
    class: '9',
    Amount: '$545',
    start_date: '23 Apr 2022',
    end_date: '28 Apr 2022',
  },
  {
    id: 5,
    fee_id: 'PRE2153',
    fees_name: 'Sports Day Fees',
    class: '2',
    Amount: '$334',
    start_date: '23 Apr 2022',
    end_date: '28 Apr 2022',
  },
  {
    id: 6,
    fee_id: 'PRE2209',
    fees_name: 'Exam Fees',
    class: '10',
    Amount: '$345',
    start_date: '23 Apr 2022',
    end_date: '28 Apr 2022',
  },
  {
    id: 7,
    fee_id: 'PRE2213',
    fees_name: 'Exam Fees',
    class: '1',
    Amount: '$255',
    start_date: '23 Apr 2022',
    end_date: '28 Apr 2022',
  },
  {
    id: 8,
    fee_id: 'PRE2345',
    fees_name: 'Exam Fees',
    class: '12',
    Amount: '$365',
    start_date: '23 Apr 2022',
    end_date: '28 Apr 2022',
  },
  {
    id: 9,
    fee_id: 'PRE2365',
    fees_name: 'Annual Day Fees',
    class: '11',
    Amount: '$83',
    start_date: '23 Apr 2022',
    end_date: '28 Apr 2022',
  },
  {
    id: 10,
    fee_id: 'PRE2431',
    fees_name: 'Sports Day Fees',
    class: '8',
    Amount: '$234',
    start_date: '23 Apr 2022',
    end_date: '28 Apr 2022',
  },
];
export default {
  data() {
    return {
      title: 'Fees',
      items: [
        {
          text: 'Dashboard',
          href: '/index',
        },
        {
          text: 'Fees',
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
