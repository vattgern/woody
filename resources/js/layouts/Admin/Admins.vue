<template>
    <div class="admins">
        <div class="admins-header uk-flex uk-flex-middle uk-flex-row uk-flex-between">
            <div class="uk-flex uk-flex-column uk-flex-middle">
                <p>Соритруем по:</p>
                <ul class="uk-subnav uk-subnav-pill" uk-margin>
                    <li class="uk-active"><a href="#">Типу</a></li>
                    <li><a href="#">Названию</a></li>
                    <li><a href="#">Дате</a></li>
                </ul>
            </div>
            <h2 class="uk-article-title uk-flex uk-text-center">
                Администраторы
            </h2>
            <div>
                <button class="uk-button uk-button-primary">Добавить</button>
            </div>
        </div>
        <div class="admins-body uk-overflow-auto">
            <table class="uk-table uk-table-hover uk-table-divider">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>SOME</th>
                    <th>SOME</th>
                    <th>SOME</th>
                    <th>SOME</th>
                    <th>SOME</th>
                    <th>SOME</th>
                    <th>SOME</th>
                    <th><span uk-icon="pencil"></span></th>
                    <th><span uk-icon="trash"></span></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in 10">
                    <td>{{index}}</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td>Table Data</td>
                    <td><span uk-icon="pencil"></span></td>
                    <td><span uk-icon="trash"></span></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
.admins {
    grid-column: 2/3;
    grid-row: 2/3;
    padding: 30px 0 0 30px;
}
.admins-header{
    width: 87.5%;
    height: 25%;
}
.admins-body{
    width: 87.5%;
    height: 65%;
}
</style>
