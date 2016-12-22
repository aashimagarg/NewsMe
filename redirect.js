
// get the active tab url
chrome.tabs.getCurrent(function(tab){
		if (tab.url.search("facebook") != -1) {
			var newURL = "http://nytimes.com/";
 			chrome.tabs.create({ url: newURL });
		}
        console.log(tab.url);
    }
);

// // temporary - when the extension icon is clicked, launch NYTimes
// chrome.browserAction.onClicked.addListener(function(activeTab){
//   var newURL = "http://nytimes.com/";
//   chrome.tabs.create({ url: newURL });
// });
