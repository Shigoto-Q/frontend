<template>
  <div v-if="!collapse" class="flex flex-col w-64 h-full shadow-md bg-ghost transition-all ease-in-out delay-500">
    <div class="flex flex-col">
      <div class="pt-4 pb-2 px-6">
          <div class="flex items-center">
            <div class="shrink-0">
              <ShigotoIcon />
            </div>
            <div class="grow ml-3">
              <p class="text-4xl font-bold leading-none text-comet lg:text-xl ">shigoto</p>
            </div>
            <div>
              <button @click="collapse = !collapse">
              <ChevronLeftIcon class="w-7 h-7 rounded-md border-2 "/>
              </button>
            </div>
          </div>
      </div>
      <hr class="my-2">
      <UserDropdown />
      <hr class="my-2">
      <div v-for="route in routes">
        <span class="font-light leading-relaxed text-stone ml-4 mt-4 uppercase">{{ route.title }}</span>
        <ul class="relative px-1" v-for="r in route.children">
          <SidebarElement :text="r.route" :icon="r.icon" :to="r.url"/>
        </ul>
        <hr class="my-2">
      </div>
    </div>
    <div class="flex justify-center align-center mt-auto">
      <ToggleInput class="w-6 h-6 mb-6"/>
    </div>
  </div>
  <div v-else class="flex flex-col w-12 h-full shadow-md bg-white items-center transition-all ease-in-out delay-200">
    <div>
      <button @click="collapse = !collapse">
        <ChevronLeftIcon class="w-7 h-7 rounded-md border-2 "/>
      </button>
    </div>
  </div>
</template>

<script>
import ShigotoIcon from '../../assets/logo.svg?inline'
import KubernetesIcon from '../../assets/icons/kubernetes.svg?inline'
import AvatarIcon from '../../assets/icons/Avatar.svg?inline'
import DockerIcon from '../../assets/icons/DockerIcon.svg?inline'
import ChevronLeftIcon from "../../assets/icons/ChevronLeft.svg?inline"
import ChevronDownIcon from "../../assets/icons/ChevronDown.svg?inline"
import ScheduleIcon from "../../assets/icons/Schedule.svg?inline"
import LogsIcon from "../../assets/icons/Logs.svg?inline"
import TaskIcon from "../../assets/icons/TaskIcon.svg?inline"
import CreateTaskIcon from "../../assets/icons/CreateTask.svg?inline"
import SidebarElement from "~/components/dashboard/SidebarElement";
import Button from "~/components/shared/Button";
import Input from "~/components/shared/Input";
import ThemeToggle from "~/components/ThemeToggle";
import ToggleInput from "~/components/shared/ToggleInput";
import UserDropdown from "~/components/dashboard/UserDropdown";

export default {
  name: "Sidebar",
  components: {
    UserDropdown,
    ToggleInput,
    Input,
    Button,
    SidebarElement,
    ThemeToggle,
    KubernetesIcon,
    AvatarIcon,
    DockerIcon,
    ScheduleIcon,
    ShigotoIcon,
    ChevronLeftIcon,
    ChevronDownIcon,
    LogsIcon,
    CreateTaskIcon,
  },
  data() {
    return {
      collapse: false,
      routes: [
        {
          title: 'Deployment',
          children:
            [
              {
                route: 'Kubernetes',
                url: '/dashboard/deploy',
                icon: KubernetesIcon,
              },
              {
                route: 'Docker',
                url: '/dashboard/docker',
                icon: DockerIcon,
              },
            ],
        },
        {
          title: 'Cron',
          children: [
            {
              route: 'Create task',
              url: '/dashboard/tasks/create',
              icon: CreateTaskIcon,
            },
            {
              route: 'Task management',
              url: '/dashboard/tasks/manage',
              icon: TaskIcon,
            },
            {
              route: 'Create schedule',
              url: '/dashboard/tasks/schedule',
              icon: ScheduleIcon,
            },
            {
              route: 'Logs',
              url: '/dashboard/tasks/logs',
              icon: LogsIcon,
            },
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
