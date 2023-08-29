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
                      <h3 class="page-title">Transport</h3>
                    </div>
                    <div
                      class="col-auto text-end float-end ms-auto download-grp"
                    >
                      <a
                        href="javascript:void(0);"
                        class="btn btn-outline-primary me-2"
                        ><i class="fas fa-download"></i> Download</a
                      >
                      <router-link to="/add-transport" class="btn btn-primary"
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
                    <template #bodyCell="{ column }">
                      <template v-if="column.key === 'action'">
                        <div class="actions">
                          <a
                            href="javascript:void(0);"
                            class="btn btn-sm bg-success-light me-2"
                          >
                            <i class="fas fa-eye"></i>
                          </a>
                          <router-link
                            to="/edit-transport"
                            class="btn btn-sm bg-danger-light"
                          >
                            <i class="fas fa-edit"></i>
                          </router-link>
                        </div>
                      </template>
                    </template>
                  </a-table>
                  <!-- <table
                    class="table border-0 star-student table-hover table-center mb-0 datatable table-striped"
                    id="transporttable"
                  >
                    <thead class="student-thread">
                      <tr>
                        <th>Route Name</th>
                        <th>Vehicle Number</th>
                        <th>Driver Name</th>
                        <th>Driver License</th>
                        <th>Contact Number</th>
                        <th>Driver Address</th>
                        <th class="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in transport" :key="item.id">
                        <td>{{ item.route_name }}</td>
                        <td>{{ item.vehicle_number }}</td>
                        <td>{{ item.driver_name }}</td>
                        <td>{{ item.driver_license }}</td>
                        <td>{{ item.contact_number }}</td>
                        <td>{{ item.driver_address }}</td>
                        <td class="text-end">
                          <div class="actions">
                            <a
                              href="javascript:void(0);"
                              class="btn btn-sm bg-success-light me-2"
                            >
                              <i class="fas fa-eye"></i>
                            </a>
                            <router-link
                              to="/edit-transport"
                              class="btn btn-sm bg-danger-light"
                            >
                              <i class="fas fa-edit"></i>
                            </router-link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table> -->
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
    title: 'Route Name',
    dataIndex: 'route_name',
    sorter: (a, b) => a.route_name.localeCompare(b.route_name),
  },
  {
    title: 'Vehicle Number',
    dataIndex: 'vehicle_number',
    sorter: {
      compare: (a, b) => {
        a = a.vehicle_number.toLowerCase();
        b = b.vehicle_number.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Driver Name',
    dataIndex: 'driver_name',
    sorter: (a, b) => {
      if (
        a.driver_name === data[0].driver_name ||
        b.driver_name === data[0].driver_name
      )
        return 0;
      return a.driver_name.length - b.driver_name.length;
    },
  },
  {
    title: 'Driver License',
    dataIndex: 'driver_license',
    sorter: {
      compare: (a, b) => {
        a = a.driver_license.toLowerCase();
        b = b.driver_license.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Contact Number',
    dataIndex: 'contact_number',
    sorter: {
      compare: (a, b) => {
        a = a.contact_number.toLowerCase();
        b = b.contact_number.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Driver Address',
    dataIndex: 'driver_address',
    sorter: {
      compare: (a, b) => {
        a = a.driver_address.toLowerCase();
        b = b.driver_address.toLowerCase();
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
    route_name: 'New Cross',
    vehicle_number: 'TN 43 AS 5263',
    driver_name: 'Steve',
    driver_license: 'REDH968532',
    contact_number: '+91 8974158962',
    driver_address: '152, South Pole, 2nd Street, 3rd Cross',
  },
  {
    id: 2,
    route_name: 'North Pole',
    vehicle_number: 'TN 34 DB 5847',
    driver_name: 'Akbar',
    driver_license: 'RGTH958932',
    contact_number: '+91 8596841252',
    driver_address: '253, 2nd Street, 3rd Crosst',
  },
  {
    id: 3,
    route_name: 'South Wales',
    vehicle_number: 'TN 34 AK 6789',
    driver_name: 'Joseph',
    driver_license: 'DLFH985632',
    contact_number: '+91 9658741526',
    driver_address: '741, East Road, 2nd Street',
  },
];
export default {
  data() {
    return {
      title: 'Transport',
      items: [
        {
          text: 'Dashboard',
          href: '/index',
        },
        {
          text: 'Transport',
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
