<template>
    <div>
        <p v-if="activeLog">Vue is awesome!</p>
        <p v-else>Oh no 😢</p>

        <a href="#" @click="userLogin()">Login here!</a>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'LoginComponent',
    computed: {
        activeLog() {
            return this.isLoggedIn();
        }
    },
    methods: {
        ...mapActions('login', ['login']),
        ...mapGetters('login', ['isLoggedIn']),
        userLogin() {
            this.login();
        }
    }
}
</script>
