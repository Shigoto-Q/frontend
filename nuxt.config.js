export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Shigoto",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "The simplest way to run your code on Kubernetes.",
        name: "The simplest way to run your code on Kubernetes.",
        content: "Shigoto is a managed Kubernetes service that lets you deploy, monitor and manage your containers via an intuitive web interface. With Shigoto, you don't need to worry about operating servers or clusters."
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.scss", "~/assets/css/fonts.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/internal/axios.client.js",
    "~/plugins/internal/bus.js",
    "~/plugins/internal/index.js",
    "~/plugins/vue-form-generators.js",
    "~/plugins/vue-final-modal.js",
    "~/plugins/vue-multiselect.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/svg",
    "@nuxt-hero-icons/outline/nuxt",
    "@nuxt-hero-icons/solid/nuxt",
    "@braid/vue-formulate/nuxt",
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    download: true,
    base64: true,
    inject: true,
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/image", "@nuxtjs/axios", "@nuxtjs/auth-next", "@nuxtjs/sentry"],
  sentry: {
    dsn: "https://008679fdfad241b3bdebb1eb9f8ef100@o408166.ingest.sentry.io/6320485",
    config:
      {
        tracesSampleRate: 1.0,
        vueOptions: {
          tracing: true,
          tracingOptions: {
            hooks: [ 'mount', 'update' ],
            timeout: 2000,
            trackComponents: true
          }
        },
        browserOptions: {}
      }
  },
  router: {
    middleware: [],
  },
  axios: {
    baseURL: process.env.BASE_URL,
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: "access",
          global: true,
          required: true,
          type: "Bearer",
        },
        user: {
          property: false,
          autoFetch: true,
        },
        endpoints: {
          login: { url: "/api/v1/token/", method: "post" },
          user: { url: "/api/v1/user/me/", method: "get" },
          logout: false,
        },
      },
    },
    redirect: {
      login: "/onboarding/login",
      logout: "/",
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vue-final-modal"],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
