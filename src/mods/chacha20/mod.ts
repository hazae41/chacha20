import { chaCha20Poly1305Wasm } from "@hazae41/chacha20poly1305-wasm";

await chaCha20Poly1305Wasm.load()

export class Cipher {

  /**
   * Do not use
   * @param inner 
   */
  constructor(
    readonly inner: chaCha20Poly1305Wasm.ChaCha20Cipher
  ) { }

  /**
   * Import a key and a nonce
   * @param key 
   * @param nonce
   * @returns 
   */
  static import(key: Uint8Array, nonce: Uint8Array): Cipher {
    const { Memory, ChaCha20Cipher } = chaCha20Poly1305Wasm

    const inner = new ChaCha20Cipher(new Memory(key), new Memory(nonce))

    return new Cipher(inner)
  }

  seek(position: number) {
    this.inner.seek(position)
  }

  feed(data: Uint8Array) {
    const { Memory } = chaCha20Poly1305Wasm

    const memory = new Memory(data)

    this.inner.apply_keystream(memory)

    return new Uint8Array(memory.bytes)
  }

}