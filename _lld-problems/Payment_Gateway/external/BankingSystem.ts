// This is a simulation of external API call to the banking system
export abstract class BankingSystem {
  abstract processPayment(amount: number, sender: string, receiver: string): boolean;
}
