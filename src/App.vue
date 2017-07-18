<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body {
  font-family: "PingFangSC-Regular", "Microsoft Yahei", "Helvetica Neue",Helvetica,Arial;
}
ul,li {
  list-style: none;
}

a {
  text-decoration: none;
  display: inline-block;
}
.clearfix:after {
  display: block;
  width: 0;
  height: 0;
  content: 0;
  visibility: hidden;
  clear: both;
}

.clearfix {
  zoom: 1;
}
</style>
