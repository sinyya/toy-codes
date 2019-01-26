<template>
    <div class="aside">
      <ul>
        <li><router-link :to="{ name: 'Page', query:{ name : 'apple', color:'red'}}">사과</router-link></li>
        <li><router-link :to="{ name: 'Page', query:{ name : 'orange', color:'orange'}}">오렌지</router-link></li>
        <li><router-link :to="{ name: 'Page', query:{ name : 'grape', color:'purple'}}">포도</router-link></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Aside"
    }
</script>

<style scoped>

</style>
