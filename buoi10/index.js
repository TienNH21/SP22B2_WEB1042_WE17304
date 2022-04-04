let listSv = [
    {
        ho_ten: "Nguyen Van A",
        ma_sv: "PH1",
        chuyen_nganh: "TKTW",
        hoc_ky: 1
    },
    {
        ho_ten: "Nguyen Thi B",
        ma_sv: "PH2",
        chuyen_nganh: "UDPM",
        hoc_ky: 5
    },
    {
        ho_ten: "Tran Van C",
        ma_sv: "PH3",
        chuyen_nganh: "LTMT",
        hoc_ky: 4
    },
];

function them() {
    let hoTen = document.getElementById("ho_ten").value;
    let maSV = document.getElementById("ma_sv").value;
    let chuyenNganh = document.getElementById("chuyen_nganh").value;
    let hocKy = document.getElementById("hoc_ky").value;

    let sv = {
        ho_ten: hoTen,
        ma_sv: maSV,
        chuyen_nganh: chuyenNganh,
        hoc_ky: hocKy,
    };

    listSv.push(sv);
}
