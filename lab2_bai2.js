let x; // undefined
while ( isNaN( x ) == true ) {
    x = prompt("Vui lòng nhập vào 1 số: ");
}

let a = parseFloat(x);
let canBac2 = Math.sqrt( a );
let binhPhuong = Math.pow( a, 2 );
let lamTronSo = Math.round( a );

alert("Can bac 2: " + canBac2);
alert("Binh phuong: " + binhPhuong);
alert("Lam tron: " + lamTronSo);

