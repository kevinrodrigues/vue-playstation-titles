<template>
    <div>
        <div v-if="availableGames" class="wrapper">
            <h2>Reviews</h2>
            <ul class="ratings">
                <li v-for="(list, idx) in games.ps4" :key="idx">
                    <a href="#">
                        <div class="review-container">
                            <img :src="list.src" />
                            <div class="description">
                                <h3>{{ list.title }}</h3>
                                <p>{{ list.description }}</p>
                                <p>Cost: <strong>{{list.cost}}</strong></p>
                            </div>
                            <div class="rating-review">
                                <div class="review">
                                    <span class="star-rating">
                                        <input id="rating5" type="radio" name="rating" value="5">
                                        <label for="rating5">5</label>
                                        <input id="rating4" type="radio" name="rating" value="4">
                                        <label for="rating4">4</label>
                                        <input id="rating3" type="radio" name="rating" value="3" checked>
                                        <label for="rating3">3</label>
                                        <input id="rating2" type="radio" name="rating" value="2">
                                        <label for="rating2">2</label>
                                        <input id="rating1" type="radio" name="rating" value="1">
                                        <label for="rating1">1</label>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Reviews',
    data() {
        return { games: this.reviewedGames() };
    },
    computed: {
        availableGames() {
            return this.$store.state.game.games;
        },
    },
    methods: {
        ...mapGetters('game', ['reviewedGames']),
    },
}
</script>

<style scoped lang="scss">
.ratings {
    a {
        padding: 10px;
        display: block;
    }
    
    li {
        border-top: 1px solid #fff;
        margin-top: 5px;
        background: rgba(0,0,0,.6);

        &:first-child {
            border-top: none;
            margin-top: 0;
        }
    }
}

.review-container {
    width: 100%;
    padding: 5px;
    overflow: hidden;
    
    img {
        width: 80px;
        height: auto;
        float: left;
    }
}
    
.description {
    float: left;
    margin-left: 25px;
    max-width: 500px;
}

.star-rating:not(old){
    display        : inline-block;
    width          : 7.5em;
    height         : 1.5em;
    overflow       : hidden;
    vertical-align : bottom;
}

.star-rating:not(old) > input{
    margin-right : -100%;
    opacity      : 0;
}

.star-rating:not(old) > label{
    display         : block;
    float           : right;
    position        : relative;
    background      : url('../../img/star-off.svg');
    background-size : contain;
}

.star-rating:not(old) > label:before{
    content         : '';
    display         : block;
    width           : 1.5em;
    height          : 1.5em;
    background      : url('../../img/star-on.svg');
    background-size : contain;
    opacity         : 0;
    transition      : opacity 0.2s linear;
}

.star-rating:not(old) > label:hover:before,
.star-rating:not(old) > label:hover ~ label:before,
.star-rating:not(:hover) > :checked ~ label:before{
    opacity : 1;
}
</style>
