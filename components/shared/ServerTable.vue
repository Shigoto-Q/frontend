<template>
  <VueGoodTable
    class="w-full"
    mode="remote"
    theme="polar-bear"
    :columns="columns"
    :rows="rows"
    :total-rows="totalRows"
    :pagination-options="paginationOptions"
    @on-page-change="onPageChange"
    @on-sort-change="onSortChange"
    @on-column-filter="onColumnFilter"
    @on-per-page-change="onPerPageChange"
  >
    <template slot="table-row" slot-scope="props">
      <span v-if="props.column.field == 'button'">
        <Button :text="props.column.buttonText" @click="props.column.action(props.row.id)"/>
      </span>
      <span v-else>
        {{props.formattedRow[props.column.field]}}
      </span>
    </template>
    <div slot="table-actions">
      <Button v-show="showCreateButton" text="Create new" @click="handleCreateNew" />
      <Button text="Reset filters" @click="resetTable" secondary/>
    </div>
  </VueGoodTable>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
import Button from '@/components/shared/Button';

export default {
  name: "ServerTable",
  components: {
    VueGoodTable,
    Button,
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
    endpoint: {
      type: String,
      required: true,
    },
    showCreateButton: {
      type: Boolean,
      default: () => false,
    },
    createNew: {
      type: Function,
      default: () => {},
    },
    createNew: {
      type: Function,
      default: () => {},
    }
  },
  data() {
      return {
        initRows: [],
        totalRows: 0,
        paginationOptions: {
          enabled: true,
        }
      }
  },
  computed: {
    rows: {
      get() {
        return this.initRows;
      },
      set(newValue) {
        this.initRows = newValue;
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
    handleCreateNew() {
      if (this.createNew){
        this.createNew()
      }
    },
    resetTable() {
      this.serverParams = {}
      this.loadItems();
    },
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
        this.rows = response.data;
      });
    }
  }
}
</script>

<style scoped>

</style>
