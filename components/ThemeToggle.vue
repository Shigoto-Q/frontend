<template>
  <div class="btnContainer">
    <svg
      width="50"
      height="110"
      viewBox="0 0 100 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path id="rope" d="M50 0V130" stroke="#333842" stroke-width="6" />
      <path
        id="rope-original"
        d="M50 0V130"
        stroke="black"
        stroke-width="1"
        class="hidden"
      />
      <path
        id="rope-extended"
        d="M50 0V170"
        stroke="black"
        stroke-width="1"
        class="hidden"
      />
      <path
        id="rope-compressed"
        d="M50.6794 99.5395C50.6794 99.5395 51.0304 93.3539 50.6794 89.416C49.698 78.405 40.6105 73.7631 41.2462 62.7267C42.1339 47.3139 63.6882 46.1634 64.4843 30.7456C65.1561 17.7347 50.6794 0.375 50.6794 0.375"
        stroke="black"
        stroke-width="1"
        class="hidden"
      />
      <path
        id="rope-end"
        d="M39.282 5.16623C39.9597 1.92197 42.8198 -0.402344 46.134 -0.402344H54.756C58.1211 -0.402344 61.01 1.99207 61.6344 5.29871L68.4328 41.2987C69.2468 45.6092 65.941 49.5977 61.5544 49.5977H38.6135C34.1717 49.5977 30.8531 45.5141 31.7614 41.1662L39.282 5.16623Z"
        transform="matrix(1,0,0,1,0,120)"
        fill="#3B2898"
      />
    </svg>
    <div id="btn" class="btn no-highlight">
      <div class="knob no-highlight">
        <div class="light no-highlight" />
        <div class="top no-highlight" />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "ThemeToggle",
  data() {
    return {
      isChecked: false,
    };
  },
  mounted() {
    const btn = document.getElementById("btn");
    btn.addEventListener("mousedown", this.onButtonDown);
    btn.addEventListener("mouseup", this.onButtonUp);
  },
  methods: {
    onButtonDown() {
      const tl = gsap.timeline();
      tl.to("#rope-end", { duration: 0.2, y: 160 }, "start");
      tl.to("#rope", { duration: 0.2, morphSVG: "#rope-extended" }, "start");
    },
    onButtonUp() {
      const tl = gsap.timeline();
      tl.to(
        "#rope",
        { duration: 0.4, morphSVG: "#rope-compressed", ease: "bounce.out" },
        "up"
      );
      tl.to(
        "#rope",
        { duration: 0.2, morphSVG: "#rope-original", ease: "bounce.out" },
        "down"
      );
      tl.to("#rope-end", { duration: 0.4, y: 90, ease: "bounce.out" }, "up");
      tl.to("#rope-end", { duration: 0.2, y: 120, ease: "bounce.out" }, "down");

      this.isChecked = !this.isChecked;

      let x = 0;
      let backgroundColor = "#827D96";
      let size = "100px";

      if (this.isChecked) {
        x = 160;
        backgroundColor = "#FFFFFF";
        size = "500px";
      }

      tl.to(".knob", { x, duration: 1 }, "up");
      tl.to(".top", { backgroundColor, duration: 1 }, "up");
      tl.to(".light", { width: size, height: size, duration: 1 }, "up");
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.btnContainer {
  width: 320px;
  height: 160px;
  position: relative;
}

.btn {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #3c3459;
  border-radius: 999px;
  padding: 10px;
  cursor: pointer;
}

.knob {
  width: 140px;
  height: 140px;
  position: relative;
}

.top {
  background-color: #827d96;
  border-radius: 999px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.light {
  border-radius: 999px;
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #4cc3e2 10.42%,
    rgba(94, 199, 227, 0.791579) 27.08%,
    rgba(113, 204, 229, 0.35) 45.31%,
    rgba(144, 213, 231, 0.11) 65.1%,
    rgba(158, 216, 231, 0.02) 78.12%,
    rgba(177, 221, 233, 0) 95.83%
  );
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.hidden {
  visibility: hidden;
}

svg {
  position: absolute;
  bottom: 200px;
  left: 0;
  top: 90%;
}

.no-highlight {
  /* bad for accessibility - please don't use this in real world applications */
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
