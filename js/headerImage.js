/**
 * 
 */

// 取得 Header ID 
const img = document.getElementById('header');

// 隨機取得1~10亂數
var maxNum = 10;
var minNum = 0;
var n = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; 

// 每次載入時隨機更換 Header 照片
img.style.backgroundImage = 'https://andy6804tw.github.io/ecare-cjcu-sheepherd-blog/img/header/bg01.png';

console.log(`/img/header/bg01.png`);
