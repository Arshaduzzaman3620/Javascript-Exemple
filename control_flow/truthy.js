const userEmail = "rir@gmail.com"

if (userEmail){
  console.log("GO the mail ");
}else{
  console.log("Dont have user email");
}

// falsy values

false,0, -0,BigInt ,"",null,undefined,NaN

// truthy values
// "0" ,'false',"",[],{},function(){}

const emtyobject ={}
if (Object.keys(emtyobject)){

}

const iceTea = 100
iceTeaPrice >= 80 ? console.log("less then 80"); 
