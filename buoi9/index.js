let dssv = [];

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

    dssv.push(sv);
}
