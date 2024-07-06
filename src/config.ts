export default function getConfig() {
    return {
        "publicKeyPem": `
        -----BEGIN PUBLIC KEY-----
        MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEO+lvpQYLRRdHvj2gPJvmjVOP0niO
        d/w4adJjkBveeHghH/6nxIQl5i3l/uXrcZ7+fr/lYYzxMyfGmbax4V8Rhw==
        -----END PUBLIC KEY-----
        `,
        privateKey:
            '-----BEGIN RSA PRIVATE KEY-----\n' +
            '-----END RSA PRIVATE KEY-----\n',
        publicCertificate:
            '-----BEGIN CERTIFICATE-----\n' +
            '-----END CERTIFICATE-----\n',
        cachain:
            '-----BEGIN CERTIFICATE-----\n' +
            '-----END CERTIFICATE-----\n' +
            '-----BEGIN CERTIFICATE-----\n' +
            '-----END CERTIFICATE-----\n',
        auth_url: '',
        client_id: '',
        scope: '',
        clientSecret:'-----BEGIN EC PRIVATE KEY-----\n-----END EC PRIVATE KEY-----',
        clientJwk: {
            crv: 'P-256',
            x: '',
            y: '',
            kty: 'EC',
            kid: '',
        },
    }
}