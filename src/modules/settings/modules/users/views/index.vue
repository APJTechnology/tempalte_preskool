<template>
  <componentheader :title="title" :items="items" />
  <div class="row">
    <div class="col-sm-12">
      <div class="card card-table">
        <div class="card-body">
          <!-- Page Header -->
          <div class="page-header">
            <div class="row align-items-center">
              <div class="col">
                <h3 class="page-title">Usuários</h3>
              </div>
              <div class="col-auto text-end float-end ms-auto download-grp">
                <router-link
                  :to="{ name: 'settings.users.add' }"
                  class="btn btn-primary"
                >
                  <i class="fas fa-plus"></i>
                </router-link>
              </div>
            </div>
          </div>
          <!-- /Page Header -->
          <div class="table-responsive">
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <div class="dataTables_length mb-3">
                  Exibir
                  <select class="select-box form-control-sm">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  registros
                </div>
              </div>
              <div class="col-sm-12 col-md-6"></div>
            </div>
            <a-table
              class="star-student"
              :columns="columns"
              :data-source="data"
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
                      to="/edit-teacher"
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
</template>

<script>
import { reactive, toRefs } from 'vue';
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: {
      compare: (a, b) => {
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Função',
    dataIndex: 'role',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: (a, b) => a.email.localeCompare(b.email),
  },
  {
    title: 'Ações',
    key: 'action',
    class: 'text-end',
    sorter: true,
  },
];
const data = [
  {
    id: 1,
    name: 'Administrador',
    role: 'ADM',
    email: 'admin@admin.com',
  },
  {
    id: 2,
    name: 'Adson Jesus',
    role: 'Diretor',
    email: 'adson@jesus.com',
  },
];
const state = reactive({
  selectedRowKeys: [],
  // Check here to configure the default column
  loading: false,
});
const start = () => {
  state.loading = true;
  // ajax request after empty completing
  setTimeout(() => {
    state.loading = false;
    state.selectedRowKeys = [];
  }, 10000);
};
export default {
  name: 'UsersIndex',
  data() {
    return {
      title: 'Usuários',
      items: [
        {
          text: 'Dashboard',
          href: '/',
        },
        {
          text: 'Usuários',
          active: true,
        },
      ],
      data,
      columns,
      ...toRefs(state),
      // func
        start,
    };
  },
  components: {},
  mounted() {},
};
</script>
