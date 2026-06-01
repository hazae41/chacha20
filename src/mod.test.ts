import { assert, test } from "@hazae41/phobos";
import { chaCha20 } from "./mod.ts";

test("chacha", () => {
  const key = crypto.getRandomValues(new Uint8Array(32))
  const nonce = crypto.getRandomValues(new Uint8Array(12))

  const encryptor = chaCha20.Cipher.import(key, nonce)
  const decryptor = chaCha20.Cipher.import(key, nonce)

  const message = crypto.getRandomValues(new Uint8Array(256))

  const encrypted = encryptor.feed(message)
  const decrypted = decryptor.feed(encrypted)

  assert(message.toString() === decrypted.toString())
})