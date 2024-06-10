// get.oauth2.token.ts

import { Agent } from 'https'
import axios from 'axios'
const jsrassign = require('jsrsasign')

import getConfig from './config'

const CONFIG = getConfig()

const mtlsSecrets = {
  key: CONFIG.privateKey,
  cert: CONFIG.publicCertificate,
  cachain: CONFIG.cachain,
}
 
const auth_url = CONFIG.auth_url
const client_id = CONFIG.client_id
const scope = CONFIG.scope
const clientSecret = CONFIG.clientSecret
const clientJwk = CONFIG.clientJwk
 
function buildClientAssertion() {
  const currentTime = +new Date()
  const issuedAtTimeSeconds = currentTime / 1000
  const expirationTimeSeconds = currentTime / 1000 + 3600
  const header = { kid: clientJwk.kid, alg: 'ES256' }
  const payload = {
    iss: client_id,
    aud: auth_url,
    sub: client_id,
    exp: Math.ceil(expirationTimeSeconds),
    iat: Math.ceil(issuedAtTimeSeconds),
  }
 
  return jsrassign.jws.JWS.sign('ES256', header, payload, clientSecret)
}

function getJWKthumbprint() {
  const thumbprint = jsrassign.jws.JWS.getJWKthumbprint(clientJwk);
  return thumbprint
}

function getRequest() {
  return {
    url: auth_url,
    method: 'POST',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/x-www-form-urlencoded',
      sslclientcertthumbprint: getJWKthumbprint(),
    },
    data: new URLSearchParams({
      client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
      client_assertion: buildClientAssertion(),
      client_id: client_id,
      grant_type: 'client_credentials',
      scope,
    }).toString(),
    httpsAgent: new Agent({
      key: mtlsSecrets.key,
      cert: mtlsSecrets.cert,
      ca: mtlsSecrets.cachain,
    }),
  }
}
 
async function test() {
  try {
    const response = await axios(getRequest())
    return response
  } catch (error) {
    console.error(error)
    throw error
  }
}
 
test()
  .catch((e) => {
    console.error(e)
  })
  .then((resp) => console.log(resp))
  .finally(() => console.log('end'))
