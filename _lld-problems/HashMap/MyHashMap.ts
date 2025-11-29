import { Entry } from "./Entry";

export class MyHashMap<K, V> {
  private static readonly INITIAL_CAPACITY: number = 2 ** 4;
  private static readonly MAX_CAPACITY: number = 2 ** 30;

  private _hashTable: Entry<K, V>[] = [];

  constructor(capacity: number = MyHashMap.INITIAL_CAPACITY) {
    const tableSize = this.findTableSize(capacity);
    this._hashTable = new Array<Entry<K, V>>(tableSize);
  }

  findTableSize(cap: number): number {
    // TODO: Implement
    return cap;
  }

  generateHash<K>(input: K): number {
    let hash = 0;

    if (input === null || input === undefined) {
      throw new Error("Unsupported type for hashing");
    }

    if (typeof input === "string") {
      // Handle string inputs
      for (let i = 0; i < input.length; i++) {
        hash = (hash * 31 + input.charCodeAt(i)) | 0; // Use bitwise OR to keep it 32-bit
      }
    } else if (typeof input === "number") {
      // Handle numeric inputs
      hash = input | 0; // Convert to 32-bit integer
    } else if (typeof input === "boolean") {
      // Handle boolean inputs
      hash = input ? 1231 : 1237; // Arbitrary numbers for true/false
    } else if (typeof input === "object") {
      // Handle objects by converting to JSON string and hashing the string
      const jsonString = JSON.stringify(input);
      for (let i = 0; i < jsonString.length; i++) {
        hash = (hash * 31 + jsonString.charCodeAt(i)) | 0;
      }
    } else {
      throw new Error("Unsupported type for hashing");
    }

    return hash;
  }

  put(key: K, value: V): void {
    const hashKey = this.generateHash(key) % this._hashTable.length;
    let node: Entry<K, V> | null = this._hashTable[hashKey];
    if (!node) {
      this._hashTable[hashKey] = new Entry(key, value);
    } else {
      let previousNode: Entry<K, V> = node;
      while (node !== null) {
        // Update value when same key
        if (node.key === key) {
          node.value = value;
          return;
        }
        previousNode = node;
        node = node.next;
      }

      previousNode.next = new Entry(key, value);
    }
  }

  get(key: K): V | null {
    const hashKey = this.generateHash(key) % this._hashTable.length;
    let node: Entry<K, V> | null = this._hashTable[hashKey];
    if (!node) return null;

    while (node !== null) {
      if (node.key === key) return node.value;
      node = node.next;
    }
    return null;
  }
}
