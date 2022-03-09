
function login() {
    let username = $('#username').val();
    let password = $('#password').val();
    let user = {
        username: username,
        password: password
    };
    // goi ajax
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(user),
        //tên API
        url: "http://localhost:8080/api/login",
        //xử lý khi thành công
        success: function (data) {
           document.getElementById("result-token").innerHTML = data.username + ": " + data.token
            //lưu giữ nguyên token
            localStorage.setItem("token", data.token)
            //lưu giữ đối tượng JWTresponse được trả ra khi login
            localStorage.setItem("user", JSON.stringify(data))
        }
    });
    //chặn sự kiện mặc định của thẻ
    event.preventDefault();
}

function resultUser() {
    let user = JSON.parse(localStorage.getItem("user"));
    let token = localStorage.getItem("token");
    $.ajax({
        headers: {
            'Authorization': "Bearer " + token
            // 'Authorization': "Bearer " + user.token
        },
        type: "GET",
        //tên API
        url: "http://localhost:8080/api/user",
        //xử lý khi thành công
        success: function (data) {
            document.getElementById("result").innerHTML = data
        }
    }).fail(function (){
        console.log("Có lỗi")
    });
}

function regis() {
    let username = $('#username-regis').val();
    let password = $('#password-regis').val();
    let role = $('#role').val();
    let newUser = {
        username: username,
        password: password,
        roles: [{
            id: role,
        }]
    };
    // goi ajax
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(newUser),
        //tên API
        url: "http://localhost:8080/api/signup",
        //xử lý khi thành công
        success: function () {
            displaySignInForm();
        }
    });
    //chặn sự kiện mặc định của thẻ
    event.preventDefault();
}

function displaySignUpForm() {
    document.getElementById("form-regis").hidden = false;
    document.getElementById("form-login").hidden = true;
    getRole()
}

function displaySignInForm() {
    document.getElementById("form-login").hidden = false;
    document.getElementById("form-regis").hidden = true;
}

function getRole() {
    $.ajax({
        type: "GET",
        //tên API
        url: `http://localhost:8080/api/role`,
        //xử lý khi thành công
        success: function (data) {
            let content = '<select id="role">\n'
            for (let i = 0; i < data.length; i++) {
                content += displayRole(data[i]);
            }
            content += '</select>'
            document.getElementById('div-role').innerHTML = content;
        }
    });
}

function displayRole(role) {
    return `<option id="${role.id}" value="${role.id}">${role.name}</option>`;
}