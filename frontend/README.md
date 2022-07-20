# Проект: Место 

 

## Одностраничный сайт, представляющий собой социальную сеть для обмена фотографиями, сделанными во время путешествий. 

 

На странице представлено четыре основных блока, видимых с момента загрузки сайта, а также один скрытый блок, который можно "вызвать" нажатием на одну из кнопок. Секции, из которых состоит страница: 

 

* Шапка сайта, в котором содержится логотип проекта; 

 

* Блок с профилем, состоящий из аватара, фамилии и профессии пользователя, также имеются две кнопки. Одна из кнопок позволяет "вызывать" скрытый блок в котором можно редактировать информацию в профиле пользователя (функциональность реализована при помощи JavaScript), а вторая кнопка позволяет добавлять новые элементы на страницу (функциональность будет реализована позже); 

 

* Секция с фотографиями. Создана при помощи CSS grid. В каждом элементе с фотографией есть нижняя плашка с подписью к фотографии и кнопкой "лайк" (интерактивность кнопки будет реализована позже); 

 

* Футер, содержащий информацию об авторских правах. 

 

При создании страницы использовались языки HTML, CSS и JavaScript. Страница является адаптивной и способна подстраиваться под разрешение устройства и ширину окна браузера. 

 

Прочие технологии использованные в проекте: 

 

* При помощи псевдокласса :hover и атрибута сursor реализована инерактивность тех элементов, с которыми может взаимодействовать пользователь; 

 

* С помощью CSS transition полупрозрачность интерактивных элементов меняется плавно. 

 

### Функциональность добавленная во втором коммите: 

 

* Появилась возможность добавлять новые карточки и удалять ненужные (реализовано с помощью JS); 

 

* Можно ставить лайки фотографиям. 

 

Фотографии больше не прописаны в вёрстке, а добавляются из массива с данными, в котором хрнаится название места и ссылка на фотографию. Верстка каждой из карточек также не прописана в HTML, есть только один шаблон(тег <tmplate>), который клонируется столько раз, сколько элементов в массиве. 

 

Плавное открытие и закрытие попапов происходит с помощью CSS свойств visible и opacity. 

 

### Функциональность добавленная в тертьем коммите: 

 

* Выход из попапа происходит не только при нажатии на кнопку закрытия, но также и при клике вне окна с контентом попапа и при использовании клавиши "Escape"; 

 

* Формы редактирования профиля и добавления новой карточки проходят живую проверку правильности введенных данных. Так поля имени пользователя, его профессии и названия добавляемого места не могут быть пустыми, состоять из одной буквы или быть больше определённой длины, а в поле отведённом для ссылки на карточку может быть введен только url-link. 

 

### Добавлены класс ES6 

 

* Для создания карточки используется класс, в который передаются информация с названием карточки, ссылкой на добавляемое изображение и селектор шаблона. Приватные методы класса выполняют всю работу по поиску разметки карточки, наполнение шаблона содержимым и устанавливает обработчики событий; 

 

* Влаидация карточки осуществляется при помощи отдельного экземпляра класса, в конструктор которого передаются все необходимые поля, кнопки и стили, а также форма, которая проходит валидацию. 

 

Ссылка на сайт: 

 

https://bxnchxfxtxms.github.io/react-mesto-auth/