(function () {
  const bodyElement = document.body; // 選擇 <body> 元素
  const storageKey = "pageFlipState"; // 儲存狀態的鍵值

  // 定義三種狀態及其對應的 CSS 樣式
  const states = [
    { name: "normal", transform: "rotate(0deg)" }, // 0 度 (正常)
    { name: "vertical", transform: "scaleY(-1)" }, // 垂直翻轉 (上下鏡像)
    { name: "horizontal", transform: "scaleX(-1)" }, // 水平翻轉 (左右鏡像)
  ];

  // 取得當前狀態名稱，如果沒有則從 'normal' 開始
  let currentStateName = localStorage.getItem(storageKey) || "normal";

  // 找出當前狀態在陣列中的索引
  let currentIndex = states.findIndex((s) => s.name === currentStateName);

  // 計算下一個狀態的索引
  let nextIndex = (currentIndex + 1) % states.length;
  let nextState = states[nextIndex];

  // 儲存下一個狀態的名稱
  localStorage.setItem(storageKey, nextState.name);

  // 取得要應用的 CSS 樣式
  const newTransform = nextState.transform;

  // 將轉換樣式和過渡效果應用到 <body> 元素
  bodyElement.style.cssText = `
        /* 確保轉換動畫流暢 */
        transition: transform 0.4s ease-in-out !important;
        /* 應用新的旋轉/翻轉樣式 */
        transform: ${newTransform} !important;
        /* 設置轉換原點為中心 */
        transform-origin: 50% 50% !important;
    `;

  // 清除可能殘留在 html 上的樣式
  document.documentElement.style.cssText = "";
})();
