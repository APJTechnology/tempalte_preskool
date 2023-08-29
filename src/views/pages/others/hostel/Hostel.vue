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
                      <h3 class="page-title">Hostel</h3>
                    </div>
                    <div
                      class="col-auto text-end float-end ms-auto download-grp"
                    >
                      <a
                        href="javascript:;"
                        class="btn btn-outline-primary me-2"
                        ><i class="fas fa-download"></i> Download</a
                      >
                      <router-link to="add-room" class="btn btn-primary"
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
                            to="/edit-hostel"
                            class="btn btn-sm bg-danger-light"
                          >
                            <i class="fas fa-edit"></i>
                          </router-link>
                        </div>
                      </template>
                      <template v-else-if="column.key === 'tags'">
                        <span>
                          <a-tag
                            v-for="tag in record.tags"
                            :key="tag"
                            :color="
                              tag === 'Available'
                                ? 'success'
                                : tag.length > 8
                                ? 'warning'
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
    title: 'Block',
    dataIndex: 'block',
    sorter: {
      compare: (a, b) => {
        a = a.block.toLowerCase();
        b = b.block.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Room No',
    dataIndex: 'room_no',
    sorter: (a, b) => a.room_no.localeCompare(b.room_no),
  },
  {
    title: 'Room Type',
    dataIndex: 'room_type',
    sorter: {
      compare: (a, b) => {
        a = a.room_type.toLowerCase();
        b = b.room_type.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'No of Beds',
    dataIndex: 'no_of_beds',
    sorter: (a, b) => a.no_of_beds.localeCompare(b.no_of_beds),
  },
  {
    title: 'Cost per Bed',
    dataIndex: 'cost_per_bed',
    sorter: {
      compare: (a, b) => {
        a = a.cost_per_bed.toLowerCase();
        b = b.cost_per_bed.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Availability',
    key: 'tags',
    dataIndex: 'tags',
    sorter: (a, b) => {
      if (a.tags === data[0].tags || b.tags === data[0].tags) return 0;
      return a.tags.length - b.tags.length;
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
    block: 'A Block',
    room_no: '101',
    room_type: 'Medium',
    no_of_beds: '6',
    cost_per_bed: '$10',
    tags: ['Full'],
  },
  {
    id: 2,
    block: 'A Block',
    room_no: '101',
    room_type: 'Medium',
    no_of_beds: '6',
    cost_per_bed: '$10',
    tags: ['Available'],
  },
  {
    id: 3,
    block: 'A Block',
    room_no: '102',
    room_type: 'Medium',
    no_of_beds: '6',
    cost_per_bed: '$10',
    tags: ['Full'],
  },
  {
    id: 4,
    block: 'A Block',
    room_no: '107',
    room_type: 'Medium',
    no_of_beds: '6',
    cost_per_bed: '$10',
    tags: ['Available'],
  },
  {
    id: 5,
    block: 'A Block',
    room_no: '108',
    room_type: 'Medium',
    no_of_beds: '6',
    cost_per_bed: '$10',
    tags: ['Available'],
  },
  {
    id: 6,
    block: 'B Block',
    room_no: '104',
    room_type: 'Big',
    no_of_beds: '8',
    cost_per_bed: '$10',
    tags: ['Full'],
  },
  {
    id: 7,
    block: 'B Block',
    room_no: '102',
    room_type: 'Medium',
    no_of_beds: '6',
    cost_per_bed: '$10',
    tags: ['2 Available'],
  },
  {
    id: 8,
    block: 'B Block',
    room_no: '107',
    room_type: 'Small',
    no_of_beds: '6',
    cost_per_bed: '$10',
    tags: ['Available'],
  },
];
export default {
  setup() {
    return {
      title: 'Hostel',
      items: [
        {
          text: 'Dashboard',
          href: '/',
        },
        {
          text: 'Hostel',
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
