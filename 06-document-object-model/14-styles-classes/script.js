const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelectorAll('li');
let dark = false;

function run() {
    // className
    // console.log(itemList.className);


    // this here is a custom dark toggle
    // if (!dark) {
    //     text.className = 'card dark';
    //     dark = true;
    // } else {
    //     text.className = 'card';
    //     dark = false;
    // }

    // classList
    // console.log(itemList.classList);

    // itemList.classList.forEach(c => console.log(c));

    // text.classList.add('dark');
    // text.classList.remove('card');

    text.classList.toggle('dark');
    // text.classList.replace('card', 'dark');

    // Change style
    // itemList.style.lineHeight = '3';

    items.forEach((item, index) => {
        item.style.color = 'red';

        if (index === 2) {
            item.style.color = 'green';   
        }
    })

}


document.querySelector('button').onclick = run;