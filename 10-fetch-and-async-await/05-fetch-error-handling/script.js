// Not secure, and had genuine error codes 503 Bad Gateway and 502 also for a while, so probably avoid actually running this code.
// http://httpstat.us/

// fetch('http://httpstat.us/200')
//     .then(response => {
//         return response;
//     })
//     .then(() => {
//         console.log('success');
//     })


// fetch('http://httpstat.us/404')
//     .then(response => {
//         return response;
//     })
//     .then(() => {
//         console.log('success');
//     })
//     // this does NOT work properly in fetch. If status code is not in the 200 range, errors are NOT caught with catch! The Axios library can apparently do that, though
//     .catch(error => {
//         console.log(error);
//     })


// catch runs on Network Error, like the URL is not valid
// fetch('http://helloasdmoasdm12134.net')
//     .then(response => {
//         return response;
//     })
//     .then(() => {
//         console.log('success');
//     })    
//     .catch(error => {
//         console.log(error);
//     })


// Test with response.ok
fetch('http://httpstat.us/401')
    .then(response => {
        console.log(response.status); // 404
        console.log(response.statusText); // Not Found
        console.log(response.ok); // false

        if (response.status === 404) {
            throw new Error('Not Found')
        } else if (response.status === 500) {
            throw new Error('Server Error')
        } else if (response.status !== 200) {
            throw new Error('Request Failed')
        }

        // we can target errors in many ways, one of the easiest is probably if response.ok != true, that does not narrow it down really to what the actual status code is.
        // if (!response.ok) {
        //     throw new Error('Request Failed');
        // }
        return response;
    })
    .then(() => {
        console.log('success');
    })
    .catch(error => {
        console.log(error);
    })