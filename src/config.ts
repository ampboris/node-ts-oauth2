export default function getConfig() {
    return {
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