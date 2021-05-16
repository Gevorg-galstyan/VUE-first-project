<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="px-3">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <li v-for="link in links" class="nav-item">
            <router-link :to="link.url" class="nav-link">{{link.title}}</router-link>
          </li>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  data(){
    return {
      links:[
        {url: '/', title: 'Home'},
        {url: '/about', title: 'About'},
      ]
    }

  }
}
</script>

<style scoped>

</style>
