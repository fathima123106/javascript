
/*--------------async&await----------------*/

let preMovie = async () => {
    let friendBringTicket = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("here is your ticket...");
        }, 3000);
    });
    let getPopcorn = new Promise((resolve, reject) => {
        resolve("Here is your popcorn...")
    });
    let getButtoronPopcorn = new Promise((resolve, reject) => {
        resolve("Butter added on your popcorn")
    });

    //step
    let ticket = await friendBringTicket;
    console.log("my ticket : ", ticket);

    let popcorn = await getPopcorn;
    console.log("my popcorn : ", popcorn);

    let butterOnpopcorn = await getButtoronPopcorn;
    console.log("butter added in my popcorn :", butterOnpopcorn);

    return ticket;
}

preMovie();
preMovie().then((ticket) => {
    console.log("ticktes", ticket)
})



/*--------------async&await using try----------------*/

let preMovies = async () => {
    try {
        let friendBringTickets = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("here is your ticket...");
            }, 3000);
        });
        let getPopcorns = new Promise((resolve, reject) => {
            resolve("Here is your popcorn...")
        });
        let getButtoronPopcorns = new Promise((resolve, reject) => {
            resolve("Butter added on your popcorn")
        });

        //step
        let ticket = await friendBringTickets11;
        console.log("my ticket : ", ticket);

        let popcorn = await getPopcorns;
        console.log("my popcorn : ", popcorn);

        let butterOnpopcorn = await getButtoronPopcorns;
        console.log("butter added in my popcorn :", butterOnpopcorn);

        return ticket;
    } catch (error) {
        console.log("error from try catch", error.message)
    }
}

preMovies();
