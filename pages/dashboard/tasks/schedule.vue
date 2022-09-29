<template>
  <div class="schedule">
    <div class="schedule__crontab">
      <h1 class="schedule__crontab-title">
        Quickly create crontab expressions.
      </h1>
      <CrontabGenerator />
    </div>
    <div class="schedule__container">
      <div class="schedule__interval">
        <h2 class="schedule__crontab-title">Interval schedule</h2>
        <Form :schema="intervalSchema" :model="intervalModel" />
      </div>
      <div class="schedule__clocked">
        <h2 class="schedule__crontab-title">Clocked schedule</h2>
        <Form :schema="clockedSchema" :model="intervalModel" />
      </div>
      <div class="schedule__solar">
        <h2 class="schedule__crontab-title">Solar schedule</h2>
        <Form :schema="solarSchema" :model="solarModel" />
      </div>
      <div />
      <Button class="schedule__button"> Create schedules </Button>
    </div>
    <DateTimePicker />
  </div>
</template>

<script>
import flatPickr from "vue-flatpickr-component";
import CrontabGenerator from "@/components/dashboard/CrontabGenerator";
import "assets/css/variables/colors.scss";
import Form from "@/components/form/Form";
import Button from "@/components/shared/Button";
import DateTimePicker from "@/components/shared/DateTimePicker";

export default {
  name: "Schedule",
  components: { DateTimePicker, Button, Form, CrontabGenerator },
  layout(context) {
    return "dashboard";
  },
  middleware: "auth",
  data() {
    return {
      intervalModel: {},
      solarModel: {},
    };
  },
  computed: {
    clockedSchema() {
      return {
        fields: [
          {
            type: "myDateTime",
            inputType: "myDateTime",
            fieldLabel: "Date & time",
            styleClasses: "flex-100",
            name: "clocked",
            model: "clocked",
          },
        ],
      };
    },
    intervalSchema() {
      return {
        fields: [
          {
            type: "myInput",
            inputType: "text",
            fieldLabel: "Every",
            styleClasses: "flex-100",
            name: "every",
            placeholder: "1",
            model: "name",
          },
          {
            type: "mySelect",
            fieldLabel: "Period",
            name: "period",
            model: "period",
            options: [
              { name: "Days", id: 0 },
              { name: "Seconds", id: 1 },
              { name: "Microseconds", id: 2 },
            ],
          },
        ],
      };
    },
    solarSchema() {
      return {
        fields: [
          {
            type: "mySelect",
            fieldLabel: "Event",
            name: "event",
            model: "event",
            options: [
              { name: "Astronomical dawn", id: 0 },
              { name: "Civil dawn", id: 1 },
              { name: "Nautical dawn", id: 2 },
              { name: "Astronomical dusk", id: 3 },
              { name: "Civil dusk", id: 4 },
              { name: "Solar noon", id: 5 },
              { name: "Sunrise", id: 6 },
              { name: "Sunset", id: 7 },
            ],
          },
          {
            type: "myInput",
            inputType: "text",
            fieldLabel: "Longitude",
            styleClasses: "flex-100",
            name: "longitude",
            placeholder: "65.2213123",
            model: "longitude",
          },
          {
            type: "myInput",
            inputType: "text",
            fieldLabel: "Latitude",
            styleClasses: "flex-100",
            name: "latitude",
            placeholder: "12.231231",
            model: "latitude",
          },
        ],
      };
    },
  },
};
</script>

<style scoped lang="scss">
.schedule {
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  &__button {
    flex: 100%;
  }

  &__interval {
    flex: 50%; /* or - flex: 0 50% - or - flex-basis: 50% - */
    /*demo*/
    width: 100%;
    margin-bottom: 10px;
    box-shadow: $shadow;
  }
  &__clocked {
    flex: 50%; /* or - flex: 0 50% - or - flex-basis: 50% - */
    width: 100%;
    /*demo*/
    margin-bottom: 10px;
    box-shadow: $shadow;
  }
  &__solar {
    flex: 50%; /* or - flex: 0 50% - or - flex-basis: 50% - */
    width: 100%;
    /*demo*/
    box-shadow: $shadow;
    margin-bottom: 10px;
  }

  &__crontab {
    padding: 2rem;
    box-shadow: $shadow;
    border-radius: $radius;

    &-title {
      margin-top: -1rem;
      margin-bottom: 2rem;
      font-size: 1.5rem;
      text-align: center;
    }
  }
  &__container {
    padding: 2rem;
    box-shadow: $shadow;
    border-radius: $radius;
    display: flex;
    flex-wrap: wrap;
  }
}
.form-wrapper {
  width: 100%;
}
</style>
