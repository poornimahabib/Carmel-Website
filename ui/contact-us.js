$(document).ready(function () {
    $("#txt-email").keypress(function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            $("#txt-email").blur(); 
            sendMail();
        }
    });

    $("#btn-submit-email").click(function (event) {
        var txtEmail = document.getElementById("txtEmail").value;
        if(txtEmail.length===0){
            $('#input-error-email').show();
        }else{
            if(validateEmail(txtEmail)){
                var data={};
                data.email=txtEmail;
                data.phone_num='';
                $.ajax({
                    url: "http://localhost:3000/save-email",
                    type: "POST",
                    data: {
                        '_data': JSON.stringify(data)
                    },
                    success: function (_result) {
                        console.log(_result)
                        if(_result.success==="true"){
                            $('#save-success-modal').show();
                        }else{
                            $('#save-error-modal').show();
                        }
                    },
                    error: function (_result) {
                        $('#save-error-modal').show();
                    }
                })
            }else{
                $('#input-error-email').show();
            }
        }
    });


    $("#btn-submit-bootcamp").click(function (event) {
        var txtEmail = $('#txtEmail-bootcamp').val();
        var txtPhone = $('#txtPhone-bootcamp').val();
        if(txtEmail.length===0){
            $('#input-email-error-bootcamp').show();
        }
        if(txtPhone.length===0){
            $('#input-phone-error-bootcamp').show();
        }
        else{
            if(validateEmail(txtEmail)&&validatePhone(txtPhone)){
                var data={};
                data.email=txtEmail;
                data.phone_num=txtPhone;
                $.ajax({
                    url: "http://localhost:3000/save-email",
                    type: "POST",
                    data: {
                        '_data': JSON.stringify(data)
                    },
                    success: function (_result) {
                        console.log(_result)
                        if(_result.success==="true"){
                            $('#save-success-modal').show();
                        }else{
                            $('#save-error-modal').show();
                        }
                    },
                    error: function (_result) {
                        $('#save-error-modal').show();
                    }
                })
            }
            else{
                $('#input-error-email').show();
            }
        }
    });

    $("#btn-submit-expirence").click(function (event) {
        var txtEmail = $('#txtEmail-expirence').val();
        var txtPhone = $('#txtPhone-expirence').val();
        if(txtEmail.length===0){
            $('#input-email-error-expirence').show();
        }
        if(txtPhone.length===0){
            $('#input-phone-error-expirence').show();
        }
        else{
            if(validateEmail(txtEmail) && validatePhone(txtPhone)){
                var data={};
                data.email=txtEmail;
                data.phone_num=txtPhone;
                console.log(JSON.stringify(data));
                $.ajax({
                    url: "http://localhost:3000/save-email",
                    type: "POST",
                    data: {
                        '_data': JSON.stringify(data)
                    },
                    success: function (_result) {
                        console.log(_result)
                        if(_result.success==="true"){
                            $('#save-success-modal').show();
                        }else{
                            $('#save-error-modal').show();
                        }
                    },
                    error: function (_result) {
                        $('#save-error-modal').show();
                    }
                })
            }
            else{
                $('#input-error-email').show();
            }
        }
    });
});

// Function that validates email address through a regular expression.
function validateEmail(sEmail) {
    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}

// Function that validates phone number through a regular expression.
function validatePhone(phone){
    var filter=/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    if (filter.test(phone)) {
        return true;
    }
    else {
        return false;
    }
}