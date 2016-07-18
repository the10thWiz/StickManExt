browser.browserAction.onClicked.addListener(function() {
	browser.browserAction.getTitle({}, function(t) {
		if(t === 'Call StickMan') {
			browser.tabs.executeScript(null, {
				file: "/content_scripts/stickman.js"
			});
			browser.browserAction.setTitle('Recall StickMan');
		}else {
			browser.tabs.sendMessage({
				message: "End"
			});
			browser.browserAction.setTitle('Call StickMan');
		}
	})
});
