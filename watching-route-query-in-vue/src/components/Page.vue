<template>
    <div>
      <div>Page</div>
      <div>
        <ul>
          <li>name : {{name}}</li>
          <li>color : {{color}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Page",
      data: () => {
          return {
            name : '',
            color : ''
          }
      },
      created(){
          console.log("this.$route.query");
          console.log(this.$route.query);
          this.name = this.$route.query.name;
          this.color = this.$route.query.color;
      },
      watch : {
          '$route.query'() {
            console.log('watch!!!')
            this.name = this.$route.query.name;
            this.color = this.$route.query.color;
          }
      }

    }
</script>

<style scoped>

</style>
