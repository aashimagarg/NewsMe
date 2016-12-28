// location.replace('http://nytimes.com/')

// var url = chrome.extension.getURL('quiztab.html')

//location.replace('chrome-extension://pkibhikenkcngelgmkllkiaafnjaejkj/quiztab.html')

// // get the active tab url
// chrome.tabs.getCurrent(function(tab){
// 		// if (tab.url.search("facebook") != -1) {
// 		// 	var newURL = "http://nytimes.com/";
//  		// 	chrome.tabs.create({ url: newURL });
// 		// }
//         console.log(tab.url);
//     }
// );


// chrome.webNavigation.onCommitted.addListener(function(e){
//     if (hasHostSuffix(e.url, 'facebook.com/')) {
//     	console.log(e.url);
//       	var newURL = chrome.extension.getURL('quiztab.html');
//  		chrome.tabs.create({'url': newURL});
//  		console.log(tab.url);
//     }
// });

// Listener runs when website ends in "facebook.com"
chrome.webNavigation.onCommitted.addListener(function(e) {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs) { 
		 // Take current tab and close it
		var tabId = tabs[0].id;
		chrome.tabs.remove(tabId);
	});
	// Launch quiz hmtl file as a URL
    var newURL = chrome.extension.getURL('quiztab.html');
 	chrome.tabs.create({'url': newURL});
}, {url: [{hostSuffix: 'facebook.com'}]});

// // temporary - when the extension icon is clicked, launch NYTimes
// chrome.browserAction.onClicked.addListener(function(activeTab){
//   var newURL = "http://nytimes.com/";
//   chrome.tabs.create({ url: newURL });
// });


// get the active tab url
// chrome.tabs.getCurrent(function(tab){
//         chrome.tabs.update(tab.id, {url: chrome.extension.getURL('quiztab.html')});
//     }
// );

// // temporary - when the extension icon is clicked, launch NYTimes
// chrome.browserAction.onClicked.addListener(function(activeTab){
//   var newURL = "http://nytimes.com/";
//   chrome.tabs.create({'url': chrome.extension.getURL('quiztab.html')});
// });

