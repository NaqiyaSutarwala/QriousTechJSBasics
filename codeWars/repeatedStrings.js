function isPangram(string) {
  const regex = /(\S).*\1/;
  console.log(regex.test(string));

  if (!regex.test(string)) {
    return true;
  } else {
    return false;
  }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
