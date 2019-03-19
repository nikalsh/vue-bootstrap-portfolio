<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b>Frågor</b>, <b>funderingar</b>, eller bolla <b>idéer</b>? <br> 
    Tveka inte att höra av <b>dig</b>!<br>
    <i><small>För offert, webhosting eller konsulting, vänd dig till <a href="https://www.jadeform.se"><strong>Jadeform</strong></a></small></i>
    <ContactForm></ContactForm>

  </div>
</template>

<script>
import ContactForm from './ContactForm'

export default {
  name: 'CV',
  components: {
    ContactForm: ContactForm
  },
  data () {
    return {
      msg: 'Kontakta mig'
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
