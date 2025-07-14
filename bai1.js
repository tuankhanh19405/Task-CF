let weight = prompt("Nhập số cân của bạn??")
let height = prompt("Nhập chiều cao của bạn(m)?")

function calcBMI(weight,height){
if(weight/height^2 <18.5){
    console.log("Bạn bị thiếu cân");
}
else if(weight/height^2 >= 18.5 && weight/height^2 < 23){
    console.log("Bạn có cân nặng bình thường");
}
else if(weight/height^2 >= 23 && weight/height^2 < 25){
    console.log("Bạn bị thừa cân");
}
else if(weight/height^2 >= 25){
    console.log("Bạn bị béo");
}
}
calcBMI(weight,height);