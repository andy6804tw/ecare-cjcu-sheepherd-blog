/**
 * 
 */

// 取得 Header ID 
const img = document.getElementById('header');

// 隨機取得1~10亂數
var maxNum = 8;
var minNum = 1;
var random = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

const Imageurl = `${img.baseURI}img/header/bg${random}.png`;

// 載入隨機更換背景照片
img.style.backgroundImage = `url(${Imageurl})`;

console.log(random);
