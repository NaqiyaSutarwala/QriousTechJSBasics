"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

console.log(accounts);

const creatingUserName = () => {
  accounts.forEach((account) => {
    const userName = account.owner
      .split(" ")
      .map((item) => {
        return item[0];
      })
      .join("")
      .toLowerCase();

    account.userName = userName;
  });
};

// Add username key to the object
creatingUserName();

const displayTransactions = (account) => {
  containerMovements.innerHTML = "";

  account.movements.forEach((item, index) => {
    const row = `<div class="movements__row">
            <div class="movements__type movements__type--${
              item < 0 ? "withdrawal" : "deposit"
            }">
              ${index + 1} ${item < 0 ? "withdrawal" : "deposit"}
            </div>
            <div class="movements__date">24/01/2037</div>
            <div class="movements__value">${item.toFixed(2)} €</div>
      </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", row);
  });
};

const calculateTotals = function (account) {
  const { withdrawal, deposit } = account.movements.reduce(
    (acc, value) => {
      value > 0 ? (acc.deposit += value) : (acc.withdrawal += value);
      return acc;
    },
    { withdrawal: 0, deposit: 0 }
  );

  labelSumIn.textContent = deposit.toFixed(2) + "€";
  labelSumOut.textContent = Math.abs(withdrawal).toFixed(2) + "€";
};

const currentBalance = function (account) {
  const total = account.movements.reduce((sum, value) => (sum = sum + value));
  labelBalance.textContent = total.toFixed(2) + "€";
};

// Calculating Interest
const interestRate = function (account) {
  console.log(account);
  const deposit = account.movements.filter((item) => {
    return item > 0;
  });

  const interest = deposit
    .map((deposit) => {
      return (deposit * 1.2) / 100;
    })
    .reduce((acc, curr) => {
      return (acc = acc + curr);
    });

  labelSumInterest.textContent = interest.toFixed(2);
};

const loginFunctionality = function () {
  const accountT = accounts
    .map((account) => {
      if (
        account.userName === inputLoginUsername.value &&
        account.pin === Number(inputLoginPin.value)
      ) {
        containerApp.style.opacity = 1;

        displayTransactions(account);
        calculateTotals(account);
        currentBalance(account);
        interestRate(account);
        return account;
      }
    })
    .filter((item) => {
      return item !== undefined;
    });
  console.log(accountT);
  return accountT;
};

// Validations
const validations = function () {
  accounts.forEach((account) => {
    if (
      account.userName !== inputLoginUsername.value &&
      account.pin !== Number(inputLoginPin.value)
    ) {
      inputLoginUsername.value = "";
      inputLoginPin.value = "";
    }
  });
};

const accountCurrent = loginFunctionality();
console.log(accountCurrent);

// Transfer Money
btnTransfer.addEventListener("click", function () {
  const accountName = inputTransferTo.value;
  accounts.map((item) => {
    for (let data in item) {
      if (item[data] === accountName) {
        item.movements.push(Number(inputTransferAmount.value));
        accountCurrent[0].movements.push(Number(-inputTransferAmount.value));
        displayTransactions(accountCurrent[0]);
        inputTransferTo.value = "";
        inputTransferAmount.value = "";
      }
    }
  });
});

btnLogin.addEventListener("click", loginFunctionality);

btnClose.addEventListener("click", function () {
  accounts.forEach((account) => {
    if (
      account.userName === inputCloseUsername.value &&
      account.pin === Number(inputClosePin.value)
    ) {
      const index = accounts.indexOf(account);
      accounts.splice(index, 1);
    }
  });
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
