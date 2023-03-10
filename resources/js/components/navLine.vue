<template>
    <nav aria-label="Breadcrumb" class="navLine">
        <ul class="uk-breadcrumb">
            <li v-if="
            this.$route.path==='/snippets/user' ||
            this.$route.path==='/snippets/create' ||
            this.$route.path==='/snippets/edit' ||
            this.$route.path === '/snippets'"><router-link to="/snippets">Сниппеты</router-link></li>
            <li><span>{{  this.$route.name  }}</span></li>
        </ul>
    </nav>
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
    padding-left: 30px;
}

ul {
    margin: 0;
}

span {
    font-size: 1rem;
}
</style>
