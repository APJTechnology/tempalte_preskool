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
                      <h3 class="page-title">Expenses</h3>
                    </div>
                    <div
                      class="col-auto text-end float-end ms-auto download-grp"
                    >
                      <a
                        href="javascript:void(0);"
                        class="btn btn-outline-primary me-2"
                        ><i class="fas fa-download"></i> Download</a
                      >
                      <router-link to="/add-expenses" class="btn btn-primary"
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
    dataIndex: 'expense_id',
    sorter: {
      compare: (a, b) => {
        a = a.expense_id.toLowerCase();
        b = b.expense_id.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Item Name',
    dataIndex: 'item_name',
    scopedSlots: { customRender: 'image-column' },
    sorter: (a, b) => a.item_name.localeCompare(b.item_name),
  },
  {
    title: 'Item Quality',
    dataIndex: 'item_quantity',
    sorter: {
      compare: (a, b) => {
        a = a.item_quantity.toLowerCase();
        b = b.item_quantity.toLowerCase();
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
    title: 'Purchase Source',
    dataIndex: 'purchase_source',
    sorter: {
      compare: (a, b) => {
        a = a.purchase_source.toLowerCase();
        b = b.purchase_source.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Purchase Date',
    dataIndex: 'purchase_date',
    sorter: {
      compare: (a, b) => {
        a = a.purchase_date.toLowerCase();
        b = b.purchase_date.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Purchase By',
    dataIndex: 'purchase_by',
    sorter: {
      compare: (a, b) => {
        a = a.purchase_by.toLowerCase();
        b = b.purchase_by.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
];
const data = [
  {
    id: 1,
    expense_id: 'PRE1252',
    item_name: 'Water Bottle',
    item_quantity: '267',
    amount: '$237',
    purchase_source: 'DJ Stationary',
    purchase_date: '17 Oct 2020',
    purchase_by: 'Joe Kelley',
  },
  {
    id: 2,
    expense_id: 'PRE1534',
    item_name: 'Hard disk',
    item_quantity: '2',
    amount: '$560',
    purchase_source: 'Sony Center',
    purchase_date: '02 Oct 2020',
    purchase_by: 'Lois A',
  },
  {
    id: 3,
    expense_id: 'PRE1536',
    item_name: 'Hard disk',
    item_quantity: '3',
    amount: '$560',
    purchase_source: 'Music Center',
    purchase_date: '02 Oct 2020',
    purchase_by: 'Lois A',
  },
  {
    id: 4,
    expense_id: 'PRE2143',
    item_name: 'Desk',
    item_quantity: '6',
    amount: '$378',
    purchase_source: 'Take Away',
    purchase_date: '04 Sep 2020',
    purchase_by: 'Levell Scott',
  },
  {
    id: 5,
    expense_id: 'PRE2153',
    item_name: 'Note books',
    item_quantity: '100',
    amount: '$236',
    purchase_source: 'DJ Stationary',
    purchase_date: '28 Oct 2020',
    purchase_by: 'Calvin',
  },
  {
    id: 6,
    expense_id: 'PRE2209',
    item_name: 'Chair',
    item_quantity: '6',
    amount: '$120',
    purchase_source: 'Abc Shop',
    purchase_date: '17 Aug 2020',
    purchase_by: 'Lois A',
  },
  {
    id: 7,
    expense_id: 'PRE2213',
    item_name: 'Table',
    item_quantity: '2',
    amount: '$56',
    purchase_source: 'Online',
    purchase_date: '05 Aug 2020',
    purchase_by: 'Malynne',
  },
  {
    id: 8,
    expense_id: 'PRE2431',
    item_name: 'Projector',
    item_quantity: '1',
    amount: '$246',
    purchase_source: 'RealShop',
    purchase_date: '17 Sept 2020',
    purchase_by: 'Malynne',
  },
];
export default {
  data() {
    return {
      title: 'Expenses',
      items: [
        {
          text: 'Dashboard',
          href: '/index',
        },
        {
          text: 'Expenses',
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
