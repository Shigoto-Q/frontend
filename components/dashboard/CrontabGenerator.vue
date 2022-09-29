<template>
  <div class="crontab">
    <form class="crontab__form">
      <SingleInput
        v-for="(item, i) in numInputs"
        :key="i"
        :label="item.label"
        :focus="activeInput === i"
        :value="crontab[i]"
        input-type="text"
        :is-last-child="i === numInputs - 1"
        :should-auto-focus="true"
        pattern=""
        @on-change="handleOnChange"
        @on-keydown="handleOnKeyDown"
        @on-paste="handleOnPaste"
        @on-focus="handleOnFocus(i)"
        @on-blur="handleOnBlur"
      />
    </form>
    <div class="crontab__table-container">
      <table class="crontab__table">
        <tbody>
          <tr>
            <td data-label="">
              *
            </td>
            <td data-label="Due Date">
              any value
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Account">
              ,
            </td>
            <td data-label="Due Date">
              value list separator
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Account">
              -
            </td>
            <td data-label="Due Date">
              rage of values
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Acount">
              /
            </td>
            <td data-label="Due Date">
              step values
            </td>
          </tr>
          <tr v-show="isMinute">
            <td scope="row" data-label="Acount">
              0-59
            </td>
            <td data-label="Due Date">
              allowed values
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Acount">
              0-23
            </td>
            <td data-label="Due Date">
              allowed values
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Acount">
              1-31
            </td>
            <td data-label="Due Date">
              allowed values
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Acount">
              1-12
            </td>
            <td data-label="Due Date">
              allowed values
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Acount">
              JAN-DEC
            </td>
            <td data-label="Due Date">
              alternative values
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Acount">
              0-6
            </td>
            <td data-label="Due Date">
              allowed values
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Acount">
              SUN-SAT
            </td>
            <td data-label="Due Date">
              alternative values
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Button class="crontab__button">
      Create
    </Button>
  </div>
</template>

<script>
import OTPInput from '@/components/OTP'
import Button from '@/components/shared/Button'

const BACKSPACE = 8
const LEFT_ARROW = 37
const RIGHT_ARROW = 39
const DELETE = 46

export default {
  name: 'CrontabGenerator',
  components: { Button, OTPInput },
  data () {
    return {
      numInputs: [
        {
          label: 'minute'
        },
        {
          label: 'hour'
        },
        {
          label: 'day(month)'
        },
        {
          label: 'month'
        },
        {
          label: 'day(week)'
        }
      ],
      activeInput: 0,
      crontab: [],
      isMinute: false,
      isHour: false,
      isDayMonth: false,
      isMonth: false,
      isDayWeek: false
    }
  },
  methods: {
    async verifyOtp () {
      const crontab = Number(this.crontab.join(''))
    },
    async cancel2faAndGoBack () {},
    handleOnFocus (index) {
      this.activeInput = index
    },
    handleOnBlur () {
      this.activeInput = -1
    },
    checkFilledAllInputs () {
      if (this.crontab.join('').length === this.numInputs) {
        return this.$emit('on-complete', this.crontab.join(''))
      }
      return 'Wait until the user enters the required number of characters'
    },
    focusInput (input) {
      this.activeInput = Math.max(Math.min(this.numInputs - 1, input), 0)
    },
    focusNextInput () {
      this.focusInput(this.activeInput + 1)
    },
    focusPrevInput () {
      this.focusInput(this.activeInput - 1)
    },
    changeCodeAtFocus (value) {
      this.oldOtp = Object.assign([], this.crontab)
      this.$set(this.crontab, this.activeInput, value)
      if (this.oldOtp.join('') !== this.crontab.join('')) {
        this.$emit('on-change', this.crontab.join(''))
        this.checkFilledAllInputs()
      }
    },
    handleOnPaste (event) {
      event.preventDefault()
      const pastedData = event.clipboardData
        .getData('text/plain')
        .slice(0, this.numInputs - this.activeInput)
        .split('')
      if (this.inputType === 'number' && !pastedData.join('').match(/^\d+$/)) {
        return 'Invalid pasted data'
      }
      const currentCharsInOtp = this.crontab.slice(0, this.activeInput)
      const combinedWithPastedData = currentCharsInOtp.concat(pastedData)
      this.$set(
        this,
        'crontab',
        combinedWithPastedData.slice(0, this.numInputs)
      )
      this.focusInput(combinedWithPastedData.slice(0, this.numInputs).length)
      return this.checkFilledAllInputs()
    },
    handleOnChange (value) {
      this.changeCodeAtFocus(value)
      this.focusNextInput()
    },
    clearInput () {
      if (this.crontab.length > 0) {
        this.$emit('on-change', '')
      }
      this.crontab = []
      this.activeInput = 0
    },
    handleOnKeyDown (event) {
      switch (event.keyCode) {
        case BACKSPACE:
          event.preventDefault()
          this.changeCodeAtFocus('')
          this.focusPrevInput()
          break
        case DELETE:
          event.preventDefault()
          this.changeCodeAtFocus('')
          break
        case LEFT_ARROW:
          event.preventDefault()
          this.focusPrevInput()
          break
        case RIGHT_ARROW:
          event.preventDefault()
          this.focusNextInput()
          break
        default:
          break
      }
    }
  }
}
</script>

<style scoped lang="scss">
.crontab {
  display: flex;
  justify-content: center;
  flex-direction: column;

  &__table {
    margin-top: 2rem;
    &-container {
      display: flex;
      justify-content: center;
    }
  }

  &__form {
    display: flex;
    justify-content: space-between;
  }

  &__labels {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  &__button {
    margin-top: 9rem;
  }
}
table {
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 50%;
  table-layout: fixed;
  box-shadow: $shadow;
}

table tr {
  border: 1px solid #ddd;
  padding: 0.1em;
}

table th,
table td {
  padding: 0.325em;
  text-align: center;
}

table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.25;
}
</style>
