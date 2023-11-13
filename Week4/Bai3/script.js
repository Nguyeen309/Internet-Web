function submitForm() {
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var tieude = document.getElementById('tieude').value;
    var description = document.getElementById('description').value;

    var resultMessage = 'Thông tin đã nhập:\n';
    resultMessage += 'Họ tên: ' + name + '\n';
    resultMessage += 'Email: ' + email + '\n';
    resultMessage += 'Tiêu đề bài viết: ' + tieude + '\n';
    resultMessage += 'Chi tiết mô tả: ' + description;

    alert(resultMessage);
}