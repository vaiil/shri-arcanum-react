# Тестирование
Чтобы запустить фронт хорошо бы иметь yarn, так как тут yarn.lock
Установка и запуск для тестирования (с dev зависимостями):

```shell script
mkdir "vail" 
cd vail
git clone https://github.com/vaiil/shri-git-wrapper.git api
git clone https://github.com/vaiil/shri-arcanum-react.git front
npm --prefix ./api i
node ./api/server.js --path=. --port 3007 &
cd front
yarn
echo 'API_URL=http://localhost:3007' > .env
yarn build
yarn start -- --port 3008 
``` 

__Важно:__ Процесс сервера запустится в фоне, не забудьте его вынуть (`fg`) и прикончить.

## Замечания по тестам
Есть некоторые баги, которые пока не смог поправить. Специально для них есть ряд тестов:

1.  В production моде при серверном рендеринге на главной не работают ссылки в dropdown-е 
(Дебажил, дебажил, да не выдебажил, во всяком случае пока не знаю почему так происходит).
    Влияет на тесты:
    * Список репозиториев  На странице / Работает переход при клике на репозиторий
    * Список репозиториев  На странице / После перехода dropdown закрыт *Открыт так как переход не происходит*
2. Закрытие dropdown после перехода. Влияет на тесты:
    * Список репозиториев  На странице /repos/front После перехода dropdown закрыт
3. Есть моргание на страницах просмотра директории и файла из-за чего их тесты на assertView не всегда проходят. Думаю поправлю.
    
# Arcanum react

Для запуска (создаст папку, в нее скачает два проекта): 

```shell script
mkdir "vail" 
cd vail
git clone https://github.com/vaiil/shri-git-wrapper.git api
git clone https://github.com/vaiil/shri-arcanum-react.git front
npm --prefix ./api i --production
node ./api/server.js --path=. --port 3007 &
cd front
yarn --production
echo 'API_URL=http://localhost:3007' > .env
yarn build
yarn start -- --port 3008 
``` 

И откройте http://localhost:3008/repos/front

__Важно:__ Процесс сервера запустится в фоне, не забудьте его вынуть (`fg`) и прикончить.

## Замечания по реализации
Делал на next.js. К сожалению он пока [не поддерживает](https://github.com/zeit/next.js/issues/8053) catch-all урлы. 
Я это решил, добавив в исходный код роутера немного своего нехорошего кода. В итоге я подключаю [свою сборку](https://github.com/vaiil/next-js-catch-all) Next-а.


