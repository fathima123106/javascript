/*--------------------------USING CALLBACK----------------*/

// let UserNotPlaying=true
// let userLeft = true

// function game (successCallback,errorCallback){
//     if(UserNotPlaying==true && userLeft==true){
//         errorCallback({
//             name : "user1",
//             status:"left the game"
//         });
//     }else if (UserNotPlaying==true && userLeft ==false){
//         errorCallback({
//             name :"user1",
//             status : "game paused "
//         });
//     }else if ( UserNotPlaying == false && userLeft == false){
//     successCallback({
//         name :"user1",
//         status : "playing the game "
//     })
//     }
// }
// game(function (messagestatus){
//     console.log("status",messagestatus)
// },function(errormessage){
//     console.log("status",errormessage)
// })

/*----------------------USING PROMISES-------------------------*/

// let UserNotPlaying=true
// let userLeft = true
// let userActive=true

// function game (){
//  return new Promise ((resolve,reject)=>{
//     if(UserNotPlaying==true && userLeft==true){
//         reject({
//             name : "user1",
//             status:"left the game"
//         });
//     }else if (UserNotPlaying==true && userLeft ==false){
//         reject({
//             name :"user1",
//             status : "game paused "
//         });
//     }else if ( UserNotPlaying == false && userLeft == false){
//     resolve({
//         name :"user1",
//         status : "playing the game "
//     })
//     }
//  })
// }
// game()
//     .then(function (messagestatus){
//         console.log("status",messagestatus)
//     })
//     .catch(function(errormessage){
//         console.log("status",errormessage)
//     })

let gameplay1 = new Promise((resolve, reject) => {
  resolve("success1");
});

let gameplay2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("success2");
  }, 2000);
});
let gameplay3 = new Promise((resolve, reject) => {
  resolve("success3");
});
// gameplay1.then((message)=>{
//     console.log("gamePlay1",message)
// })

// gameplay2.then((message)=>{
//     console.log("gamePlay2",message)
// })

// gameplay3.then((message)=>{
//     console.log("gamePlay3",message)
// })

/*--------------promise.all & promise.race----------------*/

//all-- wait untile everything get rsolve  else if any one got rejceted the as soon as it will goes to catch
//race -- looks for the first one idf it is rejected then goes to catch else if it is resolved it goes to to then after that it will not wait for the other one  only it goes to the next one neither the first one is resolved nor rejected

// Promise.all([gameplay1, gameplay2, gameplay3])
//   .then((message) => {
//     console.log("message : ", message);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

// Promise.race([gameplay1, gameplay2, gameplay3])
//   .then((message) => {
//     console.log("racemessage : ", message);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });

/*--------------promise.all & promise.race using map----------------*/

let arr = ["true", "false", "true"];
let result = Promise.all(
  arr.map((e) => {
    return new Promise((resolve, reject) => {
      if (e == "true" || e == "false") {
        resolve("success");
      }
    });
  })
);
console.log("result", result);

result
  .then((message) => {
    console.log("racemessage : ", message);
  })
  .catch((error) => {
    console.log("error", error);
  });
