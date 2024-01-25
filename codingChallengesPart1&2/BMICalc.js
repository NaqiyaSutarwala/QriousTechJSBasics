let MarkHeight = 1.69;
let MarkWeight = 78;
let JohnHeight = 1.88;
let JohnWeight = 95;
let markHigherBMI = true;
let MarkBMI = MarkWeight / (MarkHeight * MarkHeight);
let JohnBMI = JohnWeight / (JohnHeight * JohnHeight);

console.log(MarkBMI);
console.log(JohnBMI);

if (MarkBMI > JohnBMI) {
  console.log(`Mark's BMI (${MarkBMI}) is higher than John's!`);
} else {
  console.log(`John's BMI (${JohnBMI}) is higher than Mark's!`);
}

// Part 2
let markData = {
  fullname: "Mark Miller",
  mass: MarkWeight,
  height: MarkHeight,
  calculate: (calcBMI = () => {
    let MarkBMI = MarkWeight / (MarkHeight * MarkHeight);
    return MarkBMI;
  }),
  BMIValue: calcBMI(),
};

let johnData = {
  fullName: "John Smith",
  mass: JohnWeight,
  height: JohnHeight,
  calculate: (calcBMI = () => {
    let JohnBMI = JohnWeight / (JohnHeight * JohnHeight);
    return JohnBMI;
  }),
  BMIValue: calcBMI(),
};


if(markData.BMIValue > johnData.BMIValue){
  console.log(`Mark BMI ${markData.BMIValue} is greater than John's BMI ${johnData.BMIValue}`)
}else{
  console.log(`Johns BMI ${johnData.BMIValue} is greater than Mark's BMI ${markData.BMIValue}`)

}
