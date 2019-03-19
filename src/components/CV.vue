<template>
  <div class="hello">
    <pdf src="./static/NiklasHelander.CV2019.pdf"></pdf>
    
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: 'home',
  data () {
    return {
      msg: 'CV'
    }
  },
  components: {
    pdf
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
