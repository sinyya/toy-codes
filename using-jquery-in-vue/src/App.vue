<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <h1>{{ msg }}</h1>
    <br/>
    <div class="card" style="width: 18rem; margin: 0 auto; text-align: left;">
      <div style="text-align: center;"><img src="./assets/logo.png" class="card-img-top" alt="logo" style="width: 130px;"></div>
      <div class="card-body">
        <h5 class="card-title">Vue에서 Jquery 사용하기</h5>
        <p class="card-text">클릭버튼을 선택하면 카드 제목을 Jquery selector로 찾아 text를 보여줍니다.</p>
        <button type="button" class="btn btn-primary" v-on:click="setAlert">Click</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    setAlert : function(){
      console.log('card-title!!');
      const cardTitle = $('.card-title').text()
      alert(cardTitle);
    }
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
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
