$(document).ready(function () {

    $("#txt-email").keypress(function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            $("#txt-email").blur(); 
            sendMail();
        }
    });

    $("#btn-send").click(function (event) {
        event.preventDefault();
        sendMail();
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

function sendMail() {
    var txtEmail = $('#txt-email').val();
    if ($.trim(txtEmail).length === 0) {
        $("#modal-title").html("Email id");
        $("#modal-body-contents").html("Looks like you haven't entered valid email id.");
        $("#modal-body-contents-discliamer").html("");
                   
        $('#info-message-modal').modal('show');
        
        return false;
    }
    if (validateEmail(txtEmail)) {
        $.ajax({
            url: 'contact-us-add-to-queue.php',
            type: 'POST',
            data: {
                visitor_email_id: $.trim(txtEmail)
            },
            success: function (result) {
                if (result.success) {
                    $("#modal-title").html("Thank You");
                    var thankYouMessage = "Thank you for contacting us. We will send you an email from info@carmelsolutions.net. Please reply with your specific requirements. We will be glad to get in touch with you." ;
                    var thankYouMessageDiscliamer = "If you do not receive the message within a few minutes, please check your Junk/Spam E-mail folder just in case the email got delivered there instead of your inbox. If so, select the message and click Not Junk/Spam, which will allow future messages to get through. </p>";
                    $("#modal-body-contents").html(thankYouMessage);
                    $("#modal-body-contents-discliamer").html(thankYouMessageDiscliamer);
                    //$("#modal-body-contents").html("Thank you for showing interest in us. We will get back to you shortly.")
                    $('#info-message-modal').modal('show');
                    $('#txt-email').val("");
                    return true;
                } else {
                    $("#modal-title").html("Error");
                    $("#modal-body-contents").html("Sorry your email id is not saved. Please enter again.")
                    $("#modal-body-contents-discliamer").html("");
                    $('#info-message-modal').modal('show');
                    return true;
                }
            },
            error: function (e) {
                $("#modal-title").html("Error");
                $("#modal-body-contents").html("Please try again later.");
                $('#info-message-modal').modal('show');
                return false;
            }
        });
        
    } else {
        clearModal();
        $("#modal-title").html("Email id");
        $("#modal-body-contents").html("Looks like you haven't entered valid email id.");
        $('#info-message-modal').modal('show');
        return false;
    }
}