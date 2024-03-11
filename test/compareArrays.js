// Given two arrays a and b write a function comp(a, b)
// (orcompSame(a, b)) that checks whether the two arrays have the "same"
// elements, with the same multiplicities (the multiplicity of a member is the number of times it appears).
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

const result = [];
const comp = function (a, b) {
  if (a == [] || a == {}) return true;
  if (b == [] || b == {}) return true;
  let index;
  let square = a[0] * a[0];
  if (b.includes(square)) {
    index = b.indexOf(square);
    console.log(index + "index");
    result.push(true);
  } else {
    result.push(false);
  }

  a.splice(0, 1);
  b.splice(index, 1);

  if (a.length > 0) {
    comp(a, b);
  }

  const data = result.every((item) => {
    return item == true;
  });
  return data;
};

console.log(
  comp([3, 0, 0, 8, 1, 3, 4, 5, 1, 1], [3, 0, 0, 8, 1, 3, 4, 5, 1, 1])
);
