const user = document.getElementById('user');
const generateBtn = document.getElementById('generate');


// Brad has 2 functions in the global scope: fetchUser() which is the fetch, and in the 2nd .then() he calls the displayUser() function with the random user as parameter.
function fetchUser() {
    showSpinner();
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            hideSpinner();
            displayUser(data.results[0]);            
        });
}

function displayUser(newUser) {
    if (newUser.gender === 'female') {
        document.body.style.backgroundColor = 'rebeccapurple';
    } else {
        document.body.style.backgroundColor = 'steelblue';
    }
    
    user.innerHTML = `
    <div class="flex justify-between">
     <div class="flex">
       <img
         class="w-48 h-48 rounded-full mr-8"
         src="${newUser.picture.large}"
       />
       <div class="space-y-3">
         <p class="text-xl">
           <span class="font-bold">Name: </span>${newUser.name.first} ${newUser.name.last}
         </p>
         <p class="text-xl">
           <span class="font-bold">Email: </span>${newUser.email}
         </p>
         <p class="text-xl">
           <span class="font-bold">Phone: </span> ${newUser.phone}
         </p>
         <p class="text-xl">
           <span class="font-bold">Location: </span> ${newUser.location.city}, ${newUser.location.country}
         </p>
         <p class="text-xl"><span class="font-bold">Age: </span>${newUser.dob.age}</p>
       </div>
     </div>
    </div>`
};

function showSpinner() {
    document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
    document.querySelector('.spinner').style.display = 'none';
}


generateBtn.addEventListener('click', fetchUser);
window.addEventListener('DOMContentLoaded', fetchUser);