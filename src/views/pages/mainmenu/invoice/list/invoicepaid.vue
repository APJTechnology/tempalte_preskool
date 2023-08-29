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
                      <template v-if="column.key === 'collection'">
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
                              tag === 'paid'
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
                                  record.image)
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
              <h3>Delete Invoice Paid</h3>
              <p>Are you sure want to delete?</p>
            </div>
            <div class="modal-btn delete-action">
              <div class="row">
                <div class="col-6">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-primary paid-continue-btn w-100"
                    >Delete</a
                  >
                </div>
                <div class="col-6">
                  <a
                    href="javascript:void(0);"
                    data-bs-dismiss="modal"
                    class="btn btn-primary paid-cancel-btn w-100"
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
    title: 'Invoice Numbar',
    dataIndex: 'no',
    key: 'collection',
    sorter: {
      compare: (a, b) => {
        a = a.no.toLowerCase();
        b = b.no.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Create on',
    dataIndex: 'date',
    sorter: (a, b) => a.date.localeCompare(b.date),
  },
  {
    title: 'Invoice to',
    dataIndex: 'image',
    key: 'id',
    scopedSlots: { customRender: 'image-column' },
    sorter: {
      compare: (a, b) => {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();
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
    title: 'Paid on',
    dataIndex: 'date1',
    sorter: (a, b) => a.date1.localeCompare(b.date1),
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
    class: 'text-end',
    sorter: true,
  },
];
const data = [
  {
    id: 1,
    no: 'IN093439#@09',
    date: '16 Mar 2022',
    image: 'avatar-04.jpg',
    name: 'Barbara Moore',
    amt: '$1,54,220',
    date1: '23 Mar 2022',
    status: ['Paid'],
  },
  {
    id: 2,
    no: 'IN093439#@10',
    date: '14 Mar 2022',
    image: 'avatar-06.jpg',
    name: 'Karlene Chaidez',
    amt: '$1,222',
    date1: '18 Mar 2022',
    status: ['Paid'],
  },
  {
    id: 3,
    no: 'IN093439#@11',
    date: '7 Mar 2022',
    image: 'avatar-08.jpg',
    name: 'Russell Copeland',
    amt: '$3,470',
    date1: '10 Mar 2022',
    status: ['Paid'],
  },
  {
    id: 4,
    no: 'IN093439#@12',
    date: '24 Mar 2022',
    image: 'avatar-10.jpg',
    name: 'Joseph Collins',
    amt: '$8,265',
    date1: '30 Mar 2022',
    status: ['Paid'],
  },
  {
    id: 5,
    no: 'IN093439#@13',
    date: '17 Mar 2022',
    image: 'avatar-11.jpg',
    name: 'Jennifer Floyd',
    amt: '$5,200',
    date1: '20 Mar 2022',
    status: ['Paid'],
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
          text: 'Invoices Paid',
          active: true,
        },
      ],
      data,
      columns,
    };
  },
};
</script>
