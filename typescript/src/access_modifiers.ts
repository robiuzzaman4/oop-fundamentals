// === access modifiers ===

class BankAccount {
  // public properties
  public name: string;

  // public readonly properties
  public readonly accountNumber: string;

  // private properties
  private _balance: number;

  // constructor
  constructor(name: string, accountNumber: string, _balance: number) {
    this.name = name;
    this.accountNumber = accountNumber;
    this._balance = _balance;
  }

  // using method
  public getBalance(): number {
    return this._balance;
  }

  // using getter methods
  get balance(): number {
    return this._balance;
  }

  // using method
  public addDeposit(amount: number) {
    this._balance += amount;
  }

  // using setter methods
  set diposit(amount: number) {
    this._balance += amount;
  }

  public makeWithdraw(amount: number, accountNumber: string) {
    if (accountNumber === this.accountNumber) {
      if (amount > 0) {
        if (this._balance >= amount) {
          this._balance -= amount;
        } else {
          console.log("Insufficient _balance.");
        }
      }
    } else {
      console.log("Invalid account number. Failed to withdraw.");
    }
  }
}

// initial account
const myAccount = new BankAccount("Ruhan", "AC-01", 50);

// diposit
myAccount.addDeposit(50);
myAccount.diposit = 30;

// withdraw
myAccount.makeWithdraw(30, "AC-01");

// current balance
const myBalance = myAccount.balance;
console.log(myBalance);
