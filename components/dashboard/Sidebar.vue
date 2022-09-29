<template>
  <div>
    <div :class="sidebarClasses">
      <div class="logo">
        <img
          id="logo_img"
          src="../../assets/branding/logo/LogoWithoutText.png"
          alt="logo"
          @click="onImageClick"
        />
        <div class="logo_text">SHIGOTO</div>
        <i id="btn" class="bx bx-menu-alt-right" @click="onImageClick" />
      </div>
      <div class="nav_list">
        <div v-for="route in routes">
          <span v-show="collapse" class="route__title mt-4" />
          <ul>
            <li v-for="r in route.children">
              <NuxtLink :to="r.url" active-class="route__active">
                <component :is="r.icon" class="w-8 h-8 ml-6" />
                <span class="links_name">{{ r.route }}</span>
              </NuxtLink>
              <span class="tooltip">{{ r.route }}</span>
            </li>
          </ul>
        </div>
        <div class="logout">
          <a href="#">
            <i class="bx bx-log-out" />
            <span class="links_name">Log out</span>
          </a>
          <span class="tooltip">Log out</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShigotoIcon from "../../assets/logo.svg?inline";
import KubernetesIcon from "../../assets/icons/kubernetes.svg?inline";
import AvatarIcon from "../../assets/icons/Avatar.svg?inline";
import ChevronLeftIcon from "../../assets/icons/ChevronLeft.svg?inline";
import ChevronDownIcon from "../../assets/icons/ChevronDown.svg?inline";
import ScheduleIcon from "../../assets/icons/Schedule.svg?inline";
import LogsIcon from "../../assets/icons/Logs.svg?inline";
import TaskIcon from "../../assets/icons/TaskIcon.svg?inline";
import CreateTaskIcon from "../../assets/icons/CreateTask.svg?inline";
import SettingsIcon from "../../assets/icons/SettingsIcon.svg?inline";
import AlertIcon from "../../assets/icons/AlertIcon.svg?inline";
import NotificationIcon from "../../assets/icons/NotificationIcon.svg?inline";
import DockerIcon from "@/assets/icons/DockerColorIcon.svg?inline";
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
    AlertIcon,
    NotificationIcon,
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
      collapse: true,
      routes: [
        {
          title: "Deployment",
          children: [
            {
              route: "Kubernetes",
              url: "/dashboard/deploy",
              icon: KubernetesIcon,
            },
            {
              route: "Docker",
              url: "/dashboard/docker",
              icon: DockerIcon,
            },
          ],
        },
        {
          title: "Cron",
          children: [
            {
              route: "Task management",
              url: "/dashboard/tasks/manage",
              icon: TaskIcon,
            },
            {
              route: "Create schedule",
              url: "/dashboard/tasks/schedule",
              icon: ScheduleIcon,
            },
            {
              route: "Logs",
              url: "/dashboard/tasks/logs",
              icon: LogsIcon,
            },
          ],
        },
        {
          title: "Integrations",
          children: [
            {
              route: "Alerts",
              url: "/dashboard/integrations/alerts",
              icon: AlertIcon,
            },
            {
              route: "Notifications",
              url: "/dashboard/integrations/notifications",
              icon: NotificationIcon,
            },
          ],
        },
        {
          title: "Settings",
          children: [
            {
              route: "Settings",
              url: "/dashboard/settings",
              icon: SettingsIcon,
            },
          ],
        },
      ],
    };
  },
  computed: {
    sidebarClasses() {
      return {
        sidebar: true,
        open: this.collapse,
      };
    },
  },
  methods: {
    onImageClick() {
      this.collapse = !this.collapse;
    },
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
.sidebar {
  position: fixed;
  height: 100vh;
  width: 78px;
  background: rgba(86, 67, 204, 0.05);
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  z-index: 99;
  transition: width 0.5s;
}
.sidebar.open {
  width: 250px;
}
.sidebar .logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
}
.sidebar .logo #logo_img {
  height: 40px;
  position: absolute;
  top: 25px;
  left: 19px;
}
.sidebar .logo .logo_text {
  margin-left: 70px;
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(60deg, $primary-color, $primary-color-light);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  transform: translateX(-250px);
  opacity: 0;
  transition: 0.5s;
}
.sidebar.open .logo .logo_text {
  opacity: 1;
  transform: translateX(0);
}
.sidebar .logo #btn {
  color: #575f66;
  margin-right: 20px;
  font-size: 30px;
  transform: translateX(-250px);
  opacity: 0;
  transition: 0.5s;
}
.sidebar.open .logo #btn {
  opacity: 1;
  transform: translateX(0);
}
ul {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
ul li,
.route__title {
  display: flex;
  align-items: center;
  margin: 30px 0;
}
ul li a,
.logout a,
.route__title {
  display: flex;
  align-items: center;
  text-decoration: none;
}
ul li a i,
.logout a i,
.route__title {
  position: relative;
  color: #575f66;
  font-size: 25px;
  margin-left: calc((78px - 25px) / 2);
  z-index: 10;
}
.sidebar ul li a .links_name,
.sidebar .logout a .links_name,
.route__title {
  color: #575f66;
  margin: auto 30px;
  width: 110px;
  transform: translateX(-250px);
  opacity: 0;
  transition: 0.5s;
}
.sidebar.open ul li a .links_name,
.sidebar.open .logout a .links_name,
.route__title {
  opacity: 1;
  transform: translateX(0);
}
ul li a:hover i,
ul li a:hover .links_name {
  color: $primary-color;
  transition: 0.5s;
}
.route__active >>> span {
  color: $primary-color-light;
}
.sidebar ul li .tooltip,
.sidebar .logout .tooltip {
  color: #575f66;
  background: #fff;
  width: 110px;
  padding: 6px 12px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  opacity: 0;
  z-index: 8;
  transition: 0.5s;
}
.sidebar ul li:hover .tooltip,
.sidebar .logout:hover .tooltip {
  opacity: 1;
  left: 85px;
}
.sidebar.open ul li .tooltip,
.sidebar.open .logout .tooltip {
  display: none;
}
.sidebar .info {
  position: relative;
  margin-top: 10px;
}
.sidebar .info a .avator {
  width: 78px;
  position: relative;
  z-index: 10;
  transition: 0.5s;
}
.sidebar.open .info a .avator {
  transform: translateX(86px);
}
.sidebar .info a .table {
  position: absolute;
  z-index: 8;
  top: 30px;
  width: 70%;
  left: 15%;
  height: 0;
  margin: 0 auto;
  color: #fff;
  background: linear-gradient(60deg, #4d6fff, #aa6deb);
  border-radius: 20px;
  transition: 0.5s;
  opacity: 0;
}
.sidebar.open .info a .table {
  opacity: 1;
  height: 150px;
}
.sidebar .info .table_text {
  margin: 40px 10px 0;
  text-align: center;
  font-size: 0px;
  line-height: 25px;
  transition: 0.5s;
}
.sidebar.open .info .table_text {
  font-size: 13px;
  opacity: 1;
}
.table_text span {
  font-size: 14px;
  font-weight: bold;
}
.name {
  font-weight: bolder;
}
.country {
  font-size: 13px;
}
.sidebar .info .tooltip {
  color: #575f66;
  background: #fff;
  font-size: 15px;
  width: 150px;
  padding: 6px 12px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 8;
  transition: 0.5s;
}
.sidebar.open .info .tooltip {
  display: none;
}
.sidebar .info:hover .tooltip {
  opacity: 1;
  left: 85px;
}
.logout {
  position: absolute;
  bottom: 30px;
  display: flex;
  align-items: center;
}
.logout a:hover i,
.logout a:hover .links_name {
  color: #4d6fff;
  transition: 0.5s;
}
.home {
  position: relative;
  min-height: 100vh;
  top: 0;
  left: calc(78px - 20px);
  width: 100vw;
  z-index: 2;
  transition: all 0.5s ease;
}
.sidebar.open ~ .home {
  left: calc(250px - 20px);
  transition: all 0.5s ease;
}
.home .text {
  display: inline-block;
  color: #fff;
  font-size: 25px;
  font-weight: 500;
  margin: 30px;
  margin-left: 40px;
}
</style>
