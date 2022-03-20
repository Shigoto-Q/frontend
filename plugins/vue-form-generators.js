import Vue from 'vue';
import VueFormGenerator from 'vue-form-generator'
import fieldMyInput from "~/components/form/fields/FieldInput";
import fieldMyCheckbox from "~/components/form/fields/FieldCheckbox"
import fieldMySelect from "~/components/form/fields/FieldSelect"

Vue.component('fieldMyInput', fieldMyInput)
Vue.component('fieldMyCheckbox', fieldMyCheckbox)
Vue.component('fieldMySelect', fieldMySelect)
Vue.use(VueFormGenerator)
