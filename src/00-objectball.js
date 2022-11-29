const gameObject = {
    home : {
        teamName : "Brooklyn Nets",
        colors : ["Black", "White"],
        players :  {
            "Alan Anderson" : {
                "number" : 0,
                "shoe" : 16,
                "points" : 22,
                "rebounds" : 12,
                "assists" : 12,
                "steals" : 3,
                "blocks" : 1,
                "slamDunks" : 1
            },
            "Reggie Evans" : {
                "number" : 30,
                "shoe" : 14,
                "points" : 12,
                "rebounds" : 12,
                "assists" : 12,
                "steals" : 12,
                "blocks" : 12,
                "slamDunks" : 7
            },
            "Brook Lopez" : {
                "number" : 11,
                "shoe" : 17,
                "points" : 17,
                "rebounds" : 19,
                "assists" : 10,
                "steals" : 3,
                "blocks" : 1,
                "slamDunks" : 5
            },
            "Mason Plumlee" : {
                "number" : 1,
                "shoe" : 19,
                "points" : 26,
                "rebounds" : 12,
                "assists" : 6,
                "steals" : 3,
                "blocks" : 8,
                "slamDunks" : 5
            },
            "Jason Terry" : {
                "number" : 31,
                "shoe" : 15,
                "points" : 19,
                "rebounds" : 2,
                "assists" : 2,
                "steals" : 4,
                "blocks" : 11,
                "slamDunks" : 1
            },
        }
    },

    away : {
        teamName : "Charlotte Hornets",
        colors : ["Turquoise", "Purple"],
        players :  {
            "Jeff Adrien" : {
                "number" : 4,
                "shoe" : 18,
                "points" : 10,
                "rebounds" : 1,
                "assists" : 1,
                "steals" : 2,
                "blocks" : 7,
                "slamDunks" : 2
            },
            "Bismak Biyombo" : {
                "number" : 0,
                "shoe" : 16,
                "points" : 12,
                "rebounds" : 4,
                "assists" : 7,
                "steals" : 7,
                "blocks" : 15,
                "slamDunks" : 10
            },
            "DeSagna Diop" : {
                "number" : 2,
                "shoe" : 14,
                "points" : 24,
                "rebounds" : 12,
                "assists" : 12,
                "steals" : 4,
                "blocks" : 5,
                "slamDunks" : 5
            },
            "Ben Gordon" : {
                "number" : 8,
                "shoe" : 15,
                "points" : 33,
                "rebounds" : 3,
                "assists" : 2,
                "steals" : 1,
                "blocks" : 1,
                "slamDunks" : 0
            },
            "Brendan Haywood" : {
                "number" : 33,
                "shoe" : 15,
                "points" : 6,
                "rebounds" : 12,
                "assists" : 12,
                "steals" : 22,
                "blocks" : 5,
                "slamDunks" : 12
            },
        }
    }
};

//console.log(gameObject.home.players["Andrew"]);

function numPointsScored(playerName){
    debugger
    if(gameObject.home.players[playerName] === undefined){
        return gameObject.away.players[playerName]["points"];
    }
    else if(gameObject.away.players[playerName] === undefined){
        return gameObject.home.players[playerName]["points"];
    }
    else{
        return "player not found";
    }

/*     //or could do this way
    const maybePlayer = gameObject.home.players[playerName];

    return !maybePlayer ? gameObject.away.players[playerName]?.points : mayberPlayer.points; */

    //or
/*     const maybePlayer = allPlayers()[playerName];
    return !maybePlayer ? maybePlayer : maybePlayer.points; */
}

/* console.log(numPointsScored("Alan Anderson"))
console.log(numPointsScored("Jeff Adrien")) */

const allPlayers = () => ({...gameObject.home.players, ...gameObject.away.players});

//console.log(allPlayers());

const shoeSize = (playerName) => {
    const maybePlayer = allPlayers()[playerName];
    return !maybePlayer ? maybePlayer : maybePlayer.shoe;

    //or 1 line
    //return allPlayers()[playerName]?.shoe;
}

const allTeams = () => ([...gameObject.home, ...gameObject.away]);

const teamColors = (teamName)  => {
/*     if(allTeams()[0].teamName === teamName){

    }else if(allTeams()[0].teamName === teamName){

    }
    else{

    }*/
    return gameObject.home.teamName === teamName ? gameObject.home?.colors : gameObject.away.teamName === teamName ? gameObject.away?.colors : "Not a Team";
}

//console.log(teamColors("Brooklyn Nets"));

const teamNames = () => ([gameObject.home.teamName, gameObject.away.teamName]);

//console.log(teamNames());

const playerNumbers = (teamName) => {
    return gameObject.home.teamName === teamName ? playerNums(gameObject.home) : gameObject.away.teamName === teamName ? playerNums(gameObject.away) : [];
}

const playerNums = (team) => {
    let playersArray = Object.entries(team.players);
    
    let array = [];
    playersArray.forEach((el) => {
/*         console.log(Object.keys(el));
        console.log(el['1'].number); */
        array.push(el['1'].number);
    });

    return array;
}

//console.log(playerNums(gameObject.home));
/* console.log(playerNumbers("Brooklyn Nets"));
console.log(playerNumbers("Charlotte Hornets"));
console.log(playerNumbers("not a name")); */

const playerStats = (name) => (gameObject.home.players[name])

//console.log(playerStats('Alan Anderson'));

const bigShoeRebounds = () => {
    let players = Object.entries(allPlayers());

    let shoeSize = [];
    players.forEach((el) => {
        shoeSize.push(el['1'].shoe);
    });

/*     let rebounds = [];
    players.forEach((el) => {
        shoeSize.push(el['1'].rebounds);
    }); */

    return players[largestNum(shoeSize)]['1'].rebounds;
}

/* function betterRebounds(){
    let players = allPlayers();
    console.log("Better Rebounds");
    for(let key in allPlayers) {
        let value = allPlayers[key];
        console.log("key:", key, "value:", value);
    }
} */

const largestNum = (array) => {
    let num = array[0];

    array.forEach( (el) => {el > num ? num = el : num = num} )

    return array.indexOf(num);
}

//console.log(bigShoeRebounds());
//console.log(largestNum(bigShoeRebounds()));

betterRebounds();