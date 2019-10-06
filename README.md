# Arcanum react

Для запуска: 

```shell script
mkdir "vail" 
cd vail
git clone https://github.com/vaiil/shri-git-wrapper.git api
git clone https://github.com/vaiil/shri-arcanum-react.git front
npm --prefix ./api i --production
node ./api/server.js --path=../ --port 3007 &
cd front
npm i --production
npm run build
echo 'API_URL=http://localhost:3007' > .env
yarn start --port 3008 
``` 
