import * as jose from 'node-jose';
import getConfig from './config'

const CONFIG = getConfig()
// Sample PEM string constant for a public key
const pemString = CONFIG.publicKeyPem;

// Function to convert PEM string to JWKS
async function convertPemToJwks(pem: string): Promise<jose.JWK.KeyStore> {
    const keystore = jose.JWK.createKeyStore();

    // Import the PEM key into the keystore
    await keystore.add(pem, 'pem').catch(err => {
        console.error('Failed to add PEM to keystore:', err);
        throw err;
    });

    // Return the JWKS
    return keystore;
}

// Example usage
async function main() {
    try {
        const jwks = await convertPemToJwks(pemString);
        console.log(JSON.stringify(jwks.toJSON(true), null, 2));
    } catch (error) {
        console.error('Error converting PEM to JWKS:', error);
    }
}

main();
