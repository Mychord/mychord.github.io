import { audioSrcs } from "../resources/datas/summerDatas.js";

// 图片集合
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

const audioName = document.querySelector("#audio-name");
const audioSrc = document.querySelector("#audio-src");
randomMusic();

// 随机选取数组元素
function randomSelect(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 随机选择一首音乐播放
function randomMusic() {
  let randomAudio = randomSelect(audioSrcs);
  // 避免随机播放的音乐与正在播放的音乐相同
  while (randomAudio === audioSrc.getAttribute("src")) {
    randomAudio = randomSelect(audioSrcs);
  }
  audioName.innerHTML = randomAudio.split("/").at(-1);
  audioSrc.setAttribute("src", randomAudio);
}

// 随机播放音乐按钮
const refreshButton = document.querySelector(".refresh-button");
refreshButton.addEventListener("click", randomMusic);
