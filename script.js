const updateBanner = (message) => {

    document.getElementById("statusBanner").innerText = message;

};
const checkStatus = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let status = true;

            if(status) {
                resolve("System is Online");
            }
            else {
                reject("System is Offline");
            }

        }, 2000);

    });

};
checkStatus()

.then((message) => {

    console.log(message);

})

.catch((message) => {

    console.log(message);

});