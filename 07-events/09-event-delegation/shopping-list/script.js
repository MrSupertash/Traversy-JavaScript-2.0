const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');


// listItems.forEach(item => {
//     item.addEventListener('click', e => {
//         e.target.remove();
//     })
// })


// here we target the ul that contains the li children. When I click on the children, I'll get the child elements as targets nonetheless. If I click bewteen the children, I'll get the ul as target.
// e.currentTarget will ALWAYS get the target that the eventListener was added to!
list.addEventListener('click', e => {

    // this will not work if clicked on the actual button/icon, the following now only specifically fires when clicking anywhere else in the LI. This will be tackled in the module 8 Shopping List project.
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }

    console.log(e.target);
    console.log(e.currentTarget);
})
