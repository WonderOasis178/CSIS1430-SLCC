// Home page greeting
var thehours = new Date().getHours();
var themessage;
var morning = ('Good Morning');
var afternoon = ('Good Afternoon');
var evening = ('Good Evening');

if (thehours >= 0 && thehours < 12) {
    themessage = morning; 
    $("body").addClass("morning")

} else if (thehours >= 12 && thehours < 16) {
    themessage = afternoon;
    $("body").addClass("afternoon")

} else if (thehours >= 16 && thehours < 19) {
    themessage = evening;
    $("body").addClass("evening")
} else if (thehours >= 19 && thehours < 24) {
    themessage = evening;
    $("body").addClass("evening-late")
}
$('.greeting').append(themessage);


// home page nav class
if ($(".landing-body").hasClass("login-page-container")) {
    $(".main-nav").addClass("login-page-nav-container");
} else{
    $(".main-nav").removeClass("login-page-nav-container");

}