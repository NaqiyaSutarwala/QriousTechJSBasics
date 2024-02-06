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
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2, account3, account4];

console.log(accounts);

const currentDate = function (account) {
  const now = new Date();
  // labelDate.textContent = `${date}/${month}/${year}`;
  labelDate.textContent = Intl.DateTimeFormat(account.locale).format(now);
};

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
      return (deposit * account.interestRate) / 100;
    })
    .reduce((acc, curr) => {
      return (acc = acc + curr);
    });

  labelSumInterest.textContent = interest.toFixed(2);
};

let accountCurrent;

const loginFunctionality = function () {
  const accountT = accounts
    .map((account) => {
      if (
        account.userName === inputLoginUsername.value &&
        account.pin === Number(inputLoginPin.value)
      ) {
        containerApp.style.opacity = 1;
        const nameUser = account.owner.split(" ");
        labelWelcome.textContent = `Welcome Back, ${nameUser[0]}`;
        inputLoginUsername.value = "";
        inputLoginPin.value = "";

        currentDate(account);
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

  accountCurrent = accountT;

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

// Transfer Money
btnTransfer.addEventListener("click", function () {
  const accountName = inputTransferTo.value;
  accounts.map((item) => {
    for (let data in item) {
      if (item[data] === accountName) {
        item.movements.push(Number(inputTransferAmount.value));
        accountCurrent[0].movements.push(Number(-inputTransferAmount.value));
        displayTransactions(accountCurrent[0]);
        calculateTotals(accountCurrent[0]);
        currentBalance(accountCurrent[0]);
        inputTransferTo.value = "";
        inputTransferAmount.value = "";
      }
    }
  });
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    accountCurrent[0].movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    accountCurrent[0].movements.push(amount);

    // Update UI
    displayTransactions(accountCurrent[0]);
    calculateTotals(accountCurrent[0]);
    currentBalance(accountCurrent[0]);
    inputLoanAmount.value = "";
  }
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
