<template>
<div class="navLine">
    <p>{{ this.$route.name }}</p>
</div>
</template>

<script>
export default {
    name: "navLine"
}
</script>

<style scoped>
.navLine {
    grid-column: 2/3;
    grid-row: 1/2;
    justify-self: flex-start;
    align-self: end;
}
</style>
