<!-- Please remove this file from your project -->
<template>
  <section class="relative w-full">
    <div
      class="relative items-center w-full px-5 py-12 mx-auto max-w-7xl md:px-12 lg:px-24"
    >
      <div class="flex w-full mx-auto text-left lg:mt-1">
        <div class="relative inline-flex items-center m-auto align-middle">
          <div class="max-w-6xl space-y-4 lg:text-center">
            <h1
              class="-mb-6 text-xl font-bold leading-snug tracking-tighter lg:text-5xl"
            >
              <div class="wrapper">
                <span
                  class="typing text-transparent bg-clip-text bg-gradient-to-r from-oyster to-mana lg:block"
                >
                  Shigoto,
                </span>
              </div>
              The simplest way to run your code on Kubernetes.
            </h1>
            <div
              class="flex flex-col w-full gap-2 mt-6 lg:flex-col max-w-7xl lg:justify-center lg:items-center md:flex-row"
            >
              <div>
                <p class="mb-2 text-lg font-light leading-relaxed text-club">
                  Make your DevOps life easier.
                </p>
              </div>
              <div class="flex mt-3 rounded-lg sm:mt-4 md:flex-row">
                <LinkButton to="/onboarding/register" text="Start now" />
                <LinkButton
                  to="/features"
                  text="See features"
                  secondary="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LinkButton from "./shared/LinkButton";
export default {
  name: "LandingIntro",
  components: { LinkButton },
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
</style>
