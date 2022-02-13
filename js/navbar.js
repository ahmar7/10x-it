const navApproach = $('#nav-approach');
const navTech = $('#nav-technology');
const navDive = $('#nav-deepdive');
const navContact = $('#nav-contact');


navApproach.click(function(){
    window.location.href = "./index.html"
});

navTech.click(function(){
    window.location.href = "./Technology.html"
});

navDive.click(function(){
    window.location.href = "./DeepDive.html"
});

navContact.click(function(){
    window.location.href = "./CalenderLinks.html"
});


$('#download-btn').click(function(){
    window.location.href = "./whitepaper.html"
});

$(window).scroll(function() 
{
 if ($(this).scrollTop() > 1)
 {
  $('#navbar').addClass("nav-active");
 }
 else
 {
  $('#navbar').removeClass("nav-active");
 }
});