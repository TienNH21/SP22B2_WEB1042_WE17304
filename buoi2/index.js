alert("Hello WE17304");
let x = prompt("Nhập điểm: "); // x: string
let diem = parseInt(x);        // diem: number

/*
 * diem < 5 -> chua qua mon
 * diem < 7 -> trung binh
 * diem < 9 -> kha
 * diem <= 10 -> gioi
 */
if (diem < 5) {
    alert("Chưa qua môn");
} else if (diem < 7) {
    alert("Trung binh");
} else if (diem < 9) {
    alert("Kha");
} else {
    alert("Gioi");
}
