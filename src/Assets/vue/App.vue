<template>
  <div id="app">
      <!--<p>Games reviewed: {{ gamesReviewed }}</p>-->
      <router-view name="login" />
      
      <div class="container">
          <header>
              <router-link class="logo" to="/"><img src="../img/logo.svg" alt="Playstation logo" /></router-link>
              <nav>
                  <router-view name="nav" />
              </nav>
          </header>
          <main>
              <router-view />
          </main>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'app',
    created() {
//      mapActions maps this dispatch call to this.getParts instead.
//      this.$store.dispatch('games/getGames');
        this.getGames();
    },
    computed: {
        gamesReviewed() {
            return this.reviewedGames();
        }
    },
    methods: {
        ...mapGetters('game', ['reviewedGames']),
        ...mapActions('game', ['getGames'])
    }
};
</script>

<style lang="scss">
body {
    background-color: #002055;
    background-image: radial-gradient(ellipse 50% 70% at 50% 0,#002c74 20%,#001536);
    background-attachment: fixed;
    color: #fff;
    text-align: left;
}

ul {
    padding: 0;
    
    li {
        list-style: none;
    }
}

a {
    padding: 10px;
    color: #fff;
    text-decoration: none;

    &:hover,
    &:focus {
        text-decoration: underline;
    }
}

.logo {
    width: 50px;
    display: inline-block;
    float: left;
}

.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

header {
    overflow: hidden;
}

main {
    clear: both;
}
    
h3, p {
    margin: 0;
} 
</style>
