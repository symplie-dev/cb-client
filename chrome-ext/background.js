'use strict';

(function () {
  chrome.browserAction.onClicked.addListener(function (tab) {
    launchSignup()
  });

  function launchSignup() {
    chrome.tabs.create({
      url: './dist/index.html',
      active: true
    });
  }
}());