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

let viTri = -1;

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
                <td>
                    <button onclick="capNhat(${ i })">
                        Cập nhật
                    </button>
                </td>
                <td>
                    <button onclick="xoa(${ i })">
                        Xóa
                    </button>
                </td>
            </tr>
        `;
        html = html + tableRow;
    }
    document.getElementById("table_body")
        .innerHTML = html;
}

function capNhat(i) {
    viTri = i;
    let sv = listSV[i];

    document.getElementById("ho_ten").value = sv.ho_ten;
    document.getElementById("ma_sv").value = sv.ma_sv;
    document.getElementById("chuyen_nganh").value = sv.chuyen_nganh;
    document.getElementById("hoc_ky").value = sv.hoc_ky;
}

function xoa(i) {
    listSV.splice(i, 1);
    loadTable();
}

function luu() {
    if (viTri == -1) {
        them();
    } else {
        capNhatArray();
    }
}

function capNhatArray() {
    let hoTen = document.getElementById("ho_ten").value;
    let maSV = document.getElementById("ma_sv").value;
    let chuyenNganh = document.getElementById("chuyen_nganh").value;
    let hocKy = document.getElementById("hoc_ky").value;

    listSV[viTri].ho_ten = hoTen;
    listSV[viTri].ma_sv = maSV;
    listSV[viTri].chuyen_nganh = chuyenNganh;
    listSV[viTri].hoc_ky = hocKy;

    viTri = -1;
    loadTable();
}

loadTable();
