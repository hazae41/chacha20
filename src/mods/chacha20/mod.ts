import { ChaCha20Cipher, load, Memory } from "@hazae41/chacha20-wasm";

await load()

export class Cipher {

  /**
   * Do not use
   * @param inner 
   */
  constructor(
    readonly inner: ChaCha20Cipher
  ) { }

  /**
   * Import a key and a nonce
   * @param key 
   * @param nonce
   * @returns 
   */
  static import(key: Uint8Array, nonce: Uint8Array): Cipher {
    return new Cipher(new ChaCha20Cipher(new Memory(key), new Memory(nonce)))
  }

  seek(position: number) {
    this.inner.seek(position)
  }

  feed(data: Uint8Array) {
    const memory = new Memory(data)

    this.inner.apply_keystream(memory)

    return new Uint8Array(memory.bytes)
  }

}