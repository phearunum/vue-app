
<template>
  <div class="them-sale" >
  <div class="header-sale">
  </div>
  </div>
</template>


<script>
import axios from "axios";
import router from "../router/index";
import store from "../store/index";
export default {
  name: "Sale",
  data() {},

  clearStore(state) {},
};
</script>

<style>
.them-sale {
  background-color: #fff !important;
  width: 100%;
  height: 100vh;
}
html,
body {
  background-color: #fff !important;
}
.them-sale{
    width: 70%!important;
    padding:10px;
    background-color: #fff!important;
    height: 100vh;
}
.them-sale .header-sale{
    width: 100%;
    background-color: aquamarine!important;
    height: 100px;
    border-radius: 4px;
}
</style>
