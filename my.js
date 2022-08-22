function gameObject(){
    const newObject = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ['Black', 'WHite'],
            players: {
                'Alan Anderson': {
                    number:0,
                    shoe:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:3,
                    slamDanks:1
                },
                'Reggie Evans': {
                    number:30,
                    shoe:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDanks:7,

                },
                'Brook Lopez ':{
                    number:11,
                    shoe:17,
                    points:17,
                    rebounds:19,
                    assists:12,
                    steals:10,
                    blocks:3,
                    slamDanks:15

                },
                'Mason Plumlee': {
                    number:1,
                    shoe:19,
                    points:26,
                    rebounds:12,
                    assists:12,
                    steals:18,
                    blocks:6,
                    slamDanks:8,

                },
                'Jason Terry': {
                    number:31,
                    shoe:15,
                    points:19,
                    rebounds:18,
                    assists:5,
                    steals:16,
                    blocks:45,
                    slamDanks:7
                }
            }
        },
        Away: {
            teamName: "Charlotte Hornets",
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number:4,
                    shoe:18,
                    points:10,
                    rebounds:52,
                    assists:12,
                    steals:6,
                    blocks:4,
                    slamDanks:2,
                },
                'Bismak Biyombo': {
                    number:0,
                    shoe:16,
                    points:12,
                    rebounds:4,
                    assists:1,
                    steals:15,
                    blocks:16,
                    slamDanks:4

                },
                'DeSagna Diop ':{
                    number:2,
                    shoe:14,
                    points:24,
                    rebounds:15,
                    assists:13,
                    steals:15,
                    blocks:7,
                    slamDanks:5

                },
                'Ben Gordon': {
                    number:8,
                    shoe:15,
                    points:33,
                    rebounds:16,
                    assists:17,
                    steals:8,
                    blocks:5,
                    slamDanks:11

                },
                'Brendan Haywood': {
                    number:33,
                    shoe:15,
                    points:15,
                    rebounds:18,
                    assists:6,
                    steals:17,
                    blocks:44,
                    slamDanks:5,
                }
            }
        },
        }
        return newObject
    }

console.log(gameObject())

function numPointsScored(playersName) {
    const homeTeamPlayer = object.home.players[playersName]
    if (homeTeamPlayer) {
        return homeTeamPlayer.points
    }
    else {
        const awayTeamPlayer = object.away.players[playersName]
        return awayTeamPlayer.points
    }
}

function shoeSize(playersName) {
    return playersName.shoe
}

function teamColors(teamName) {
    const object = gameObject()
    return object.teamName.colors
}

const teamNames = () => {const object = gameObject()

const teamNamesArray = []
for (const property in object) {
    teamNamesArray.push(object[property].teamName)
}
return teamNamesArray
}








    