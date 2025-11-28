export class Account {
  constructor() {}

  verifyAccount(accNo: string): boolean {
    console.log("Account Verifie: " + accNo);
    return true;
  }
}