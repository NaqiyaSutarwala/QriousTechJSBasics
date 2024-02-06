const decode = function (str) {
  const encodedStr = str.split(" ");
  console.log(encodedStr);
  const stringMsg = encodedStr
    .map((item) => (newString = item.split("").reverse().join("")))
    .filter((item) => {
      return item !== "";
    })
    .join(" ");

  console.log(stringMsg);
};

decode("olleh    woh           era  uoy");

'string'.toLocaleLowerCase

