function tong(a, b) {
    return parseInt(a) + parseInt(b);
}

function hieu(a, b) {
    return a - b;
}

function tich(a, b) {
    return a * b;
}

function thuong(a, b) {
    if (b != 0) {
        return a / b;
    }
}

let a = prompt("Moi ban nhap a");
let b = prompt("Moi ban nhap b");
let x = prompt(chon);
switch(x){
    case'1':
    alert( tong(a, b) );
         break;
    case'2':
    alert( hieu( a - b ) );
        break;
    case '3':
        alert( tich( a * b ) );
        break;
    case '4':
        alert( thuong (a, b) );
        break;
    case '5':
        break;
    case '6':
        break;
        default:
            break;
}



