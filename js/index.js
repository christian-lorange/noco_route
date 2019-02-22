document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("b41691f3-cb22-42f7-8e05-9448bfb61cbb")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
}, false);