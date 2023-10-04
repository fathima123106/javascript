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

let p= function(){
    let a=2;
    return new Promise((resolve,reject)=>{
        if(a==3){
            resolve("success")
        }else{
            reject("failed")
        }
    })
}

p()
    .then((message)=>{
        console.log("msg",message)
    })
    .catch((error)=>{
        console.log("msg",error)
    })