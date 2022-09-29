<template>
  <NuxtLink
    class="nav px-1 py-6 md:px-3"
    exact-active-class="nav__active"
    :to="to"
  >
    {{ text }}
  </NuxtLink>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    to: {
      type: String,
      default: () => '/'
    },
    text: {
      type: String,
      default: () => 'Link'
    }
  }
}
</script>

<style scoped lang="scss">
.nav {
  &__active {
    color: $primary-color;
    border-color: $primary-color;
    border-bottom-width: 2px;
  }
}

.nav:hover {
  font-weight: 600;
  border-bottom-width: 2px;
  border-color: $primary-color;
}
</style>
