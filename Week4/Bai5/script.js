function showPassword() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var confirmation = confirm('Bạn muốn hiện mật khẩu');

    if (confirmation) {
        alert('Username: ' + username + '\nPassword: ' + password);
    }
}