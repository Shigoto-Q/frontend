<template>
  <div class="relative bg-white py-2 sm:py-24 lg:py-10">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h2 class="text-base font-semibold tracking-wider text-primary-light uppercase">Everything you need to run your app freely!</h2>
      <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Even more features!</p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div class="-mt-6">
                <div>
                  <span class="inline-flex items-center justify-center p-3 bg-ghost rounded-md shadow-lg border-2">
                    <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">{{ feature.name }}</h3>
                <p class="mt-5 text-base text-gray-500">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KubernetesIcon from "../assets/icons/kubernetes.svg?inline"
import DockerIcon from "../assets/icons/DockerColorIcon.svg?inline"
import TaskIcon from "../assets/icons/TaskIcon.svg?inline"
import ScheduleIcon from "../assets/icons/Schedule.svg?inline"
import MonitoringIcon from "../assets/icons/MonitoringIcon.svg?inline"
import AlertIcon from "../assets/icons/AlertIcon.svg?inline"
import WebhookIcon from "../assets/icons/WebhookIcon.svg?inline"
import CloudAPIIcon from "../assets/icons/CloudAPIIcon.svg?inline"

export default {
  name: 'LandingFeatures',
  components: {
    AlertIcon,
    KubernetesIcon,
    DockerIcon,
    TaskIcon,
    ScheduleIcon,
    MonitoringIcon,
    CloudAPIIcon,
  },
  data() {
    return {
      features: [
        { name: 'Kubernetes', icon:  KubernetesIcon, description: 'Flexible, and simple deployments, is what shigoto aims for with one-click deploys.'},
        { name: 'Cron jobs', icon: TaskIcon, description: 'Shigoto lets you schedule jobs, whether they are on your server, docker, or kubernetes.'},
        { name: 'Monitoring', icon: MonitoringIcon, description: 'With its real-time monitoring capability, Shigoto lets you stay alerted on your running jobs and it also stores their run history.'},
        { name: 'Scheduler', icon: ScheduleIcon, description: 'Whether you want to run something every day, every second, every full moon, it is all possible with Shigoto.' },
        { name: 'Docker', icon: DockerIcon, description: 'Not familiar with Docker? That is fine, shigoto does all the background work for you. From providing sample Dockerfiles, to building and pushing images.' },
        { name: 'Alerts', icon: AlertIcon, description: 'Get notified immediately, whether something fails, or succeeds, you choose your own alerts' },
        { name: 'REST API', icon: CloudAPIIcon, description: 'If you want to integrate it in your own system, Shigoto provides its own API.' },
        { name: 'Discord/Slack integrations', icon: WebhookIcon, description: 'Create discord or slack integrations on the fly.' },
      ] ,
    }
  },
}
</script>
