let left = document.querySelector('.left'),
    right = document.querySelector('.right');
let bigImage = document.querySelector('.show img');
let row = document.querySelectorAll('.row div img');
let counter = 1;

row[counter-1].style.opacity = '1';


window.onload = function(){
    timer = setInterval(function(){
        right.click();
    } , 2000);
}

right.onclick = function(){
    counter++;
    if (counter == 7){
        counter = 1;
    }
    bigImage.setAttribute('src','../imagses/'+counter+'.jpg');

    // set opacity
    row.forEach(function(ele){
        ele.style.opacity= '.5';
    });
    row[counter-1].style.opacity = '1';

    // set span
    bigImage.nextElementSibling.innerHTML = counter +' / 6';
}

left.onclick = function(){
    counter--;
    if(counter == 0){
        counter = 6;
    }
    bigImage.setAttribute('src','../imagses/'+counter+'.jpg');

    // set opacity
    row.forEach(function(ele){
        ele.style.opacity= '.5';
    });
    row[counter-1].style.opacity = '1';

    // set span
    bigImage.nextElementSibling.innerHTML = counter +' / 6';
}

row.forEach(function(ele){
    ele.addEventListener('click' , function(){
        let src = ele.getAttribute('src');
        bigImage.setAttribute('src' , src);
        row.forEach(function(ele){
            ele.style.opacity= '.5';
        })
        ele.style.opacity = '1';
    });
});