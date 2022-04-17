<template>
  <div class="main">
    <div class="">
      <VerticalStep class="stepper" :steps="steps" />
    </div>
    <div class="content-wrapper mt-6" v-if="isSecondStep">
      <h2 class="content__subtitle">
        Launch your authenticator app and scan this QR code.
      </h2>
      <svg
        class="content__icon mb-2 fill-zinc-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
      <QRComponent class="content__qrcode" value="hehe" />
      <LinkButton class="content__button" text="Continue" />
    </div>
    <div class="content-wrapper content__second-step mt-6" v-if="isFirstStep">
      <h1 class="content__title">
        We strongly encourage our users to enable 2-factor authorization.
      </h1>
      <h2 class="content__subtitle content__highlight mb-6">
        However, you are still free to cancel and continue without it.
      </h2>
      <TwoFactorIcon class="content__tfa-icon" />
      <h1 class="content__subtitle">
        Download
        <span class="content__highlight font-bold">Google Authenticator</span>
        or a similar app!
      </h1>
      <div class="flex">
        <a
          href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en&gl=US"
          target="_blank"
        >
          <GooglePlayIcon class="content__store-icon" />
        </a>
        <a
          href="https://apps.apple.com/us/app/google-authenticator/id388497605"
          target="_blank"
        >
          <AppStoreIcon class="content__store-icon" />
        </a>
      </div>
      <Button text="Continue" @click="handleFirstStep" />
    </div>
    <div class="empty"></div>
  </div>
</template>

<script>
import QRComponent from "@/components/shared/QRComponent";
import Button from "@/components/shared/Button";
import VerticalStep from "@/components/shared/VerticalStep";
import LinkButton from "@/components/shared/LinkButton";
import TwoFactorIcon from "@/assets/icons/TwoFactorIcon.svg?inline";
import GooglePlayIcon from "@/assets/icons/GooglePlayIcon.svg?inline";
import AppStoreIcon from "@/assets/icons/AppStoreIcon.svg?inline";
import Link from "@/components/shared/Link";

export default {
  name: "generate",
  components: {
    Link,
    LinkButton,
    VerticalStep,
    Button,
    QRComponent,
    TwoFactorIcon,
    GooglePlayIcon,
    AppStoreIcon,
  },
  data() {
    return {
      steps: [
        {
          name: "Install two-factor authentication app",
          href: "#",
          status: "current",
        },
        { name: "Scan the QR code", href: "#", status: "upcoming" },
        { name: "Connect and verify your code", href: "#", status: "upcoming" },
      ],
      isFirstStep: true,
      isSecondStep: false,
      isFinalStep: false,
    };
  },
  methods: {
    handleFirstStep() {
      this.isFirstStep = false;
      this.isSecondStep = true;
      this.steps[0].status = "complete";
      this.steps[1].status = "current";
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  &__first-step {
    justify-content: center;
    margin-top: 8rem;
  }
}
.stepper {
  top: 30%;
  position: absolute;
}
.content-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
}
.content {
  &__subtitle {
    font-size: 1.125rem;
  }
  &__highlight {
    color: #a0a0a0;
  }
  &__store-icon {
  }
  &__second-step {
  }
  &__qrcode {
  }
  &__title {
    font-size: 1.625rem;
    font-family: Roboto, sans-serif;
  }
  &__button {
    margin-top: 2rem;
    margin-left: -1px;
  }

  &__tfa-icon {
    width: 10rem;
    height: 10rem;
  }

  &__icon {
    width: 1.5rem;
    height: 1.5rem;
    animation: bounce 1s infinite;
    @keyframes bounce {
      0%,
      100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
      }
      50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }
}
@media (max-width: 800px) {
  .main {
    flex-direction: column-reverse;
  }
  .content-wrapper {
    margin-left: 0;
  }
  .stepper {
    margin-top: 5rem;
    position: relative;
  }
  .content {
    &__button {
      padding: 10px;
    }
  }
}
</style>
