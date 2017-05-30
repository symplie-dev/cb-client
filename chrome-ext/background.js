'use strict';

(function () {
  var API_ENDPOINT = 'http://localhost:3000';


  chrome.browserAction.onClicked.addListener(function (tab) {
    // Check if user is logged in
    if (readCookie('login') !== null) {

    } else {
      // If user account exists simply log them them in

      // If user account doesn't 
      launchSignup()
    }
  });

  function launchSignup() {
    chrome.tabs.create({
      url: './dist/index.html',
      active: true
    });
  }

  function writeCookie(key, value) {
    document.cookie = key + '=' + value + expires + '; path=/';
  }

  function readCookie(key) {
    var cookies = document.cookie.split(';'),
        cookieRegex = new Regexp('^' + key + '=.*'),
        i;

    for (var i = 0; i < cookies.length; i++) {
      if (cookieRegex.test(cookies[i])) {
        return cookies[i].split('=')[1];
      }
    }

    return null;
  }

  function checkExistingUser(sub) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', API_ENDPOINT + '/api/users?sub=' + sub);
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
        } else {
          console.log('Error: ' + xhr.status);
        }
      }
    };
  }
}());