<template>
    <div class="grid">
        <!--  sideBar  -->
        <side-bar v-if="this.$route.fullPath !== '/login' &&
            this.$route.fullPath !== '/'" />
        <!--  navLine  -->
        <nav-line v-if="this.$route.fullPath !== '/login' &&
            this.$route.fullPath !== '/'" />
        <!--  Main-content  -->
        <router-view />
    </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import NavLine from "./components/navLine.vue";
export default {
    components: { NavLine, SideBar }
}
</script>

<style scoped>
.grid {
    width: 100vw;
    height: 99.5vh;
    display: grid;
    grid-template-columns: 2fr 10fr;
    grid-template-rows: 7.5% 92.5%;
    column-gap: 5vw;
    row-gap: 2.5vh;
}
</style>
