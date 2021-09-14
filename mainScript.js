/*

var startMounth = document.querySelector('.spanSecond');
var starterDate= new Date(2019,4,1);
var nowDate = new Date();
var result = ((nowDate.getFullYear()-starterDate.getUTCFullYear()) *12) - (Math.abs(nowDate.getMonth()-starterDate.getMonth()));


startMounth.textContent=result;



*/

/*My Start Time*/


var start = new Date('2020-05-01');
var now = new Date();
var fark = Math.abs(now.getTime() - start.getTime());
var ayfark = Math.ceil(fark /(1000 * 3600 *24)); //gün
var result = `${ayfark} gün`;
var startMounth = document.querySelector('.spanSecond');
startMounth.textContent= result
