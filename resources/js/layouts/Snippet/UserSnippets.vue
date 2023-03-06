<template>
    <div class="snippets">
        <div class="snippets-header uk-flex uk-flex-middle uk-flex-row uk-flex-between">
            <div class="uk-flex uk-flex-column uk-flex-middle">
                <p>Сортируем по:</p>
                <ul class="uk-subnav uk-subnav-pill" uk-margin>
                    <li class="uk-active"><a href="#">Типу</a></li>
                    <li><a href="#">Названию</a></li>
                    <li><a href="#">Дате</a></li>
                </ul>
            </div>
            <h2 class="uk-article-title uk-flex uk-text-center">
                Пользовательские<br>
                сниппеты
            </h2>
            <div>
                <router-link class="uk-button uk-button-primary uk-flex" to="/snippets/create">Добавить</router-link>
            </div>
        </div>
        <div class="snippets-body uk-overflow-auto">
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
                        <th>Статус</th>
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
                        <td id="area-btn" class="uk-flex">
                            <input type="checkbox" class="status-btn" id="status">
                        </td>
                        <td><router-link to="/snippets/edit"><span uk-icon="pencil"></span></router-link></td>
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
.snippets {
    grid-column: 2/3;
    grid-row: 2/3;
    padding: 30px 0 0 30px;
}

.snippets-header {
    width: 88%;
    height: 20%;
}

.snippets-body {
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

th {
    text-align: center;
}

#area-btn {
    position: relative;
}

.status-btn {
    width: 38px;
    appearance: none;
    cursor: pointer;
}

.status-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 25px;
    border-radius: 16px;
    background: #0e6dcd;

    transform: translate(50%, 50%);
}

.status-btn::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 47.5%;
    height: 19px;
    width: 19px;
    border-radius: 100px;
    background: white;
    transform: translate(-60%, -10%);
    transition: all 0.4s ease;
}

.status-btn:checked::after {
    left: 75%;
}</style>
