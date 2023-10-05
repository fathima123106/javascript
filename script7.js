// const cart=["top","book","pen"]

// api.CreateOrder();
// api.proceedTopayment();
// api.orderSummary()
// api.placeOrder();
// api.updateWallet();

// api.CreateOrder(cart,function() {
//     api.proceedTopayment( function(){
//         api.orderSummary(function(){
//             api.placeOrder(function(){
//                 api.updateWallet();

//             });

//         })
//     });
// })

//inversion of control code readability and maintainability  //pyramid of doom

let p = function () {
    let a = 2;
    return new Promise((resolve, reject) => {
        if (a == 3) {
            resolve("success")
        } else {
            reject("failed")
        }
    })
}

p()
    .then((message) => {
        console.log("msg", message)
    })
    .catch((error) => {
        console.log("msg", error)
    })

let p2 = function () {
    let a = 2;
    return new Promise((resolve, reject) => {
        if (a == 2) {
            resolve("success")
        } else {
            reject("failed")
        }
    })
}

p2()
    .then((message) => {
        console.log("msg", message);
        return message + "to1"
    })
    .then((message1) => {
        console.log("msg", message1);
        return message1 + "to2"
    })
    .then((message) => {
        console.log("msg", message)
    })
    .catch((error) => {
        console.log("msg", error)
    })
