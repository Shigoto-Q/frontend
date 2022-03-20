import Notification from '@/components/shared/notification/Notification';
import { events } from '@/plugins/internal/events';

import Vue from 'vue';


const Notify = {
  install(Vue, args = {}) {
    if (this.installed) {
      return
    }

    this.installed = true;
    this.params = args;
    Vue.component(args.componentName || 'notification', Notification)

    const notify = (params) => {
      window.$nuxt.$emit('add', params);
    }
    notify.close = function (id) {
      window.$bus.$emit('close', id);
    }
    const name = args.name || 'notify';

    Vue.prototype['$' + name] = notify;
    Vue[name] = notify;
  }
  inject('notify', notify)
}

export default Notify


