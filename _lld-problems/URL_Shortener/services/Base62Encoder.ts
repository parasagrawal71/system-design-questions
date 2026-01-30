export class Base62Encoder {
  static chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  static encode(num: number): string {
    let result = "";
    while (num > 0) {
      result = this.chars[num % 62] + result;
      num = Math.floor(num / 62);
    }
    return result || "0";
  }
}

/*
Use the following to generate chars (**Remove the extra characters)

  let result = "";
  for(let i=48;i<=122;i++) {
      // console.log(String.fromCharCode(i))
      result += String.fromCharCode(i);
  }
  console.log(result)

*/
