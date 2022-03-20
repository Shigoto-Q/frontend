<template>
  <VueGoodTable
    class="w-1/2"
    mode="remote"
    theme="polar-bear"
    :columns="columns"
    :rows="rows"
    :total-rows="totalRows"
    :pagination-options="paginationOptions"
    :search-options="{
    enabled: true,
    trigger: 'enter',
    skipDiacritics: true,
    placeholder: 'Search users',
  }"
    @on-page-change="onPageChange"
    @on-sort-change="onSortChange"
    @on-column-filter="onColumnFilter"
    @on-per-page-change="onPerPageChange"
  />
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
export default {
  name: "ServerTable",
  components: {
    VueGoodTable
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
    endpoint: {
      type: String,
      required: true,
    }
  },
  data() {
      return {
        rows: [],
        totalRows: 0,
        paginationOptions: {
          enabled: true,
        }
      }
  },
  mounted() {
    this.getFromServer({}).then((response) => {
      this.rows = response.data;
      this.totalRows = response.count;
    })
  },
  methods: {
    getFromServer(params){
      const config = {
        headers: {
          Authorization: `Bearer ${this.$auth.strategy.token.get().split(' ')[1]}`
        },
        params
      }
      return this.$axios.get(this.endpoint, config)
        .then((response) => {
          return response.data
        })
    },
    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },

    onPageChange(params) {
      this.updateParams({page: params.currentPage});
      this.loadItems();
    },

    onPerPageChange(params) {
      this.updateParams({perPage: params.currentPerPage});
      this.loadItems();
    },

    onSortChange(params) {
      console.log(params)
      this.updateParams(
        {
          type: params[0].type,
          field: params[0].field,
        },
      );
      this.loadItems();
    },

    onColumnFilter(params) {
      this.updateParams(params);
      this.loadItems();
    },
    loadItems() {
      this.getFromServer(this.serverParams).then(response => {
        this.totalRecords = response.totalRecords;
        this.rows = response.rows;
      });
    }
  }
}
</script>

<style scoped>

</style>
