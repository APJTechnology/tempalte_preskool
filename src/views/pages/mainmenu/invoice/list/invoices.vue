<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <componentheader :title="title" :items="items" />
        <!-- Invoice Header -->
        <div class="page-header">
          <div class="row align-items-center">
            <div class="col"></div>
            <div class="col-auto">
              <router-link to="/invoices" class="invoices-links active">
                <i class="feather feather-list"></i>
              </router-link>
              <router-link to="/invoice-grid" class="invoices-links">
                <i class="feather feather-grid"></i>
              </router-link>
            </div>
          </div>
        </div>
        <!-- /Invoice Header -->

        <!-- Report Filter -->
        <invoicefilter></invoicefilter>
        <!-- /Report Filter -->

        <invoicetabfilter></invoicetabfilter>

        <invoicewidget></invoicewidget>

        <div class="row">
          <div class="col-sm-12">
            <div class="card card-table">
              <div class="card-body">
                <div class="table-responsive invoices-table">
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
                    class="stripped table-hover"
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
                          <router-link to="/profile" class="avatar-name"
                            ><img
                              class="avatar avatar-sm me-2 avatar-img rounded-circle"
                              :src="
                                require('../../../../../assets/img/profiles/' +
                                  record.img)
                              "
                              alt="User Image"
                            />
                            {{ record.name1 }}</router-link
                          >
                        </h2>
                      </template>
                      <template v-else-if="column.key === 'collection'">
                        <label class="custom_check">
                          <input type="checkbox" name="invoice" />
                          <span class="checkmark"></span>
                        </label>
                        <router-link to="/view-invoice" class="invoice-link">{{
                          record.no
                        }}</router-link>
                      </template>
                      <template v-else-if="column.key === 'status'">
                        <span>
                          <a-tag
                            v-for="tag in record.status"
                            :key="tag"
                            :color="
                              tag === 'Cancelled'
                                ? 'blue'
                                : tag.length > 9
                                ? ''
                                : 'pink'
                            "
                          >
                            {{ tag.toUpperCase() }}
                          </a-tag>
                        </span>
                      </template>
                      <template v-else-if="column.key === 'action'">
                        <div class="dropdown dropdown-action text-end">
                          <a
                            href="javascript:void(0);"
                            class="action-icon"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            ><i class="fas fa-ellipsis-v"></i
                          ></a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <router-link
                              class="dropdown-item"
                              to="/edit-invoice"
                              ><i class="far fa-edit me-2"></i>Edit</router-link
                            >
                            <router-link
                              class="dropdown-item"
                              to="/view-invoice"
                              ><i class="far fa-eye me-2"></i>View</router-link
                            >
                            <a class="dropdown-item" href="javascript:void(0);"
                              ><i class="far fa-trash-alt me-2"></i>Delete</a
                            >
                            <a class="dropdown-item" href="javascript:void(0);"
                              ><i class="far fa-check-circle me-2"></i>Mark as
                              sent</a
                            >
                            <a class="dropdown-item" href="javascript:void(0);"
                              ><i class="far fa-paper-plane me-2"></i>Send
                              Invoice</a
                            >
                            <a class="dropdown-item" href="javascript:void(0);"
                              ><i class="far fa-copy me-2"></i>Clone Invoice</a
                            >
                          </div>
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
    </div>
    <!-- /Page Wrapper -->
  </div>
  <!-- /Main Wrapper -->
</template>
<script>
const columns = [
  {
    title: 'Invoice ID',
    dataIndex: 'collection_id',
    key: 'collection',
    sorter: true,
  },
  {
    title: 'Category',
    dataIndex: 'name',
    sorter: {
      compare: (a, b) => {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Created on',
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
    title: 'Invoice to',
    dataIndex: 'name1',
    key: 'id',
    sorter: {
      compare: (a, b) => {
        a = a.name1.toLowerCase();
        b = b.name1.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Amount',
    dataIndex: 'amt',
    sorter: {
      compare: (a, b) => {
        a = a.amt.toLowerCase();
        b = b.amt.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Due date',
    dataIndex: 'date1',
    sorter: {
      compare: (a, b) => {
        a = a.date1.toLowerCase();
        b = b.date1.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    sorter: true,
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
    no: 'IN093439#@09',
    name: 'Advertising',
    date: '16 Mar 2022',
    img: 'avatar-04.jpg',
    name1: 'Barbara Moore',
    amt: '$1,54,220',
    date1: '23 Mar 2022',
    status: ['Paid'],
  },
  {
    id: 2,
    no: 'IN093439#@10',
    name: 'Food',
    date: '14 Mar 2022',
    img: 'avatar-06.jpg',
    name1: 'Karlene Chaidez',
    amt: '$1,222',
    date1: '18 Mar 2022',
    status: ['Overdue'],
  },
  {
    id: 3,
    no: 'IN093439#@11',
    name: 'Marketing',
    date: '7 Mar 2022',
    img: 'avatar-08.jpg',
    name1: 'Russell Copeland',
    amt: '$3,470',
    date1: '10 Mar 2022',
    status: ['Cancelled'],
  },
  {
    id: 4,
    no: 'IN093439#@12',
    name: 'Repairs',
    date: '24 Mar 2022',
    img: 'avatar-10.jpg',
    name1: 'Joseph Collins',
    amt: '$8,265',
    date1: '30 Mar 2022',
    status: ['Paid'],
  },
  {
    id: 5,
    no: 'IN093439#@13',
    name: 'Software',
    date: '17 Mar 2022',
    img: 'avatar-11.jpg',
    name1: 'Jennifer Floyd',
    amt: '$5,200',
    date1: '20 Mar 2022',
    status: ['Overdue'],
  },
];
export default {
  methods: {},
  data() {
    return {
      title: 'Invoices',
      items: [
        {
          text: 'Dashboard',
          href: '/index',
        },
        {
          text: 'Invoices',
          active: true,
        },
      ],
      data,
      columns,
    };
  },
};
</script>
