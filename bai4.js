const a = prompt("Nhập a: ");
const b = prompt("Nhập b: ");
const c = prompt("Nhập c: ");

function isTriangle(a,b,c){
    if(a>0 && b>0 && c>0 && a + b > c && a + c > b && b + c > a){
        console.log(true);
    }else{
        console.log(false);
    }
}

isTriangle(Number(a), Number(b), Number(c));