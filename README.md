# ChaCha20

ChaCha20 for the web

```bash
npm install @hazae41/chacha20
```

[**📦 NPM**](https://www.npmjs.com/package/@hazae41/chacha20)

## Features

### Current features
- 100% TypeScript and ESM
- No external dependencies

## Usage 

```tsx
const key = crypto.getRandomValues(new Uint8Array(32))
const nonce = crypto.getRandomValues(new Uint8Array(12))

const encryptor = chacha20.Cipher.import(key, nonce)
const decryptor = chacha20.Cipher.import(key, nonce)

const message = new TextEncoder().encode("Hello world")

const encrypted = encryptor.feed(message)
const decrypted = decryptor.feed(encrypted)
```