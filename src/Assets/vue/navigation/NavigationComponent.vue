<template>
    <div>
        <ul class="menu">
            <li v-for="(menuItems, index) in menuItems" :key="index"><router-link :to="menuItems.url">{{ menuItems.text }}</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavigationComponent',
    data() {
        return {
            menuItems: [
                { url: '/played', text: 'Played' },
                { url: '/incomplete', text: 'Playing' },
                { url: '/reviews', text: 'Reviews' }
            ]
        }
    }
};
</script>

<style scoped lang="scss">
.menu {
    list-style: none;
    float: right;
    background-color: rgba(0,0,0,.7);
    padding: 0 10px;
    
    li {
        display: inline-block;
        border-left: 1px solid #fff;
        
        &:first-child {
            margin-left: 0;
            border-left: none;
        }
    }
}
</style>
