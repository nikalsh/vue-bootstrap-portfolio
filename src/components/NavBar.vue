<template>
  <div class="outer">
    <b-navbar
      toggleable="md"
      type="light"
      variant="primary"
    > 

      <b-navbar-brand>Niklas H.</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse
        is-nav
        id="nav_collapse"
      >

        <b-navbar-nav class = "ml-auto">
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

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content"><em>User</em></template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
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

.bg-primary {
  background-color: transparent !important;
  background: rgba(0,0,0, 0.1) !important;
}

</style>
