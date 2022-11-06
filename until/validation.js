let validation = {
    kiemTraRong: function (valueCanCheck, errId, name) {
        if (valueCanCheck.trim() === '') {
            document.getElementById(errId).style.display = 'block';
            document.getElementById(errId).innerHTML = `${name} khong duoc bo trong!`;
            return false;
        }
        document.getElementById(errId).style.display = 'none';
        return true;
    },
    kiemTraKyTu: function (valueCanCheck, errId, name) {
        let regexLetter = /^[A-Z a-z]+$/;
        if (regexLetter.test(valueCanCheck)) {
            document.getElementById(errId).style.display = 'none';
            return true;
        }
        document.getElementById(errId).style.display = 'block';
        document.getElementById(errId).innerHTML = `${name} phải là ký tự!`;
        return false;
    },
    kiemTraEmail: function (value, errId, name) {
        var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regexEmail.test(value)) {
            document.getElementById(errId).style.display = 'none';
            return true;
        }
        document.getElementById(errId).style.display = 'block';
        document.getElementById(errId).innerHTML = 'email không hợp lệ!';
        return false;
    },
    kiemTraSo: function (value, errId, name) {
        var regexNumber = /^[0-9]+$/;
        if (regexNumber.test(value)) {
            document.getElementById(errId).style.display = 'none';
            return true;
        }
        document.getElementById(errId).style.display = 'block';
        document.getElementById(errId).innerHTML = `${name} yêu cầu nhập số!`;
        return false;
    },
    kiemTraDoDai: function (value, errId, name, minLength, maxLength) {
        if (value.length > maxLength || value.length < minLength) {
            document.getElementById(errId).style.display = 'block';
            document.getElementById(errId).innerHTML = `${name} từ ${minLength} - ${maxLength} ký tự!`;
            return false;
        }
        document.getElementById(errId).style.display = 'none';
        return true;
    }


}

export default validation;