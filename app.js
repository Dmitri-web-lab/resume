const BtnFirst = document.querySelector('#btnFirst')
const BtnReserve = document.querySelector('#btnReserve')
const wind = document.querySelector('#form')
const foot = document.querySelector('.footer')

//Клик по кнопке
BtnFirst.addEventListener('click', function() {
click();
});
//Клик по второй кнопке
BtnReserve.addEventListener('click', function() {
click();
});

BtnFirst.addEventListener('mouseover', function() {
this.style.opacity = '0.6';
});
BtnFirst.addEventListener('mouseout', function() {
this.style.opacity = '1';
});

BtnReserve.addEventListener('mouseover', function() {
this.style.opacity = '0.6';
});
BtnReserve.addEventListener('mouseout', function() {
this.style.opacity = '1';
});

function click(){
wind.style.display = 'block';
foot.style.marginTop = '250px';
scroll();
};

function scroll(){
wind.scrollIntoView(top);
};
