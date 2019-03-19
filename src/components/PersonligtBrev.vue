<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Brev'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
