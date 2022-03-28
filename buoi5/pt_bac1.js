
let heso={
    a:0,
    b:0,
    c:0,
};
function ptb2(){
heso.a = prompt ("nhap he so a");
heso.b = prompt ("nhap he so b");
heso.c = prompt ("nhap he so c");


    let delta = Math.pow(heso.b, 2) - (4 * heso.a * heso.c);

    if (delta < 0) {
        alert("Phuong trinh vo nghiem");
    } else if (delta == 0) {
        let x = -heso.b / (2 * heso.a);
        alert("Phuong trinh co nghiem kep: " + x);
    } else {
        let x = (-heso.b + Math.sqrt(delta)) / (2 * heso.a);
        let y = (-heso.b - Math.sqrt(delta)) / (2 * heso.a);

        alert("Nghiem thu nhat: " + x);
        alert("Nghiem thu hai: " + y);
    }
}
