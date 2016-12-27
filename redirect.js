location.replace('url': chrome.extension.getURL('quiztab.html'))

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
//     if (hasHostSuffix(e.url, 'facebook.com')) {
//     	console.log(e.url);
//       	var newURL = "http://nytimes.com/";
//  		chrome.tabs.create({ url: newURL });
//  		console.log(tab.url);
//     }
// });

// // temporary - when the extension icon is clicked, launch NYTimes
// chrome.browserAction.onClicked.addListener(function(activeTab){
//   var newURL = "http://nytimes.com/";
//   chrome.tabs.create({ url: newURL });
// });


// get the active tab url
// chrome.tabs.getCurrent(function(tab){
//         console.log(tab.url);
//     }
// );

// // temporary - when the extension icon is clicked, launch NYTimes
// chrome.browserAction.onClicked.addListener(function(activeTab){
//   var newURL = "http://nytimes.com/";
//   chrome.tabs.create({'url': chrome.extension.getURL('quiztab.html')});
// });

