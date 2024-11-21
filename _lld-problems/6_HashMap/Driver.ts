import { MyHashMap } from "./MyHashMap";

(function main() {
  /**
   * Key = number
   */
  const myHashMap: MyHashMap<number, string> = new MyHashMap<number, string>(7);
  myHashMap.put(1, "hi");
  myHashMap.put(2, "this");
  myHashMap.put(3, "is");
  myHashMap.put(4, "paras");

  console.log(`myHashMap: `, myHashMap);

  console.log(myHashMap.get(1));
  console.log(myHashMap.get(2));
  console.log(myHashMap.get(3));
  console.log(myHashMap.get(4));

  /**
   * Key = string
   */
  const myHashMap2: MyHashMap<string, string> = new MyHashMap<string, string>(7);
  myHashMap2.put("1", "hi");
  myHashMap2.put("2", "this");
  myHashMap2.put("3", "is");
  myHashMap2.put("4", "paras");

  console.log(`myHashMap2: `, myHashMap2);

  console.log(myHashMap2.get("1"));
  console.log(myHashMap2.get("2"));
  console.log(myHashMap2.get("3"));
  console.log(myHashMap2.get("4"));
})();
