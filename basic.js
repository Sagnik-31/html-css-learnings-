 function selectRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
}

// Get button elements
const btnFirst = document.querySelector('.btn-first');
const btnSecond = document.querySelector('.btn-second');
const btnThird = document.querySelector('.btn-third');


btnFirst.addEventListener('click', function() {
    document.body.style.backgroundColor = selectRandomColor();
});

// Change text color
btnSecond.addEventListener('click', function() {
    document.querySelector('.title').style.color = selectRandomColor();
    document.querySelector('.text').style.color = selectRandomColor();
});

// Reset to default
btnThird.addEventListener('click', function() {
    document.body.style.backgroundColor = 'white';
    document.querySelector('.title').style.color = 'black';
    document.querySelector('.text').style.color = 'black';
});