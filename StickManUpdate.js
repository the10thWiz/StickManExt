browser.browserAction.onClicked.addListener(function() {
	if(browserAction.getTitle() === 'Call StickMan') {
		chrome.tabs.executeScript(null, {
			file: "/content_scripts/stickman.js"
		});
		browserAction.setTitle('Recall StickMan');
	}else {
		browser.tabs.sendMessage(
			message: "End";
		);
		browserAction.setTitle('Call StickMan');
	}
});