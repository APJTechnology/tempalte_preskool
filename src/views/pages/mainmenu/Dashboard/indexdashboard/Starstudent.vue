<template>
  <div class="col-xl-6 d-flex">
    <!-- Star Students -->
    <div class="card flex-fill student-space comman-shadow">
      <div class="card-header d-flex align-items-center">
        <h5 class="card-title">Star Students</h5>
        <ul class="chart-list-out student-ellips">
          <li class="star-menus">
            <a href="javascript:;"><i class="fas fa-ellipsis-v"></i></a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table
            class="table star-student table-hover table-center table-borderless table-striped"
          >
            <thead class="thead-light">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th class="text-center">Marks</th>
                <th class="text-center">Percentage</th>
                <th class="text-end">Year</th>
              </tr>
            </thead>
            <tbody v-for="item in starstudent" :key="item.id">
              <tr>
                <td class="text-nowrap">
                  <div>{{ item.idno }}</div>
                </td>
                <td class="text-nowrap">
                  <router-link to="profile">
                    <img
                      class="rounded-circle"
                      :src="
                        require(`../../../../../assets/img/profiles/${item.img}`)
                      "
                      width="25"
                      alt="Star Students"
                    />
                    {{ item.name }}
                  </router-link>
                </td>
                <td class="text-center">{{ item.marks }}</td>
                <td class="text-center">{{ item.percentage }}</td>
                <td class="text-end">
                  <div>{{ item.year }}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- /Star Students -->
  </div>
</template>
<script>
import starstudent from '../../../../../assets/json/starstudent.json';
export default {
  data() {
    return {
      starstudent: starstudent,
    };
  },
  components: {},
  mounted() {},
};
</script>
