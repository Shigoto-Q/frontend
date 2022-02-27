<template>
  <div>
    <LandingIntro />
    <UpdateMe />
    <Nuxt />
  </div>
</template>

<script>
import UpdateMe from "../components/UpdateMe";
import LandingDescription from "../components/LandingDescription";
import LandingIntro from "../components/LandingIntro";
import Modal from "~/components/shared/Modal";
import Button from "~/components/shared/Button";
import Input from "~/components/shared/Input";

export default {
  name: 'IndexPage',
  components: {
    Input,
    Button,
    Modal,
    LandingIntro,
    LandingDescription,
    UpdateMe,
  },
  data: () => ({
    show: false
  }),
  methods: {
    confirm() {
      // some code...
      this.show = false
    },
    cancel(close) {
      // some code...
      close()
    }
  }
}
</script>
