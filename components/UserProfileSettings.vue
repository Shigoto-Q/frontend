<template>
  <form class="space-y-8 divide-y divide-gray-200 mt-8">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div>
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">Profile</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p>
        </div>

        <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">First name</label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="max-w-lg flex">
                <Input type="text" name="username"autocomplete="username" class="flex-1 block w-full" label="First name"/>
              </div>
            </div>
          </div>
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Last name</label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="max-w-lg flex">
                <Input type="text" name="username" autocomplete="username" class="flex-1 block w-full" label="Last name"/>
              </div>
            </div>
          </div>
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">E-mail</label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="max-w-lg flex">
                <Input type="text" name="username" autocomplete="username" class="flex-1 block w-full" label="E-mail"/>
              </div>
            </div>
          </div>
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="company" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Company</label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="max-w-lg flex">
                <Input type="text" name="username" autocomplete="username" class="flex-1 block w-full" label="Company"/>
              </div>
            </div>
          </div>
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="country" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">Country</label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="max-w-lg flex">
                <Input type="text" name="username" autocomplete="username" class="flex-1 block w-full" label="Country"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-between">
        <Button :secondary="true">
         Cancel
        </Button>
        <Button>
          Submit
        </Button>
      </div>
    </div>
  </form>
</template>

<script>
import Input from "@/components/shared/Input";
import Button from "@/components/shared/Button";
export default {
  name: "UserProfileSettings",
  components: {Button, Input}
}
</script>

<style scoped>

</style>
