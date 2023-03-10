<template>

    <div uk-filter="target: .js-filter" class="settings">
        <div class="settings-header">
            <div>
                <ul class="uk-subnav uk-subnav-pill">
                    <li uk-filter-control=".setting_first" class="uk-active"><a class="uk-text-capitalize" href="#">Основные настройки</a></li>
                    <li uk-filter-control=".setting_second"><a class="uk-text-capitalize" href="#">Редактор кода</a></li>
                </ul>
            </div>
        </div>
        <ul class="js-filter uk-child-width-1-3@m uk-grid-small uk-grid-match uk-overflow-auto settings-body" uk-grid>
            <li class="uk-width-1-3 setting_first" v-for="index in 5">
                <div class="uk-card uk-card-small uk-card-default">
                    <div class="uk-card-header uk-text-center uk-flex">
                        <h3>Настройка_1</h3>
                    </div>
                    <div class="uk-card-body uk-text-center">
                        <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                    </div>
                </div>
            </li>
            <li class="uk-width-1-3 setting_second" v-for="index in 6">
                <div class="uk-card uk-card-small uk-card-default">
                    <div class="uk-card-header uk-text-center uk-flex">
                        <h3>Настройка_2</h3>
                    </div>
                    <div class="uk-card-body uk-text-center">
                        <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor
                            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.settings {
    grid-column: 2/3;
    grid-row: 2/3;
    padding: 30px 0 0 30px;
}

.settings-header {
    height: 15%;
}
.settings-body {
    height: 80%;
    width: 95%;
}

.uk-active a {
    background: none;
    border-bottom: 2px solid black;
    color: black;
}

.uk-subnav > * > :first-child {
    font-size: 1.5rem;
}

.uk-subnav > * > :hover {
    background: none;
}

th, td {
    text-align: center;
}

</style>
