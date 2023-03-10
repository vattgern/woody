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
                <router-link class="uk-button uk-button-primary uk-flex" to="/admins/create">Добавить</router-link>
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
                        <td>{{ index }}</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td>Table Data</td>
                        <td><router-link to="/admins/edit"><span uk-icon="pencil"></span></router-link></td>
                        <td><router-link to=""><span uk-icon="trash"></span></router-link></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="pagination uk-flex-left uk-flex-middle uk-flex">
            <ul class="uk-pagination" uk-margin>
                <li>
                    <a href="#"><span uk-pagination-previous></span></a>
                </li>
                <li class="uk-active"><a href="#">1</a></li>
                <li class="uk-disabled"><span>…</span></li>
                <li><a href="#">5</a></li>
                <li><a href="#">6</a></li>
                <li><a href="#">7</a></li>
                <li><a href="#">8</a></li>
                <li>
                    <a href="#"><span uk-pagination-next></span></a>
                </li>
            </ul>
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

.admins-header {
    width: 88%;
    height: 20%;
}

.admins-body {
    width: 90%;
    height: 60%;
    padding-right: 30px;
}

.pagination {
    height: 15%;
    width: 90%;
}

.pagination>ul {
    margin-bottom: 0;
}

.uk-subnav>* {
    padding-right: 0;
}

.uk-subnav {
    margin-right: 0;
    margin-top: 5px;
}

h2 {
    margin-top: 0;
    font-size: 2.2rem;
    letter-spacing: 0.045em;
    line-height: 97.4%;
    font-weight: 700;
}

table {
    background-color: white;
}

th,
td {
    text-align: center;
}

.add {
    color: white;
    text-decoration: none;
}
</style>
