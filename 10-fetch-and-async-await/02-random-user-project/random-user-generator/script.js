// My first try was to save the response into a variable to use later, but that didn't quite work. Instead of the data, the variable was the promise. So here Brad actually directly calls the displayUser function with the user data array.
function fetchUser() {
    showSpinner();
    fetch('https://randomuser.me/api')
        .then((response => response.json()))
        .then(data => {
            hideSpinner();
            displayUser(data.results[0]);
        })
}

function displayUser(user) {
    // this here changes backgroundcolor of the page based on gender
    const userDisplay = document.querySelector('#user');
    if (user.gender === 'female') {
        document.body.style.backgroundColor = 'rebeccapurple';
    } else {
        document.body.style.backgroundColor = 'steelblue';
    }

    userDisplay.innerHTML = `
    <div class="flex justify-between">
     <div class="flex">
       <img
         class="w-48 h-48 rounded-full mr-8"
         src="${user.picture.large}"
       />
       <div class="space-y-3">
         <p class="text-xl">
           <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
         </p>
         <p class="text-xl">
           <span class="font-bold">Email: </span>${user.email}
         </p>
         <p class="text-xl">
           <span class="font-bold">Phone: </span>${user.phone}
         </p>
         <p class="text-xl">
           <span class="font-bold">Location: </span>${user.location.city}, ${user.location.country}
         </p>
         <p class="text-xl"><span class="font-bold">Age: </span>${user.dob.age}</p>
       </div>
     </div>
   </div>`
}

// could we just toggle this?
function showSpinner() {
    document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
    document.querySelector('.spinner').style.display = 'none';
}

fetchUser();

document.getElementById('generate').addEventListener('click', fetchUser);