function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
    var age = document.getElementById('age').value;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Nhập lại!!!');
        return;
    }

    var bmi = weight / Math.pow(height, 2);
    var bmiStatus = Trangthai(bmi);

    var khuyennghi = '';

    switch (age) {
        case 'Trung niên':
            khuyennghi = 'Khám định kỳ';
            break;
        case 'Trung niên, Già lớn tuổi':
            khuyennghi = 'Tập thể dục thường xuyên';
            break;
        case 'Già, lớn tuổi':
            khuyennghi = 'Hạn chế ăn mỡ động vật';
            break;
    }

    var ketqua = bmi.toFixed(2) + '\n' + bmiStatus + '\n' + khuyennghi;
    document.getElementById('ketqua').innerText = ketqua;
}

function Trangthai(bmi) {
    if (bmi < 18.5) {
        return 'Dưới chuẩn';
    } else if (bmi < 24.9) {
        return 'Bình thường';
    } else if (bmi < 29.9) {
        return 'Thừa cân';
    } else if (bmi < 34.9) {
        return 'Béo phì độ 1';
    } else if (bmi < 39.9) {
        return 'Béo phì độ 2';
    } else {
        return 'Béo phì độ 3';
    }
}