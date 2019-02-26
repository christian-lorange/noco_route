
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

