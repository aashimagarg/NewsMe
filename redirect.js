
// get the active tab url
chrome.tabs.getCurrent(function(tab){
        console.log(tab.url);
    }
);

// temporary - when the extension icon is clicked, launch NYTimes
chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://nytimes.com/";
  chrome.tabs.create({'url': chrome.extension.getURL('quiztab.html')});
});