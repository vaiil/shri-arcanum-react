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
npm i --production
npm run build
echo 'API_URL=http://localhost:3007' > .env
npm run start -- --port 3008 
``` 

И откройте http://localhost:3008/repos/front

__Важно:__ Процесс сервера запустится в фоне, не забудьте его вынуть (`fg`) и прикончить.

## Замечания по реализации
Делал на next.js. К сожалению он [не поддерживает](https://github.com/zeit/next.js/issues/8053) catch-all урлы. 
Я это решил, добавив в исходный код роутера немного своего нехорошего кода. В итоге я подключаю [свою сборку](https://github.com/vaiil/next-js-catch-all) Next-а.

Проект в каком-то виде реализует необходимый функционал (хождение по директориям, открытие файлов), но не соответствует макетам.
(Переделка под Bem-React занимает оч. много времени, пока еще это в работе).

Также есть некоторые баги, которые пока не смог поправить:
* В production моде при серверном рендеринге на главной не работают ссылки в dropdown-е. 
На других страницах работают, при переходе JS на главную также работают. 
