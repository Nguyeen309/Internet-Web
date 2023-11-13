function submitForm() {
    
    var fullName = document.getElementById('fullName').value;
    var cardNumber = document.getElementById('cardNumber').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;
    var invoiceCode = document.getElementById('invoiceCode').value;
    var customerType = document.getElementById('customerType').value;
    var description = document.getElementById('description').value;

    var resultMessage = 'Thông tin đã nhập:\n';
    resultMessage += 'Họ tên: ' + fullName + '\n';
    resultMessage += 'Mã thẻ: ' + cardNumber + '\n';
    resultMessage += 'Số điện thoại: ' + phoneNumber + '\n';
    resultMessage += 'Email: ' + email + '\n';
    resultMessage += 'Mã hóa đơn: ' + invoiceCode + '\n';
    resultMessage += 'Loại khách hàng: ' + customerType + '\n';
    resultMessage += 'Chi tiết mô tả: ' + description;

    alert(resultMessage);
}