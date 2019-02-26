
function ad_show(){
var ad_increment = localStorage.getItem("ad_increment");  //create a tracking variable

if (ad_increment == null){                                //if that tracking varialble dosen't exist create one and set to zero
    localStorage.setItem("ad_increment","0")
}

  var ad_increment_temp = (ad_increment)+0;               //add a digit to the tracking variable on every refresh

  localStorage.setItem("ad_increment",ad_increment_temp)  //update that tracking variable in local storage

if (ad_increment.length >=3){                             //if tracking variable is more than 5 digits reset to 1 digital and show interstitial ad
  localStorage.setItem("ad_increment","0")

  setTimeout(function (){

  // Something you want delayed.
    admob.interstitial.show()  

}, 2000); // How long do you want the delay to be (in milliseconds)? 

}

}



// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}