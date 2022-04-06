let listSV = [
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

    listSV.push(sv);

    document.getElementById("table_body")
        .innerHTML = "";

    loadTable();
}

function loadTable() {
    let html = "";
    for (let i = 0; i < listSV.length; i++) {
        let sv = listSV[i];
        let tableRow = `
            <tr>
                <td>${ sv.ho_ten }</td>
                <td>${ sv.ma_sv }</td>
                <td>${ sv.chuyen_nganh }</td>
                <td>${ sv.hoc_ky }</td>
            </tr>
        `;
        html = html + tableRow;
    }
    console.log(html);
    document.getElementById("table_body")
        .innerHTML = html;
}

loadTable();
