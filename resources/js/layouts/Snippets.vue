<template>
     <div class="snippets">
         <div class="snippets-header uk-flex uk-flex-middle uk-flex-row uk-flex-between">
             <div class="uk-flex uk-flex-column uk-flex-middle">
                 <p>Соритруем по:</p>
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
                 <button class="uk-button uk-button-primary">Добавить</button>
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
                     <th>SOME</th>
                     <th>Статус</th>
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
                     <td id="area-btn" class="uk-flex">
                         <input type="checkbox" class="status-btn" id="">
                     </td>
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
.snippets {
    grid-column: 2/3;
    grid-row: 2/3;
    padding: 30px 0 0 30px;
}
.snippets-header{
    width: 87.5%;
    height: 25%;
}
.snippets-body{
    width: 87.5%;
    height: 65%;
}
#area-btn{
    position: relative;
}
.status-btn{
    width: 38px;
    appearance: none;
    cursor: pointer;
}
.status-btn::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 25px;
    border-radius: 16px;
    background: #0e6dcd;

    transform: translate(50%,50%);
}
.status-btn::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 47.5%;
    height: 19px;
    width: 19px;
    border-radius: 100px;
    background: white;

    transform: translate(-60%,-10%);

    transition: all 0.4s ease;
}
.status-btn:checked::after{
    left: 75%;
}
</style>
