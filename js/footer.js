const subscribe = $('#subscribe');
const twitter = $('#twitter');
const subMail = $('#sub-email');
const misc = $('#misc');
var alertStore;
var closeBox;

const alertbox =   `<div class="dark-bg" id="popup-alert">
                        <div class="popup-content">
                            <section>
                                <div>
                                    <h1>Alert</h1>
                                    <i class="bi bi-x-circle-fill hover-close" id="close-alert"></i>
                                </div>
                                <p>Thank you for signing up!!!</p>
                            </section>
                        </div>
                    </div>`;

twitter.click(function(){
    window.location.href = "https://twitter.com/10X_IT";
});


subscribe.click(function(e){
    e.preventDefault();
    var str = subMail.val();

    if(str)
    {
        alertStore = misc.append(alertbox);
        closeBox = misc.find('#close-alert');

        closeBox.click(function(){
            alertStore.find('#popup-alert').remove();
        })
    }

});

