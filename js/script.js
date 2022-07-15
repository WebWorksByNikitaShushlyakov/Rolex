
const headBlock = document.querySelector('.head_block');
const headLogo = document.querySelector('.logo_block');
let scrollY1, scrollY2;
document.addEventListener('scroll', function(){
  scrollY1 = window.pageYOffset;
  if (scrollY2>scrollY1) {
                          headBlock.classList.add('head_block_actived');
                          headBlock.classList.add('head_block_isDown');
                          headLogo.classList.add('logo_actived');
                          } else {headBlock.classList.remove('head_block_actived');
                                headBlock.classList.remove('head_block_isDown');
                                headLogo.classList.remove('logo_actived');}
  scrollY2 = scrollY1;

  if (scrollY1==0) {
    headBlock.classList.remove('head_block_actived');
    headLogo.classList.remove('logo_actived');
  }
})

// ################################################################################
let position1 = 0;
const sliderToShow1 = 3;
const sliderToScroll1 = 1;

const slider_container1 = document.querySelector('.slider_container1');
const slider_track1 = document.querySelector('.slider_track1');
const slider_itemS1 = document.querySelectorAll('.slider_item1');
const itemWidth1 = slider_container1.clientWidth / sliderToShow1;

const catalog2_bottonLeft1 = document.querySelector('.catalog2_bottonLeft1');
const catalog2_bottonRight1 = document.querySelector('.catalog2_bottonRight1');
const catalog2_buttons1 = document.querySelector('.catalog2_buttons1');

let itemsCount1 = 0;
const movePosition1 = sliderToScroll1 * itemWidth1;

slider_itemS1.forEach((item) => {
  item.style.cssText = `min-width: ${itemWidth1}px`;
  itemsCount1+=1;
})

catalog2_bottonLeft1.addEventListener('click', function(){
  const itemLeft1 = Math.abs(position1) / itemWidth1;

  position1 += itemLeft1 >= sliderToScroll1 ? movePosition1 : itemLeft1*itemWidth1 ;

  setPosition1();
  checkButtons1();
})

catalog2_bottonRight1.addEventListener('click', function(){
  const itemLeft1 = itemsCount1 - (Math.abs(position1) + sliderToShow1 * itemWidth1) / itemWidth1;

  position1 -= itemLeft1 >= sliderToScroll1 ? movePosition1 : itemLeft1*itemWidth1 ;

  setPosition1();
  checkButtons1();
})

function setPosition1() {
  slider_track1.style.cssText = `transform: translateX(${position1}px);`;
}

function checkButtons1(){
  if (position1 ==0){catalog2_bottonLeft1.style.cssText = `display: none;`}
                  else{catalog2_bottonLeft1.style.cssText = `display: block;`}
  if (position1 <= (-(itemsCount1-sliderToShow1)*itemWidth1)){
                  catalog2_bottonRight1.style.cssText = `display: none;`}
                  else{catalog2_bottonRight1.style.cssText = `display: block;`}
}
checkButtons1();

slider_container1.addEventListener('mouseover', function(){
  catalog2_buttons1.style.cssText = `opacity: 0.9;`;
})
slider_container1.addEventListener('mouseout', function(){
  catalog2_buttons1.style.cssText = `opacity: 0;`;
})

// ################################################################################
let position2 = 0;
const sliderToShow2 = 3;
const sliderToScroll2 = 2;

const slider_container2 = document.querySelector('.slider_container2');
const slider_track2 = document.querySelector('.slider_track2');
const slider_itemS2 = document.querySelectorAll('.slider_item2');
const itemWidth2 = slider_container2.clientWidth / sliderToShow2;

const catalog2_bottonLeft2 = document.querySelector('.catalog2_bottonLeft2');
const catalog2_bottonRight2 = document.querySelector('.catalog2_bottonRight2');
const catalog2_buttons2 = document.querySelector('.catalog2_buttons2');

let itemsCount2 = 0;
const movePosition2 = sliderToScroll2 * itemWidth2;

slider_itemS2.forEach((item) => {
  item.style.cssText = `min-width: ${itemWidth2}px`;
  itemsCount2+=1;
})

catalog2_bottonLeft2.addEventListener('click', function(){
  const itemLeft2 = Math.abs(position2) / itemWidth2;

  position2 += itemLeft2 >= sliderToScroll2 ? movePosition2 : itemLeft2*itemWidth2 ;

  setPosition2();
  checkButtons2();
})

catalog2_bottonRight2.addEventListener('click', function(){
  const itemLeft2 = itemsCount2 - (Math.abs(position2) + sliderToShow2 * itemWidth2) / itemWidth2;

  position2 -= itemLeft2 >= sliderToScroll2 ? movePosition2 : itemLeft2*itemWidth2 ;

  setPosition2();
  checkButtons2();
})

function setPosition2() {
  slider_track2.style.cssText = `transform: translateX(${position2}px);`;
}

function checkButtons2(){
  if (position2 == 0){catalog2_bottonLeft2.style.cssText = `display: none;`}
                  else{catalog2_bottonLeft2.style.cssText = `display: block;`}
  if (position2 <= (-(itemsCount2-sliderToShow2)*itemWidth2)){
                  catalog2_bottonRight2.style.cssText = `display: none;`}
                  else{catalog2_bottonRight2.style.cssText = `display: block;`}
}
checkButtons2();

slider_container2.addEventListener('mouseover', function(){
  catalog2_buttons2.style.cssText = `opacity: 0.9;`;
})
slider_container2.addEventListener('mouseout', function(){
  catalog2_buttons2.style.cssText = `opacity: 0;`;
})
// ################################################################################
const gridElements = document.querySelectorAll('.grid_elem');
const grid_conteiner = document.querySelector('.grid_conteiner');
grid_conteiner.addEventListener('click', function(event){
  console.log(event.target.closest('.grid_elem'))
  if (event.target.closest('.grid_elem') == gridElements[0]){window.open('https://www.rolex.com/ru/watches/find-rolex/man.html');}
  if (event.target.closest('.grid_elem') == gridElements[1]){window.open('https://www.rolex.com/ru/watches/find-rolex/woman.html');}
  if (event.target.closest('.grid_elem') == gridElements[2]){window.open('https://www.rolex.com/ru/watches/find-rolex/steel.html');}
  if (event.target.closest('.grid_elem') == gridElements[3]){window.open('https://www.rolex.com/ru/watches/find-rolex/steel-and-gold.html');}
  if (event.target.closest('.grid_elem') == gridElements[4]){window.open('https://www.rolex.com/ru/watches/find-rolex/gold.html');}
  if (event.target.closest('.grid_elem') == gridElements[5]){window.open('https://www.rolex.com/ru/watches/find-rolex/gem-set.html');}
})
// ################################################################################
const popUp_block = document.querySelector('.popUp_block');
const popUp_textS = document.querySelectorAll('.popUp_text');
const popUp_textS2 = document.querySelectorAll('.popUp_text2');
// const slider_track1 = document.querySelector('.slider_track1');
const slider_item1 = document.querySelectorAll('.slider_item1');
const slider_item2 = document.querySelectorAll('.slider_item2');
const popUp_ton = document.querySelector('.popUp_ton');
const poUp_close = document.querySelector('.poUp_close');

slider_track1.addEventListener('click', function(event){
  if (event.target.closest('.slider_item1') == slider_item1[0]) {popUp_block.style.cssText = `display: block;`; popUp_textS[0].style.cssText = `display: block;`;}
  if (event.target.closest('.slider_item1') == slider_item1[1]) {popUp_block.style.cssText = `display: block;`; popUp_textS[1].style.cssText = `display: block;`;}
  if (event.target.closest('.slider_item1') == slider_item1[2]) {popUp_block.style.cssText = `display: block;`; popUp_textS[2].style.cssText = `display: block;`;}
  if (event.target.closest('.slider_item1') == slider_item1[3]) {popUp_block.style.cssText = `display: block;`; popUp_textS[3].style.cssText = `display: block;`;}
  if (event.target.closest('.slider_item1') == slider_item1[4]) {popUp_block.style.cssText = `display: block;`; popUp_textS[4].style.cssText = `display: block;`;}
})
slider_track2.addEventListener('click', function(event){
  if (event.target.closest('.slider_item2') == slider_item2[0]) {popUp_block.style.cssText = `display: block;`; popUp_textS2[0].style.cssText = `display: block;`;}
  if (event.target.closest('.slider_item2') == slider_item2[1]) {popUp_block.style.cssText = `display: block;`; popUp_textS2[1].style.cssText = `display: block;`;}
  if (event.target.closest('.slider_item2') == slider_item2[2]) {popUp_block.style.cssText = `display: block;`; popUp_textS2[2].style.cssText = `display: block;`;}
  if (event.target.closest('.slider_item2') == slider_item2[3]) {popUp_block.style.cssText = `display: block;`; popUp_textS2[3].style.cssText = `display: block;`;}
  if (event.target.closest('.slider_item2') == slider_item2[4]) {popUp_block.style.cssText = `display: block;`; popUp_textS2[4].style.cssText = `display: block;`;}
  if (event.target.closest('.slider_item2') == slider_item2[5]) {popUp_block.style.cssText = `display: block;`; popUp_textS2[5].style.cssText = `display: block;`;}
  if (event.target.closest('.slider_item2') == slider_item2[6]) {popUp_block.style.cssText = `display: block;`; popUp_textS2[6].style.cssText = `display: block;`;}
  if (event.target.closest('.slider_item2') == slider_item2[7]) {popUp_block.style.cssText = `display: block;`; popUp_textS2[7].style.cssText = `display: block;`;}
})
popUp_block.addEventListener('click', function(event){
  if ((event.target == popUp_ton)||(event.target == poUp_close)){
    popUp_block.style.cssText = `display: none; opacity: 0;`;
    popUp_textS.forEach((item) => {item.style.cssText = `display: none; opacity: 0;`;})
    popUp_textS2.forEach((item) => {item.style.cssText = `display: none; opacity: 0;`;})
  }
})
document.addEventListener('keydown', function(event){
  if (event.code == 'Escape'){popUp_block.style.cssText = `display: none; opacity: 0;`;
  popUp_textS.forEach((item) => {item.style.cssText = `display: none; opacity: 0;`;})
  popUp_textS2.forEach((item) => {item.style.cssText = `display: none; opacity: 0;`;})}
})
// ################################################################################
const footerToUp = document.querySelector('.footer_toUp');
footerToUp.addEventListener('click', function(){
  window.scroll({
    left: 0,
    top: 0,
    behavior: 'smooth'
  });
})
