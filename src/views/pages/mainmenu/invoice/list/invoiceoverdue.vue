<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <layout-header></layout-header>
    <layout-sidebar></layout-sidebar>

    <!-- Page Wrapper -->
    <div class="page-wrapper">
      <div class="content container-fluid">
        <!-- Page Header -->
        <div class="page-header">
          <div class="row align-items-center">
            <invoicecomponent :title="title" :items="items" />
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
        <!-- /Page Header -->

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
                      <template v-if="column.key === 'no'">
                        <label class="custom_check">
                          <input type="checkbox" name="invoice" />
                          <span class="checkmark"></span>
                        </label>
                        <router-link to="/view-invoice" class="invoice-link">{{
                          record.no
                        }}</router-link>
                      </template>
                      <template v-else-if="column.key === 'description'">
                        <span>
                          <a-tag
                            v-for="tag in record.description"
                            :key="tag"
                            :color="
                              tag === 'paid'
                                ? 'blue'
                                : tag.length < 5
                                ? ''
                                : 'pink'
                            "
                          >
                            {{ tag.toUpperCase() }}
                          </a-tag>
                        </span>
                      </template>
                      <template v-else-if="column.key === 'action'">
                        <div class="text-end">
                          <router-link
                            to="/edit-invoice"
                            class="btn btn-sm btn-white text-success me-2"
                            ><i class="far fa-edit me-1"></i> Edit</router-link
                          >
                          <a
                            class="btn btn-sm btn-white text-danger"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_paid"
                            ><i class="far fa-trash-alt me-1"></i>Delete</a
                          >
                        </div>
                      </template>
                      <template
                        v-else-if="column.key === 'id'"
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
                            {{ record.name }}</router-link
                          >
                        </h2>
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

    <!-- Delete Paid Modal -->
    <div class="modal custom-modal fade" id="delete_paid" role="dialog">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="form-header">
              <h3>Delete Invoice Overdue</h3>
              <p>Are you sure want to delete?</p>
            </div>
            <div class="modal-btn delete-action">
              <div class="row">
                <div class="col-6">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-primary paid-continue-btn"
                    >Delete</a
                  >
                </div>
                <div class="col-6">
                  <a
                    href="javascript:void(0);"
                    data-bs-dismiss="modal"
                    class="btn btn-primary paid-cancel-btn"
                    >Cancel</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Delete Paid Modal -->
  </div>
  <!-- /Main Wrapper -->
</template>
<script>
const columns = [
  {
    title: 'Invoice ID',
    dataIndex: 'no',
    key: 'no',
    sorter: {
      compare: (a, b) => {
        a = a.no.toLowerCase();
        b = b.no.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Invoice to',
    dataIndex: 'img',
    key: 'id',
    sorter: (a, b) => a.img.localeCompare(b.img),
  },
  {
    title: 'Invoice to',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
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
    title: 'Create on',
    dataIndex: 'date1',
    sorter: (a, b) => a.date1.localeCompare(b.date1),
  },
  {
    title: 'Cancelled on',
    dataIndex: 'date2',
    sorter: {
      compare: (a, b) => {
        a = a.date2.toLowerCase();
        b = b.date2.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Status',
    dataIndex: 'description',
    key: 'description',
    sorter: (a, b) => a.description.localeCompare(b.description),
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
    img: 'avatar-04.jpg',
    name: 'Barbara Moore',
    amt: '$1,54,220',
    date1: '16 Mar 2022',
    date2: '23 Mar 2022',
    description: ['Overdue 7 days'],
  },
  {
    id: 2,
    no: 'IN093439#@10',
    img: 'avatar-06.jpg',
    name: 'Karlene Chaidez',
    amt: '$1,222',
    date1: '14 Mar 2022',
    date2: '18 Mar 2022',
    description: ['Overdue 4 days'],
  },
  {
    id: 3,
    no: 'IN093439#@11',
    img: 'avatar-08.jpg',
    name: 'Russell Copeland',
    amt: '$3,470',
    date1: '7 Mar 2022',
    date2: '10 Mar 2022',
    description: ['Overdue 3 days'],
  },
  {
    id: 4,
    no: 'IN093439#@12',
    img: 'avatar-10.jpg',
    name: 'Joseph Collins',
    amt: '$8,265',
    date1: '24 Mar 2022',
    date2: '30 Mar 2022',
    description: ['Overdue 6 days'],
  },
  {
    id: 5,
    no: 'IN093439#@13',
    img: 'avatar-11.jpg',
    name: 'Jennifer Floyd',
    amt: '$5,200',
    date1: '17 Mar 2022',
    date2: '20 Mar 2022',
    description: ['Overdue 3 days'],
  },
];
export default {
  data() {
    return {
      title: 'Invoices',
      items: [
        {
          text: 'Dashboard',
          href: '/',
        },
        {
          text: 'Invoice',
          href: '/',
        },
        {
          text: 'Invoices Overdue',
          active: true,
        },
      ],
      data,
      columns,
    };
  },
};
</script>
