var admobid = {}
if (/(android)/i.test(navigator.userAgent)) {  // for android & amazon-fireos
  admobid = {
    banner: 'ca-app-pub-7061349157136298/2581148651',
    interstitial: 'ca-app-pub-7061349157136298/5539194924',
  }
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {  // for ios
  admobid = {
    banner: 'ca-app-pub-7061349157136298/8712153170',
    interstitial: 'ca-app-pub-7061349157136298/1955173135',
  }
}

document.addEventListener('deviceready', function() {
  admob.banner.config({
    id: admobid.banner,
    isTesting: false,
    autoShow: true,
  })
  admob.banner.prepare()

  admob.interstitial.config({
    id: admobid.interstitial,
    isTesting: false,
    autoShow: false,
  })
  admob.interstitial.prepare()

  document.getElementById('showAd').disabled = true
  document.getElementById('showAd').onclick = function() {
    admob.interstitial.show()
  }

}, false)

document.addEventListener('admob.banner.events.LOAD_FAIL', function(event) {
  console.log(event)
})

document.addEventListener('admob.interstitial.events.LOAD_FAIL', function(event) {
  console.log(event)
})

document.addEventListener('admob.interstitial.events.LOAD', function(event) {
  console.log(event)
  document.getElementById('showAd').disabled = false
})

document.addEventListener('admob.interstitial.events.CLOSE', function(event) {
  console.log(event)

  admob.interstitial.prepare()
})