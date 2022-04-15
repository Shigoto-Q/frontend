<template>
  <div class="dashboard -mt-8">
    <main>
      <div class="pt-2 overflow-hidden sm:pt-12 lg:relative lg:py-48">
        <div
          class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24"
        >
          <div>
            <div class="flex">
              <ShigotoLogo />
              <h1
                class="text-xl font-bold leading-snug tracking-tighter text-comet lg:text-5xl"
              >
                <div class="wrapper">
                  <span
                    class="typing text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-primary lg:block"
                  >
                    {{ title }},
                  </span>
                </div>
              </h1>
            </div>
            <div class="mt-2">
              <div class="mt-6 sm:max-w-xl">
                <h1
                  class="text-3xl font-extrabold text-comet tracking-tight sm:text-4xl"
                >
                  The simplest way to run your code on Kubernetes.
                </h1>
              </div>
              <div class="mt-12 sm:max-w-lg sm:w-full sm:flex">
                <div class="min-w-0 flex-1">
                  <UpdateMe />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div
            class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
          >
            <div class="hidden sm:block">
              <div
                class="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"
              />
              <svg
                class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width="404"
                height="392"
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="392"
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
            <div
              class="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12"
            >
              <img
                class="w-fit rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                src="../assets/images/dashboardSafari.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div class="relative mt-20">
        <div
          class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start"
        >
          <div class="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div
                class="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"
              />
              <svg
                class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width="404"
                height="392"
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      class="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="392"
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div
              class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20"
            >
              <div
                class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden"
              >
                <img
                  class="absolute inset-0 h-full w-full object-contain"
                  src="../assets/images/dashboardFeature1.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0"
          >
            <!-- Content area -->
            <div class="pt-12 sm:pt-16 lg:pt-20">
              <h2
                class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl"
              >
                Make your DevOps life easier.
              </h2>
              <div class="mt-6 text-gray-500 space-y-6">
                <p class="text-lg">
                  Shigoto is a primary-lightged Kubernetes service that lets you
                  deploy, monitor and primary-lightge your containers via an
                  intuitive web interface.
                </p>
                <p class="text-base leading-7">
                  With Shigoto, you don’t need to worry about operating servers
                  or clusters. Deploying and primary-lightging your cluster is
                  as easy as clicking a button.
                </p>
                <p class="text-base leading-7">
                  Create powerful workflows. Scale up and down automatically,
                  paying only when you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <div
          class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
        >
          <div class="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
            <div>
              <h2
                class="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"
              >
                Tailored for your requirements.
              </h2>
              <p class="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
                Shigoto is a primary-lightged Kubernetes service that lets you
                deploy, monitor and primary-lightge your containers via an
                intuitive web interface.
              </p>
              <p class="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
                With Shigoto, you don't need to worry about operating servers or
                clusters.
              </p>
              <p class="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
                Deploying and primary-lightging your cluster is as easy as
                clicking a button.
              </p>
              <div class="mt-6">
                <a href="#" class="text-base font-medium text-primary">
                  Meet our investors and advisors&nbsp&rarr;
                </a>
              </div>
            </div>
            <div
              class="feature__image relative -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full"
            >
              <img
                class="scale-125 w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-full lg:max-w-none"
                src="../assets/images/img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Vue from "vue";
import { defineComponent, h } from "@vue/composition-api";
import VueCompositionAPI from "@vue/composition-api";
import DockerIcon from "../assets/icons/DockerIcon.svg?inline";
import ShigotoLogo from "../assets/logo.svg?inline";
import UpdateMe from "../components/UpdateMe.vue";

Vue.use(VueCompositionAPI);
export default {
  components: {
    DockerIcon,
    ShigotoLogo,
    UpdateMe,
  },
  data() {
    return {
      title: "Shigoto",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "The simplest way to run your code on Kubernetes.",
          name: "The simplest way to run your code on Kubernetes.",
          content:
            "Deploying and managing your cluster is as easy as clicking a button.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.typing {
  width: 22ch;
  animation: typing 2s steps(22), blink 0.8s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
@media (max-width: 800px) {
  .dashboard {
    margin-top: 6rem;
  }
  .feature__image {
    width: 300px;
    margin-top: 2rem;
    transform: scale(0.8);
    margin-left: 1.4rem;
  }
}
</style>
