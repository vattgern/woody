<template>
    <div class="snippets">
        <div class="snippets-header">
            <h2 class="uk-article-title">
                Удаленные сниппеты
            </h2>
        </div>
        <div class="snippets-body uk-overflow-auto uk-grid-large" uk-grid>
            <div class="uk-card uk-card-default" v-for="index in 10">
                <div class="uk-card-header">
                    <h3>Snippet Title</h3>
                </div>
                <div class="uk-card-body">
                    <p>
                        Snippet Description
                        Snippet Description
                        Snippet Description
                        Snippet Description
                        Snippet Description
                        Snippet Description
                        Snippet Description
                        Snippet Description
                        Snippet Description
                        Snippet Description
                        Snippet Description
                        Snippet Description
                    </p>
                </div>
                <div class="uk-card-footer uk-flex uk-flex-row uk-flex-between">
                    <a href="#" class="uk-button uk-button-text">Восстановить</a>
                    <a href="#" class="uk-button uk-button-text uk-text-danger">Удалить навсегда</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SnippetsDelete"
}
</script>

<style scoped>
.snippets {
    grid-column: 2/3;
    grid-row: 2/3;
    padding: 30px 0 0 0;
}
.snippets-header{
    width: 87.5%;
    height: 25%;
}
.snippets-body{
    width: 87.5%;
    height: 65%;
}
</style>
