<template>
  <label>
    <input type="checkbox">
    <span class="check"></span>
  </label>
</template>

<script>
export default {
  name: "ToggleInput"
}
</script>

<style scoped>

input[type="checkbox"]
{
  -webkit-appearance: none;
  visibility: hidden;
  display: none;
}

.check{
  position: relative;
  display: block;
  width: 50px;
  height: 20px;
  background: #092c3e;
  border-radius: 15px;
  cursor: pointer;
  overflow: hidden;
  transition: ease-in 0.5s;
}

input[type="checkbox"]:checked ~ .check
{
  background: #fff;
}

.check::before{
  content: '';
  position: absolute;
  top: 1px;
  left: 1px;
  background: #fff;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  transition: 0.5s;
}

input[type="checkbox"]:checked ~ .check::before
{
  transform: translateX(30px);
}

.check::after{
  content: '';
  position: absolute;
  top: 1px;
  left: 1px;
  background: #092c3e;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  transition: 0.5s;
  transform: translateX(30px);
}

input[type="checkbox"]:checked ~ .check::after
{
  transform: translateX(0);
}
</style>
