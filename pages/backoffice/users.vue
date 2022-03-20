<template>
  <div class="flex flex-col justify-items-center items-center">
    <h1
      class="mb-4 text-4xl font-bold leading-none text-comet lg:text-6xl"
    >
      Users
    </h1>
    <ServerTable endpoint="/api/v1/users/list/" :columns="columns"/>
  </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
import ServerTable from "~/components/shared/ServerTable";

export default {
  name: "users.vue",
  layout (context) {
    return 'backoffice'
  },
  components: {
    ServerTable,
    VueGoodTable
  },
  data(){
    return {
      columns: [
        {
          label: 'First Name',
          field: 'firstName',
        },
        {
          label: 'Last Name',
          field: 'lastName',
        },
        {
          label: 'E-mail',
          field: 'email',
        },
        {
          label: 'Company',
          field: 'company',
        },
        {
          label: 'Country',
          field: 'country',
        },
      ],
    };
  },
}
</script>

<style scoped>

</style>
