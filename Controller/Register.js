import User from "../models/UserRegister.js";
// import UserRegister from "../models/UserRegister.js";
import validation from "../until/validation.js";

document.querySelector("#submitBtn").onclick = function (event) {
    event.preventDefault();
    let newUser = new User()
    /*----------------------------------------------------------------------------------------- */
    newUser.email = document.querySelector("#user-email").value;
    newUser.password = document.querySelector('#user-password').value;
    newUser.name = document.querySelector('#user-name').value;
    newUser.phone = document.querySelector('#user-phone').value;
    if (document.querySelector('#femaleGender').checked) {
        newUser.gender = false;
    }
    else if (document.querySelector('#maleGender').checked) {
        newUser.gender = true;
    }
    /*----------------------------------- Post method dung Axios ------------------------------ */

    /*-----------------------------------Validation ------------------------------------------- */
    let valid = true;
    valid = validation.kiemTraRong(newUser.email, 'err-required-email', 'Email') & validation.kiemTraRong(newUser.password, 'err-required-password', 'Password') & validation.kiemTraRong(newUser.name, 'err-required-name', 'Name') & validation.kiemTraRong(newUser.phone, 'err-required-phone', 'So dien thoai');
    //Kiem tra ky tu
    valid &= validation.kiemTraKyTu(newUser.name, 'err-letter-name', 'Name');
    //Kiem tra email
    valid &= validation.kiemTraEmail(newUser.email, 'err-email', 'Email');
    //Kiem tra tat ca la so
    valid &= validation.kiemTraSo(newUser.phone, 'err-number-soDienThoai', 'So dien thoai');
    //Kiem tra do dai
    valid &= validation.kiemTraDoDai(newUser.password, 'err-min-max-length-password', 'Password', 1, 8);
    if (!valid) {
        return
    }

    let promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        ResponseType: JSON,
        data: newUser
    });

    //Thành công
    promise.then(function (res) {
        alert("dang ki thanh cong!");
        console.log(res.data.content);
    });

    //Thất bại
    promise.catch(function (err) {
        console.log(err);
    })
}



