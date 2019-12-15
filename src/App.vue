<template>
  <div id="app">
    <div class="head"><heading/></div>


    <transition>
      <router-view/>
    </transition>


    <div><bottoming/></div>
  </div>
</template>

<script>
  import heading from "./components/page1com/heading";
  import bottoming from "./components/page1com/bottoming";
export default {
  name: 'App',
  components:{
    heading,bottoming
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ffffff;
  overflow-x:hidden; /*bottom处导航栏不变*/
}
.head{
  margin-bottom: 60px;
}
.v-enter{
  opacity:0;
  transform:translateX(100%);
}
.v-leave-to{
  opacity:0;
  transform:translateX(-100%);
  position:absolute  /*让前后两个操作不互相干扰*/
}
.v-enter-active,
.v-leave-active{
   transition:all 0.5s ease;
}

</style>
