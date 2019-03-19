<template>
  <div class="outer">
    <b-navbar
      toggleable="md"
      type="light"
      variant="primary"
    >

      <b-navbar-brand>
        <router-link to="/Home">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'java' }" />
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse
        is-nav
        id="nav_collapse"
      >

        <b-navbar-nav class="ml-auto">
          <router-link
            v-for="routes in links"
            v-bind:key="routes.id"
            :to="`${routes.page}`"
          >

            <b-nav-item :to="routes.page">{{ routes.text }}</b-nav-item>
          </router-link>

        </b-navbar-nav>
        <!-- Right aligned nav items -->

        <b-navbar-nav class="ml-auto">
          <b-navbar-brand id="vuelogo">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'vuejs' }" />
          </b-navbar-brand>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  </div>
</template>

<script>
import Social from './Social'
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
      ],
      components: {
        Social: Social
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-link:focus {
  font-weight: 445;
  /* text-shadow: 0px 0px 50px black; */
  /* transition: text-shadow 0.75s ease-in-out; */
}
.fa-vuejs.fa-w-14 {
  color: #42b883;
  /* background-color: black; */
}

.fa-w-14 {
  /* padding: 20px; */
  font-size: 40px;
  /* text-align: center; */
  /* text-decoration: none;  */
  transition: all 0.1s ease-in-out;
}

.fa-w-12 {
  color: #007396;
  /* padding: 20px; */
  font-size: 40px;
  /* text-align: center; */
  /* text-decoration: none;  */
  transition: all 0.1s ease-in-out;
}
.fa-w-12:hover {
  color: #ed8b00;
  opacity: 0.7;
  transform: scale(1.05, 1.05);
}
.fa-w-14:hover {
  color: #2c3e50;
  opacity: 0.7;
  transform: scale(1.05, 1.05);
}

#outer {
  text-align: center;
}

.bg-primary {
  background-color: transparent !important;
  background: rgba(0, 0, 0, 0.1) !important;
}

#vuelogo {
  margin: 0;
}

.navbar-brand {
  margin: 0;
}
</style>
