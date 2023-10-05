
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

let UserNotPlaying=true
let userLeft = true
let userActive=true

function game (){
 return new Promise ((resolve,reject)=>{
    if(UserNotPlaying==true && userLeft==true){
        reject({
            name : "user1",
            status:"left the game"
        });
    }else if (UserNotPlaying==true && userLeft ==false){
        reject({
            name :"user1",
            status : "game paused "
        });
    }else if ( UserNotPlaying == false && userLeft == false){
    resolve({
        name :"user1",
        status : "playing the game "
    })
    }
 })
}
game()
    .then(function (messagestatus){
        console.log("status",messagestatus)
    })
    .catch(function(errormessage){
        console.log("status",errormessage)
    })