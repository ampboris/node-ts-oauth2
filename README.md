# node-ts-oauth2

## setup new project

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

```
npm install axios
npm install @types/axios --save-dev
```

## setup from github
