const readline = require("readline");

const rI = readline.createInterface(process.stdin, process.stdout);
const ExpenseManager = require("./ExpenseManager");
const { EqualSplit, ExactSplit, PercentSplit } = require("./models/Split");
const ExpenseType = require("./models/ExpenseType");

class Driver {
  constructor() {}

  main() {
    const expenseManager = new ExpenseManager();

    const users = [
      { id: "u1", name: "Paras", email: "paras@gmail.com", phone: 1234567890 },
      { id: "u2", name: "Aman", email: "aman@gmail.com", phone: 9087654321 },
      { id: "u3", name: "Amit", email: "amit@gmail.com", phone: 1234560987 },
      { id: "u4", name: "Suraj", email: "suraj@gmail.com", phone: 9087123456 },
    ];

    users.map((user) => {
      expenseManager.addUser(user);
    });

    rI.question("Enter inputs\n", function (inputs) {
      //   console.log(`inputs (type = ${typeof inputs}): `, inputs);
      if (inputs) {
        rI.close();
      }

      // todo: trim()
      const inputsArr = inputs.split(" ");
      const commandType = inputsArr[0];
      const paidBy = inputsArr[1];
      const amountPaid = inputsArr[2];
      const noOfUsers = inputsArr[3] ? Number(inputsArr[3]) : inputsArr[3];
      const owers = inputsArr.slice(4, 4 + noOfUsers);
      const expenseType = inputsArr[4 + noOfUsers];
      const unequalSplits = inputsArr.slice(4 + noOfUsers + 1);
      console.log(`inputsArr: `, inputsArr);
      console.table({ commandType, paidBy, amountPaid, noOfUsers, owers, expenseType, unequalSplits });

      switch (commandType) {
        case "SHOW":
          if (inputs.length === 1) {
            expenseManager.showBalances();
          } else {
            expenseManager.showBalance(paidBy);
          }
          break;

        case "EXPENSE":
          const splits = [];

          switch (expenseType) {
            case ExpenseType.EQUAL:
              console.log(`main: EQUAL called`);
              for (const ower of owers) {
                splits.push(new EqualSplit(ower));
              }
              expenseManager.addExpense(expenseType, "1", amountPaid, paidBy, splits); // todo: hardcoded expense id
              break;

            case ExpenseType.EXACT:
              console.log(`main: EXACT called`);
              for (const [index, ower] of owers.entries()) {
                splits.push(new ExactSplit(ower, unequalSplits[index]));
              }
              expenseManager.addExpense(expenseType, "1", amountPaid, paidBy, splits); // todo: hardcoded expense id
              break;

            case ExpenseType.PERCENT:
              console.log(`main: PERCENT called`);
              for (const [index, ower] of owers.entries()) {
                splits.push(new PercentSplit(ower, unequalSplits[index]));
              }
              expenseManager.addExpense(expenseType, "1", amountPaid, paidBy, splits); // todo: hardcoded expense id
              break;

            default:
              throw new Error("Invalid expense type");
          }
          break;

        default:
          throw new Error("Invalid command type");
      }

      console.log(`expenses: `, expenseManager.getExpenses());
      console.log(`balanceSheet: `, expenseManager.getBalanceSheet());
      // expenseManager.showBalance(paidBy);
      expenseManager.showBalances();
    });
  }
}

const driver = new Driver();
driver.main();

// Syntax  : EXPENSE paidBy amountPaid noOfUsers users_who_owes expenseType unequal_splits_if_any
// Input 1 : EXPENSE u1 100 4 u1 u2 u3 u4 EXACT 20 25 35 20
// Input 2 : EXPENSE u1 100 4 u1 u2 u3 u4 EQUAL
// Input 2 : EXPENSE u1 100 4 u1 u2 u3 u4 PERCENT 20 20 30 30
