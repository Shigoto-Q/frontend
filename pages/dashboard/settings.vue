<template>
  <div>
    <h1 class="font-semibold font-serif">
      Settings
    </h1>
    <Tabs :tabs="tabs" />
    <div>
      <UserProfileSettings />
    </div>
  </div>
</template>

<script>
import BellIcon from '@/assets/icons/NotificationIcon.svg?inline'
import XIcon from '@/assets/icons/X.svg?inline'
import Tabs from '@/components/shared/Tabs'

export default {
  components: {
    Tabs
  },
  layout (context) {
    return 'dashboard'
  },
  middleware: 'auth',
  data () {
    return {
      tabs: [
        { name: 'General', href: '#', current: true },
        { name: 'Password', href: '#', current: false },
        { name: 'Notifications', href: '#', current: false },
        { name: 'Plan', href: '#', current: false },
        { name: 'Billing', href: '#', current: false },
        { name: 'Team Members', href: '#', current: false }
      ]
    }
  }
}
</script>
