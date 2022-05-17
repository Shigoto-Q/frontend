import Vue from "vue";
import VueFormGenerator from "vue-form-generator";
import fieldMyInput from "~/components/form/fields/FieldInput";
import fieldMyCheckbox from "~/components/form/fields/FieldCheckbox";
import fieldMySelect from "~/components/form/fields/FieldSelect";
import fieldMyDateTime from "@/components/form/fields/FieldDateTime";

Vue.component("FieldMyInput", fieldMyInput);
Vue.component("FieldMyCheckbox", fieldMyCheckbox);
Vue.component("FieldMySelect", fieldMySelect);
Vue.component("FieldMyDateTime", fieldMyDateTime);
Vue.use(VueFormGenerator);
