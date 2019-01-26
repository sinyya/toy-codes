<template>
  <div id="app">
    {{msg}}
    <app-aside></app-aside>
    <router-view></router-view>
  </div>
</template>

<script>
  import AppAside from '@/components/Aside'
export default {
  name: 'app',
  components:{
    AppAside
  },
  data () {
    return {
      msg: 'Watching route query in vue'
    }
  }
}
</script>

<style>

</style>
