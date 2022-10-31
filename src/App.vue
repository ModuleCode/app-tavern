<template>
  <router-view />
</template>

<script setup>
import menuApi from '@/apis/menu.js'
menuApi.onlineStatus({
  status: 0
}).then(result => {
  console.log(result);
});
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === "hidden" || document.hidden) {
    //http://192.168.2.178:8080/test
    console.log('document visibilitychange：页面隐藏了', new Date())
    menuApi.onlineStatus({
      status: 0
    }).then(result => {
      console.log(result);
    });
  }
  if (document.visibilityState === "visible" || !document.hidden) {
    menuApi.onlineStatus({
      status: 1
    }).then(result => {
      console.log(result);
    });
    console.log('document visibilitychange：页面显示了', new Date())
  }
})

</script>



<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-color: rgb(63, 63, 63);
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
