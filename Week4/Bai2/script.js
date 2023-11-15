function submitForm() {
    
    var hoten = document.getElementById('hoten').value;
    var card = document.getElementById('card').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var maHD = document.getElementById('maHD').value;
    var loaiKH = document.getElementById('loaiKH').value;
    var mota = document.getElementById('mota').value;

    var ketqua = 'Thông tin đã nhập:\n';
    ketqua += 'Họ tên: ' + hoten + '\n';
    ketqua += 'Mã thẻ: ' + card + '\n';
    ketqua += 'Số điện thoại: ' + phone + '\n';
    ketqua += 'Email: ' + email + '\n';
    ketqua += 'Mã hóa đơn: ' + maHD + '\n';
    ketqua += 'Loại khách hàng: ' + loaiKH + '\n';
    ketqua += 'Chi tiết mô tả: ' + mota;

    alert(ketqua);
}