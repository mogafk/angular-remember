# angular-remember
Simple directive for save value of inputs in localStorage

## Привет мир :с
>Вобщем это маленькая директива, что можешь вам запомнить значения полей типа select, textarea, input(text, checkbox, radio) используя простой, следующий синтаксис:

```html
<input type="radio" remember ng-model="color" ng-value="specialValue">
<input type="radio" ng-model="color" value="red">

<input type="checkbox" remember ng-model="testCheckbox"/>
<input type="checkbox" remember ng-model="testCustomVal" ng-true-value="'YES'" ng-false-value="'NO'"/>

<input type="text" name="testname2" ng-model="test" remember/>

<!--Обратите внимание, что здесь remember="compositColors" - это необходимо, поскольку        -->
<!--ng-options выбирает значения из сложной структуры(живой пример вы сможете увидеть в демо) -->
<select remember="compositeColors" ng-model="comColor" ng-options="color.name for color in compositeColors">
    <option value="">-- choose color --</option>
</select>

<select remember ng-model="simColor" ng-options="color for color in simpleColors">
    <option value="">-- choose color --</option>
</select>
```

#####[[DEMO]](http://codepen.io/mogafk/pen/oXjgrv?editors=101)

## Установка
>Получить код можно с помощью bower или прям с репозитария. Подключаемые файлы находятся в папке build angular-remember.js и angular-remember.min.js для собранного и минифицированного файла соотвественно.

    bower install angular-remember

## Для разработчиков
>Если вы хотите помочь и что-нибудь исправить, то в директории ***dev*** находится весь исходный код. Установить зависимости для сборки с помощью ***gulp*** можно просто

    npm install
