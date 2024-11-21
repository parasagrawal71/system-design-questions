export class Entry<K, V> {
  private _key: K;
  private _value: V;
  private _next: Entry<K, V> | null = null;

  constructor(key: K, value: V) {
    this._key = key;
    this._value = value;
  }

  get key(): K {
    return this._key;
  }

  get value(): V {
    return this._value;
  }

  get next(): Entry<K, V> | null {
    return this._next;
  }

  set key(key: K) {
    this._key = key;
  }

  set value(value: V) {
    this._value = value;
  }

  set next(next: Entry<K, V> | null) {
    this._next = next;
  }
}
