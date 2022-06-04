<template>
  <VueGoodTable
    class="w-full"
    mode="remote"
    :columns="columns"
    :rows="rows"
    :total-rows="totalRows"
    :pagination-options="paginationOptions"
    @on-page-change="onPageChange"
    @on-sort-change="onSortChange"
    @on-column-filter="onColumnFilter"
    @on-per-page-change="onPerPageChange"
  >
    <template slot="table-row" slot-scope="props" class="test-class">
      <span v-if="props.column.field === 'button'" class="yeet">
        <Button
          @click="props.column.action(props.row.id)"
        >
          {{ props.column.buttonText }}
        </Button>
      </span>
      <span v-else>
        {{ props.formattedRow[props.column.field] }}
      </span>
    </template>
    <div class="table__actions-buttons" slot="table-actions">
      <Button
        v-show="showCreateButton"
        @click="handleCreateNew"
      >
        Create new
      </Button>
      <Button @click="resetTable" secondary>Reset filters</Button>
    </div>
  </VueGoodTable>
</template>

<script>
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";
import Button from "@/components/shared/Button";

export default {
  name: "ServerTable",
  components: {
    VueGoodTable,
    Button,
  },
  props: {
    columns: {
      type: Array,
      required: true,
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
  },
  data() {
    return {
      initRows: [],
      totalRows: 0,
      paginationOptions: {
        enabled: true,
      },
    };
  },
  computed: {
    rows: {
      get() {
        return this.initRows;
      },
      set(newValue) {
        this.initRows = newValue;
      },
    },
  },
  mounted() {
    this.getFromServer({}).then((response) => {
      this.rows = response.data;
      this.totalRows = response.count;
    });
  },
  methods: {
    handleCreateNew() {
      if (this.createNew) {
        this.createNew();
      }
    },
    resetTable() {
      this.serverParams = {};
      this.loadItems();
    },
    getFromServer(params) {
      const config = {
        headers: {
          Authorization: `Bearer ${
            this.$auth.strategy.token.get().split(" ")[1]
          }`,
        },
        params,
      };
      return this.$axios.get(this.endpoint, config).then((response) => {
        return response.data;
      });
    },
    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },

    onPageChange(params) {
      this.updateParams({ page: params.currentPage });
      this.loadItems();
    },

    onPerPageChange(params) {
      this.updateParams({ perPage: params.currentPerPage });
      this.loadItems();
    },

    onSortChange(params) {
      this.updateParams({
        type: params[0].type,
        field: params[0].field,
      });
      this.loadItems();
    },

    onColumnFilter(params) {
      this.updateParams(params);
      this.loadItems();
    },
    loadItems() {
      this.getFromServer(this.serverParams).then((response) => {
        this.totalRecords = response.totalRecords;
        this.rows = response.data;
      });
    },
  },
};
</script>
<style lang="scss">
table {
  min-width: 100% !important;
  border-top-width: 0px !important;
  border-bottom-width: 1px !important;
}
thead {
  background-color: rgb(249 250 251) !important;
}
th {
  width: fit-content !important;
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
  text-align: center !important;
  text-transform: uppercase !important;
  color: $subtitle-color !important;
  font-size: 0.75rem !important;
  line-height: 1rem !important;
  font-weight: 500 !important;
}
.vgt-responsive {
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}

.vgt-global-search {
  background-color: rgb(249 250 251) !important;
}
</style>
