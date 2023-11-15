function submitForm() {
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var tieude = document.getElementById('tieude').value;
    var mota = document.getElementById('mota').value;

    var ketqua = 'Thông tin đã nhập:\n';
    ketqua += 'Họ tên: ' + name + '\n';
    ketqua += 'Email: ' + email + '\n';
    ketqua += 'Tiêu đề bài viết: ' + tieude + '\n';
    ketqua += 'Chi tiết mô tả: ' + mota;

    alert(ketqua);
}