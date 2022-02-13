const downloadBtn = $('#download-btn');
const mailInp = $('#mail-inp');
const subscribe_mail = $('#submit-mail');
const popupMail = $('#popup-email');

//---------------------------------------------------------------
// For white-paper page

$('html, body').css({
    overflow: 'hidden'
});

subscribe_mail.click(function(e){
    e.preventDefault();
    var str = mailInp.val();

    if(str)
    {
        popupMail.remove();
       mailInp.css('border-color','grey');
       $('html, body').css({
        overflow: 'visible'
    });
    }
    else
    {
        mailInp.css('border-color','red');
        mailInp.attr("placeholder", "Empty Email");
    }

});


