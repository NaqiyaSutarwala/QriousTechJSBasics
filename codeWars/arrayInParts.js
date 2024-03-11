function partlist(arr) {
  let arrayNew = [];
  let arrayTry = [];

  arr.forEach((_, index) => {
    if (index !== 0) {
      arrayNew = [
        [...arr.slice(0, index)].join(" "),
        [...arr.slice(index)].join(" "),
      ];
      arrayTry.push(arrayNew);
    }
  });
  console.log(arrayTry);
}

a = ["az", "toto", "picaro", "zone", "kiwi"];

partlist(a);
