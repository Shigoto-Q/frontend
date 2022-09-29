<template>
  <div>
    <Heading class="mt-4" title="Kubernetes" />
    <div class="content__select">
      <div class="content__namespace-form">
        <Form :schema="namespaceSchema" :model="namespaceModel" />
        <div class="content__namespace-form-actions">
          <Button @click="handleCreateNewNamespace">
            Create new namespace
          </Button>
          <Button secondary @click="handleDeleteNamespace">
            Delete current namespace
          </Button>
        </div>
      </div>
      <Select
        class="content__namespace-select"
        :options="options"
        label="Namespace"
        :multiple="true"
        @input="onInput"
        @change="onChange"
      />
    </div>
    <Divider title="Docker images" class="mb-4 mt-4" />
    <CardWithActions
      :items="images"
      primary-action-name="Deploy"
      :primary-action="handleDeployment"
      :secondary-action="handleDeleteImage"
    />
    <Modal v-model="showModal">
      <template #title>
        Deploy
      </template>
      <div class="flex flex-col">
        <Form
          :schema="schema"
          :model="formModel"
          :handle-on-click="handleDeleteImage"
        />
      </div>
      <div class="flex justify-between mt-10">
        <Button secondary @click="showModal = false">
          Cancel
        </Button>
        <Button @click="handleSubmit">
          Submit
        </Button>
      </div>
    </Modal>
    <Divider title="Deployments" class="mb-4 mt-4" />
    <SimpleTable :columns="columns" :items="items" />
    <Divider title="Pods" class="mb-4 mt-4" />
    <SimpleTable :columns="columnsDeploys" :items="items" />
    <Divider title="Services" class="mb-4 mt-4" />
    <div class="content__services-actions">
      <Button @click="openServiceModal">
        Create new service
      </Button>
    </div>
    <List />
    <Divider title="Ingress" class="mb-4 mt-4" />
    <StackedList />
    <Modal v-model="showServiceModal">
      <template #title>
        Deploy
      </template>
      <Form
        :schema="serviceSchema"
        :model="serviceModel"
        :handle-on-click="handleDeleteImage"
      />
      <div class="flex justify-between mt-10">
        <Button secondary @click="showServiceModal = false">
          Cancel
        </Button>
        <Button @click="handleCreateNewService">
          Submit
        </Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { A_LIST_IMAGES } from '@/store/kubernetes/action-types'
import { G_KUBERNETES_DOCKER_IMAGES } from '@/store/kubernetes/getter-types'
import CardWithActions from '@/components/shared/CardWithActions'
import Modal from '@/components/shared/Modal'
import Button from '@/components/shared/Button'
import Form from '@/components/form/Form'
import StackedList from '@/components/shared/StackedList'
import Divider from '@/components/shared/Divider'
import SimpleTable from '@/components/shared/SimpleTable'
import List from '@/components/shared/List'
import Heading from '@/components/shared/Heading'
import { notificationTypes } from '@/constants/notifications'
import Select from '@/components/shared/Select'
import Input from '@/components/shared/Input'

export default {
  name: 'Deploy',
  components: {
    Input,
    Select,
    Heading,
    List,
    SimpleTable,
    Divider,
    StackedList,
    Form,
    Modal,
    CardWithActions,
    Button
  },
  layout (context) {
    return 'dashboard'
  },
  middleware: 'auth',
  data () {
    return {
      showServiceModal: false,
      serviceModel: {},
      value: [],
      namespaceModel: {},
      columns: ['Name', 'Age', 'Status', 'Restarts', 'Ready'],
      columnsDeploys: ['Name', 'Ready', 'Up to date', 'Available', 'Age'],
      showModal: false,
      formModel: {
        image: ''
      },
      options: [],
      items: [
        {
          id: 1,
          name: 'sgt-frontend-789f8dd7fc-sr7b8',
          age: '23h',
          cpu: 'Running',
          storage: '0',
          ready: '1/1',
          isCurrent: false
        }
      ]
    }
  },
  computed: {
    serviceSchema () {
      return {
        fields: [
          {
            type: 'myInput',
            inputType: 'text',
            fieldLabel: 'Name',
            name: 'name',
            model: 'name'
          },
          {
            type: 'myInput',
            inputType: 'number',
            fieldLabel: 'port',
            name: 'port',
            model: 'port'
          },
          {
            type: 'myInput',
            inputType: 'number',
            fieldLabel: 'targetPort',
            name: 'targetPort',
            model: 'targetPort'
          }
        ]
      }
    },
    namespaceSchema () {
      return {
        fields: [
          {
            type: 'myInput',
            inputType: 'text',
            fieldLabel: 'Namespace',
            name: 'name',
            model: 'name'
          }
        ]
      }
    },
    schema () {
      return {
        fields: [
          {
            type: 'myInput',
            inputType: 'text',
            fieldLabel: 'Host',
            name: 'name',
            model: 'host'
          },
          {
            type: 'myInput',
            inputType: 'text',
            fieldLabel: 'Image',
            name: 'name',
            model: 'imageName'
          },
          {
            type: 'myInput',
            inputType: 'text',
            fieldLabel: 'Service name',
            name: 'name',
            model: 'serviceName'
          },
          {
            type: 'myInput',
            inputType: 'text',
            fieldLabel: 'Deployment name',
            name: 'name',
            model: 'name'
          }
        ]
      }
    },
    ...mapGetters({
      images: G_KUBERNETES_DOCKER_IMAGES
    })
  },
  mounted () {
    this.$store.dispatch(A_LIST_IMAGES)
    this.getNamespaces()
  },
  methods: {
    openServiceModal () {
      this.showServiceModal = true
    },
    handleCreateNewService () {
      console.log('handleCreateNewService')
    },
    handleDeleteNamespace () {
      return this.$axios
        .post(
          '/api/v1/kubernetes/namespace/delete/',
          {
            name: this.value.name
          },
          {
            headers: {
              Authorization: `Bearer ${
                this.$auth.strategy.token.get().split(' ')[1]
              }`
            }
          }
        )
        .then((response) => {
          this.$notify({
            title: 'Successfully created!!',
            duration: 3000,
            body: 'Namespace has been successfully created.',
            type: notificationTypes.SUCCESS
          })
        })
        .catch((err) => {})
    },
    handleCreateNewNamespace () {
      return this.$axios
        .post('/api/v1/kubernetes/namespace/create/', this.namespaceModel, {
          headers: {
            Authorization: `Bearer ${
              this.$auth.strategy.token.get().split(' ')[1]
            }`
          }
        })
        .then((response) => {
          this.$notify({
            title: 'Successfully created!!',
            duration: 3000,
            body: 'Namespace has been successfully created.',
            type: notificationTypes.SUCCESS
          })
        })
        .catch((err) => {})
    },
    handleDeployment (image) {
      this.formModel = { ...image }
      this.showModal = true
    },
    handleSubmit () {
      if (this.value === null) {
        return
      }
      const postData = {
        image: this.formModel.imageName,
        name: this.formModel.name,
        namespace: this.value.name
      }
      this.$axios
        .post('/api/v1/kubernetes/deploy/', postData)
        .then(() => {
          this.$notify({
            title: 'Successfully deployed!',
            duration: 3000,
            body: `Docker image ${postData.image} has been deployed.`,
            type: notificationTypes.SUCCESS
          })
        })
        .catch((err) => {
          this.showModal = false
          this.$notify({
            title: `Error status: ${err.response.status}`,
            duration: 3000,
            body: `${err.response.data.message}`,
            type: notificationTypes.ERROR
          })
        })
    },
    handleDeleteImage (image) {
      console.log('handleDeleteImage', image)
    },
    async getNamespaces () {
      return await this.$axios
        .get('/api/v1/kubernetes/namespace/list/', {
          headers: {
            Authorization: `Bearer ${
              this.$auth.strategy.token.get().split(' ')[1]
            }`
          }
        })
        .then((response) => {
          this.options = response.data.data
        })
    },
    onInput (value) {
      this.value = value
    },
    onChange (value) {
      this.value = value
      console.log(this.value)
    }
  }
}
</script>

<style lang="scss">
.content {
  &__select {
    //width: 50%;
    display: flex;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  &__namespace {
    &-form {
      width: 50%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding-right: 1rem;
      &-actions {
        display: flex;
        justify-content: space-between;
      }
    }
    &-select {
      width: 50%;
    }
  }
  &__services {
    &-actions {
      margin-bottom: 1rem;
    }
  }
}
.form-group {
  width: 780px;
}
</style>
