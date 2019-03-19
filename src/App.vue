<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="router-view-wrapper">
      <router-view></router-view>
    </div>
    <div class="fixed-bottom">
      <Social></Social>

      <LIACounter></LIACounter>
    </div>

  </div>
</template>

<script>
import NavBar from './components/NavBar'
import LIACounter from './components/LIACounter'
import Social from './components/Social'

export default {
  name: 'app',
  components: {
    NavBar: NavBar,
    LIACounter: LIACounter,
    Social: Social
  }
}
</script>


<style>
:root {
  padding: 0;
  overflow-y: scroll;
}

body {
  padding: 0;
  margin: 0;
  background-color: rgb(226, 226, 226);
  font-size: 1.1rem;
}

#app {
  font-family: "Avenir", "Calibri", "Gill Sans", "Garamond" "Cambria",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.bg-primary {
  background-color: transparent !important;
  background: rgba(0, 0, 0, 0.1) !important;
}
h1,
h2 {
  font-weight: normal;
  margin-top: 60px;
}

ul {
  list-style-type: none;
  /* padding: 0; */
}

li {
  /* display: inline-block; */
  /* margin: 0 10px; */
}

a {
  color: #42b983;
}
</style>
