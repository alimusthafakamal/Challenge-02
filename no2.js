const checkTypeNumber = (givenNumber) => {
  if (givenNumber === undefined) {
    return "error : Bro, Where is the Parameter";
  }
  if (typeof givenNumber !== "number") {
    return "error : Invalid Data Type";
  }
  if (givenNumber % 2 === 0) {
    return "Genap";
  } else {
    return "Ganjil";
  }
};

console.log(checkTypeNumber(1));
console.log(checkTypeNumber(10));
console.log(checkTypeNumber("1"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
