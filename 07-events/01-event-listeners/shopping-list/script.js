// NOT recommended method of adding an eventListener!
// putting the js right into the HTML, eg:
// <button onclick="alert('Clear!')">Clear all</button>
// or calling a function that is defined in the JS script
// <button onclick="onClear()">Clear all</button>
// const onClear = _ => alert('Clear all');


const clearBtn = document.querySelector('#clear');

// JavaScript Event Listener

// clearBtn.onclick = function() {
//     alert('Clear Items');
// };


// addEventlistener RECOMMENDED!
// clearBtn.addEventListener('click', function() {
//     alert('Clear Items');
// });

// // or || remember that function expressions are not hoisted, so they need to be declared before the function call!
// const clearItems = _ => alert('Clear all');
// clearBtn.addEventListener('click', clearItems);

// or
// clearBtn.addEventListener('click', function() {
//     console.log('Clear Items');
// });


// // or
// clearBtn.addEventListener('click', () => alert('Clear all'));

// or, like Leon does it. Note to only pass in the function name, not calling it with parentheses. So "onClear" instead of "onClear()"

// clearBtn.addEventListener('click', onClear);

// function onClear() {
//     alert('Clear items')
// };

// setting a timeout to remove the even listener
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setting a timeout to activate something. I see this often on websites that wait a couple of seconds before throwing a popup that wants me to subscribe to a newletter.
// setTimeout(() => clearBtn.click(), 5000);


// CHALLENGE to actually clear all the items when hitting the Clear button. This is Brad's solution #2

clearBtn.addEventListener('click', clearItems);

// function clearItems() {
//     allItems = document.querySelectorAll('li');
//     allItems.forEach(item => item.remove());
// };

// Brad's other solutions
// this one works, but is it really what we want?
function clearItems() {
    const itemList = document.querySelector('ul');
    // const items = itemList.querySelector('li');    
    // itemList.innerHTML = '';


    // while loop - maybe the most performant?
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    };
    console.log(itemList);
}