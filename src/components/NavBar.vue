<template>
  <div class="outer">
    <router-link
      v-for="routes in links"
      v-bind:key="routes.id"
      :to="`${routes.page}`"
    >
      {{ routes.text }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/'
        },
        {
          id: 1,
          text: 'CV',
          page: '/cv'
        },
        {
          id: 2,
          text: 'PersonligtBrev',
          page: '/personligtbrev'
        },
        {
          id: 3,
          text: 'Kontakt',
          page: '/kontakt'
        }
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
