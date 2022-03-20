import Vue from 'vue';
import { eventConstants } from '@/constants/events';

export default function (_ctx, inject) {
  const notify  = function (msg) {
    $nuxt.$emit(eventConstants.SHOW_NOTIFICATION, msg);
  }
   .bind(new Vue());

  inject('notify', notify);
}
