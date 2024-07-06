// src/types/node-jose.d.ts
declare module 'node-jose' {
    export namespace JWK {
        function createKeyStore(): KeyStore;
        interface KeyStore {
            add(pem: string, format: string): Promise<Key>;
            toJSON(includePrivate?: boolean): KeyStoreJSON;
        }
        interface Key {
            toJSON(includePrivate?: boolean): KeyJSON;
        }
        interface KeyStoreJSON {
            keys: KeyJSON[];
        }
        interface KeyJSON {
            kty: string;
            [key: string]: any;
        }
    }
}
