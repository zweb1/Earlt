chrome.webNavigation.onCompleted.addListener(function (details) {
    if (details.url.includes("twitch.tv")) {
      chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        files: ['content.js']
      });
    }
  }, { url: [{ hostSuffix: 'twitch.tv' }] });
  