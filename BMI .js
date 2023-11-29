let weight=prompt("What is your weight?");
let height=prompt("What is your height?");

let BMI= weight/(height*height);
if(BMI<=25){
  console.log("Your BMI is :" + BMI +"and you are Underweight" );
}
else if (BMI>25 && BMI <30){
  console.log("Your BMI is :"  + BMI +"and have a Normal welght" );
}
else{
  console.log("Your BMI is :" + BMI +"and you are Overweight" );
}
