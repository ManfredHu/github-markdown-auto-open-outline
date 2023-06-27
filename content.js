// const src = chrome.extension.getURL('src/js/main.js');
// const contentScript = await import(src);
// contentScript.main();

const outlineContainer = document.querySelector('section[aria-labelledby="outline-id"]')
if (!outlineContainer) {
  const outlineBtn = document.querySelector('button[aria-label="Outline"]')
  outlineBtn && outlineBtn.click()
  // 保存开关状态到插件存储
  // chrome.storage.sync.set({
  //   [OutlineStorageKey]: true
  // }).then(() => {
  //   console.log("Value is set");
  // });
}
