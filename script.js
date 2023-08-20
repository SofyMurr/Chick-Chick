var swiper = new Swiper(".gallery", {
   
simulateTouch: true,
 touchRatio:1,
 touchAngle:45,
 grabCursor: true,
 enabled: true,
 slidesOffsetAfter:0,
 initialSlide: 0,
 breakpoints: {
    0:{
        slidesPerView: 1.3, 
        grid: {
            rows:1,
        },
    },
    375:{
        slidesPerView: 1.5,
        grid: {
            rows:1,
        },
    },
    425:{
        slidesPerView: 1.6,
        grid: {
            rows:1,
        },
    },
    675:{
        slidesPerView: 2.7,
        grid: {
            rows:1,
        },
    },
    768:{
        slidesPerView:2.2,
        grid: {
            rows:1,
        },
    },
    1024:{
        slidesPerView: 2.7,
        grid: {
            rows:2,
        },
    },
    1366:{
        slidesPerView: 3.3,
        grid: {
            rows:2,
        },
    },
    1440:{
        slidesPerView:3.5,
        grid: {
            rows:2,
        },
    },
    1920:{
        slidesPerView:3.3,
        grid: {
            rows:2,
        },
    },
 },
 keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
},
mousewheel: {
    sensitivity: 1,
},

});


function init(){
    let map = new ymaps.Map('map', {
        center: [55.798521816377544,37.969072825286815],
        zoom: 16,
    })
    let placemark = new ymaps.Placemark([55.798521816377544,37.969072825286815], {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/marker.svg',
        // iconImageSize: [50,50],
        iconImageOffset: [8,-10]
    });

    
  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
//   map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
//   map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  map.geoObjects.add(placemark);

}

ymaps.ready(init);

document.addEventListener('DOMContentLoaded', function(){
const form = document.getElementById('form');
form.addEventListener('submit', formSend);

async function formSend(e){
    e.preventDefault();
    
    let error = formValidate(form);
    // let formData = new FormData(form);
    

    if(error === 0){
        form.classList.add('_sending');
        setTimeout(()=> {
            return send();
        }, "1000");
        // let response = await fetch('sendmail.php', {
        //     method: 'POST',
        //     body: formData,
        // });
        // if(response.ok){
        //     let result = await response.json();
        //     alert(result.message);
        //     form.reset();
        //     form.classList.remove('_sending');
        // }
    }
    else{
        form.classList.remove('_sending');
    }
}

function formValidate(form){
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for(let index = 0; index < formReq.length; index++){
        const input = formReq[index];
        formRemoveError(input);

        if(input.value === '' && input.checked === false){
            formAddError(input);
            error++;
        }
        else{
            formRemoveError(input);
        }
    }
    return error;
}
function formAddError(input){
input.parentElement.classList.add('_error');
input.classList.add('_error');
}
function formRemoveError(input){
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}

function send(){
    let message = document.querySelector('.popup__title');
    let messageImage = document.querySelector('.messageImage');
    form.classList.remove('_sending');
    form.style.cssText = `opacity:0;`;
    message.textContent = 'Мы перезвоним Вам для подтверждения записи';
    messageImage.classList.add('active');
}
});

function changeImg(){
    let images = [ './img/hero2.png','./img/hero1.png', './img/hero3.png', './img/hero4.png'];
    let hero = document.querySelector('.hero');
    let image = Math.floor( Math.random() * images.length );
    return hero.innerHTML = `<img src="${images[image]}" alt="logo" class="hero_active heroArr">`;
}
window.onload = changeImg();

