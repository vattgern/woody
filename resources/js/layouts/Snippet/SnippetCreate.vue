<template>
    <form class="uk-margin">
        <div>
            <h2 class="uk-text-bold uk-margin-left uk-flex">Создание <div>
        <div uk-form-custom="target: > * > p:last-child">
            <select aria-label="Custom controls">
                <option value="1">[Тип]</option>
                <option value="2">Тип 01</option>
                <option value="2">Тип 02</option>
                <option value="3">Тип 03</option>
                <option value="4">Тип 04</option>
            </select>
            <span class="uk-link">
                <p class="uk-margin-small-left uk-margin-small-right uk-margin-small-bottom">[Тип]</p>
            </span>
        </div>
    </div> сниппета
            </h2>
        </div>
        <div class="uk-flex">

            <div class="uk-width-1-2">
                <input class="uk-input uk-form-width-expand" type="text" placeholder="Название сниппета" aria-label="Large">
                <hr>
                <textarea class="uk-textarea uk-form-width-expand" rows="5" aria-label="Textarea"></textarea>
                <hr>
                <textarea class="uk-textarea uk-form-width-expand" rows="5" placeholder="Описание сниппета"
                    aria-label="Textarea"></textarea>
                <div class="uk-flex uk-flex-middle">
                    <p class="uk-margin-small-right">Область использования:</p>
                    <ul class="uk-subnav uk-subnav-pill" uk-switcher>
                        <li><a href="#">Опция_1</a></li>
                        <li><a href="#">Опция_2</a></li>
                    </ul>
                </div>
                <div class="uk-flex uk-flex-middle">
                    <label class="uk-margin-right" for="areaUsing">Название шорткода:</label>
                    <input class="uk-input uk-form-width-medium" type="text" aria-label="Large">
                </div>
            </div>

            <div class="uk-width-1-3 uk-margin-medium-left">
                <div class="uk-card uk-card-default uk-card-body">
                    <h3 class="uk-card-title uk-text-center">Добавить атрибут</h3>
                    <div class="uk-inline">
                        <a class="uk-form-icon uk-form-icon-flip" href="#" uk-icon="icon: plus"></a>
                        <input class="uk-input uk-form-width-large" type="text" placeholder="attr_1, attr_2"
                            aria-label="Clickable icon">
                    </div>
                </div>
                <div class="uk-card uk-card-default uk-card-body uk-margin-top">
                    <h3 class="uk-card-title uk-text-center">Публикация</h3>
                    <div class="uk-margin">
                        <input class="uk-input uk-form-width-large uk-text-center" type="text" aria-label="disabled"
                            value="Опция 1" disabled>
                    </div>
                    <div class="uk-flex">
                        <div class="uk-flex uk-flex-between uk-width-1-2">
                            <a href="#" class="uk-button uk-button-text uk-text-small uk-text-capitalize">Экспорт</a>
                            <p class="divider">|</p>
                            <a href="#"
                                class="uk-button uk-button-text uk-text-danger uk-text-small uk-text-capitalize">Удалить</a>
                        </div>
                        <button
                            class="uk-button uk-button-primary uk-button-small uk-width-1-2 uk-margin-medium-left">Опубликовать</button>
                    </div>
                </div>
            </div>

        </div>
    </form>
</template>

<script>
export default {
    name: "SnippetCreate"
}
</script>

<style scoped></style>
