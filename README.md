# node-ts-oauth2

This project is a quick help on integration - call oauth2 and ES256 pem to JWKS conversion

## Verify basic setup

* clone repo and enter project root
* npm i
* npm start
* hope it error free and see "Hello, TypeScript!"

## Run OAUTH2

* fill in required values in config.ts
* CA - root
* Key - private key
* Cert - leaves public pem
* check the zips
* npm run auth
* expecting successful response and an access token 🎉️

## ES256 public key to JWKS

* a sample private signed ES256 public key is setup in config.ts (publicKeyPem)
* run the demo, you see output in terminal console
* node-jose is used for this

```
› npm run gen-jwks                                        

> ts-oauth2@1.0.0 gen-jwks
> ts-node src/pk.to.jwks.ts

{
  "keys": [
    {
      "kty": "EC",
      "kid": "lzQfotAny55zOtn7p8eNgjXidRCr9AzOdbn54Vw00NI",
      "crv": "P-256",
      "x": "O-lvpQYLRRdHvj2gPJvmjVOP0niOd_w4adJjkBveeHg",
      "y": "IR_-p8SEJeYt5f7l63Ge_n6_5WGM8TMnxpm2seFfEYc"
    }
  ]
}
```

### Convert own pem to jwks

* follow next step to create key pairs
* open public.pem, copy pem content
* locate src/config.ts and paste content to "publicKeyPem"
* run npm run gen-jwks

### HOW TO - generate ES256 self-signed key pairs

* Generate a ES256 private key

```
openssl ecparam -name prime256v1 -genkey -noout -out <name-of-the-private-key>.pem
```

* Extract public key out of the generated private key

```
openssl ec -in <name-of-the-private-key>.pem -pubout -out <name-of-the-public-key>.pem
```

* Example:

```
openssl ecparam -name prime256v1 -genkey -noout -out key.pem
openssl ec -in key.pem -pubout -out public.pem

in node-ts-oauth2/ on main 
› openssl ecparam -name prime256v1 -genkey -noout -out key.pem

in node-ts-oauth2/ on main 
› openssl ec -in key.pem -pubout -out public.pem
read EC key
writing EC key
```

