// 監聽快速鍵的邏輯
chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle-page-rotation") {
    // 當快速鍵被按下時，在當前活動的標籤頁執行 content.js
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ["content.js"],
        });
      }
    });
  }
});
