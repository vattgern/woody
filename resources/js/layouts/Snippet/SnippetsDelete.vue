<template>
    <div class="snippets">
        <div class="snippets-header">
            <h2 class="uk-article-title">Удаленные сниппеты</h2>
        </div>
        <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match uk-overflow-auto snippets-body" uk-grid>
            <div class="uk-width-1-3" v-for="index in 9">
                <div class="uk-card uk-card-small uk-card-default">
                    <div class="uk-card-header uk-text-center">
                        <h3>Snippet Title</h3>
                    </div>
                    <div class="uk-card-body uk-text-center">
                        <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div class="uk-card-footer uk-flex uk-flex-between">
                        <a href="#" class="uk-button uk-button-text uk-text-primary uk-text-small">Восстановить</a>
                        <p class="divider">|</p>
                        <a href="#" class="uk-button uk-button-text uk-text-danger uk-text-small">Удалить навсегда</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SnippetsDelete",
};
</script>

<style scoped>
.snippets {
    grid-column: 2/3;
    grid-row: 2/3;
    padding: 30px 0 0 30px;
}

.snippets-header {
    height: 15%;
}
.snippets-body {
    height: 80%;
}

h2 {
    margin-top: 0;
    font-size: 2.2rem;
    letter-spacing: 0.045em;
    line-height: 97.4%;
    font-weight: 700;
}

a {
    font-size: 0.8rem;
}

p {
    padding-bottom: 10px;
    line-height: 97.4%;
    letter-spacing: 0.045em;
    height: 20%;
}
</style>
