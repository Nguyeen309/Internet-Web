function giaiPhuongTrinh() {
    var a = document.getElementById('heso_a').value;
    var b = document.getElementById('heso_b').value;

    if (isNaN(a)) {
        alert('Hệ số a phải là số.');
        return;
    }
    if (isNaN(b)) {
        alert('Hệ số b phải là số.');
        return;
    }
    var x = -b / a;

    document.getElementById('ketqua').innerHTML = 'Nghiệm x = ' + x;
}