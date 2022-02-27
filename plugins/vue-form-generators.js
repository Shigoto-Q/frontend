import Vue from 'vue';
import VueFormGenerator from 'vue-form-generator'
import fieldMyInput from "~/components/form/fields/FieldInput";

Vue.component('fieldMyInput', fieldMyInput)
Vue.use(VueFormGenerator)
