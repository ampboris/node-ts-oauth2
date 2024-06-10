# node-ts-oauth2

## setup new project (skip this if cloning repo)
* setup project
```
› npm init -y
› npm install typescript ts-node @types/node --save-dev  
› npx tsc --init   
› mkdir src
› touch src/index.ts
› code .
```
* Add a simple TypeScript script in src/index.ts:
```
console.log("Hello, TypeScript!");
```

* Open package.json and add the following under scripts:
```
"scripts": {
  "start": "ts-node src/index.ts"
}
```
* Test setup
```
› npm start
```
* Install needed packages
```
npm install axios
npm install @types/axios --save-dev
npm install jsrsasign
```

## clone from github
* clone repo
* npm i
* npm start or npm run start

## test oauth
* fill in required values in config.ts
* npm run auth
