export default {
    created() {
        this.$store.dispatch('game/getGames');
    },
    computed: {
        games() {
            return this.$store.state.games || [];
        }
    }
}
