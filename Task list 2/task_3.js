const myPromise = new Promise((resolve, reject) => {
    // simulating api call
    setTimeout(() => {
        console.log('time out done')
        resolve("promise resolved")
    }, 3000);
});

myPromise
.then(() => console.log('then block'))
.catch((e) => console.error("error: ", e))
.finally(() => console.log("finally block"));