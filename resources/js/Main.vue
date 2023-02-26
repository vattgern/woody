<template>
    <div class="grid">
        <!--  sideNav  -->
        <side-nav v-if="this.$route.fullPath !== '/login' &&
                        this.$route.fullPath !== '/'"/>
        <!--  navLine  -->
        <nav-line v-if="this.$route.fullPath !== '/login' &&
                        this.$route.fullPath !== '/'"/>
        <!--  Main-content  -->
        <router-view />
    </div>
</template>

<script>
import SideNav from "./components/sideNav.vue";
import NavLine from "./components/navLine.vue";
export default {
    components: {NavLine, SideNav}
}
</script>

<style scoped>
.grid {
    width: 100vw;
    height: 90vh;
    display: grid;
    grid-template-columns: 2fr 10fr;
    grid-template-rows: 15% 85%;
    column-gap: 10vw;
    row-gap: 10vh;
}
</style>
