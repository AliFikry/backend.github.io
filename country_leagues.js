var countriesLeaguesId = [];
// var allTeamsId=[];
// var allLeagueId = [];
// const fetch = require("https://cdnjs.cloudflare.com/ajax/libs/fetch/3.6.2/fetch.js")
var done = false;
var addedDate = new Date(); addedDate.setDate(addedDate.getDate() + 90);
console.log(addedDate.toISOString().split('T')[0]);
todayDate = new Date().toISOString().split('T')[0];

console.log(todayDate)
var minusedDate = new Date(); minusedDate.setDate(minusedDate.getDate() - 90);
console.log(minusedDate.toISOString().split('T')[0]);
fetch(`https://apiv3.apifootball.com/?action=get_countries&APIkey=${apiKey}`)

    .then(response => response.json())
    .then(result => {
        // console.log(result)
        // for (let index = 0; index < result.length; index++) {
        //     countriesLeaguesId.push(result[index].country_id)
        //     // console.log(countriesLeaguesId[index]);
        // }
        // console.log("-------------");
        // // for (let index = 0; index < countriesLeaguesId.length; index++) {
        // //     console.log(countriesLeaguesId[index]);
        // // }
        // // console.log() 
        // done = true;
    }).then(() => {
        // firebase.database().ref("leagueInfo/").remove(),

        console.log("-------------*********");

        for (let index = 0; index < countriesLeaguesId.length; index++) {
            // console.log(index)
            fetch(`https://apiv3.apifootball.com/?action=get_leagues&country_id=${countriesLeaguesId[index]}&APIkey=${apiKey}`)

                .then(response => response.json())
                .then(result => {
                    // console.log(result)
                    for (let i = 0; i < result.length; i++) {
                        // console.log(result[i].league_id);
                        // allLeagueId.push(result[i].league_id)
                        firebase.database().ref("countriesLeagues/" + countriesLeaguesId[index] + "/" + i).set({
                            name: result[i].league_name,
                            league_id: result[i].league_id,
                            league_logo: result[i].league_logo

                        })
                    }
                    // // console.log("done");



                })
        }


    })

// console.log(allLeagueId.length + "/748");


// }
// // console.log("done");

//Date().toISOString().split('T')[0]
// const d = new Date();
// console.log(d.setDate(d.getDate()+6));
// console.log(d.toISOString().split('T')[0]);

// console.log(typeof(allTeamsId.length));
// console.log(allTeamsId[1]);



const timer = ms => new Promise(res => setTimeout(res, ms))
// console.log(typeof (allTeamsId[1]));
async function load() {
    // console.log(addedDate);
    for (let i = 0; i < allLeagueId.length; i++) {

        fetch(`https://apiv3.apifootball.com/?action=get_standings&league_id=${allLeagueId[i]}&APIkey=${apiKey}`)
            .then(response => response.json())
            .then(result => {
                console.log(allLeagueId[i]);
                for (let j = 0; j < result.length; j++) {
                    // console.log(result[j]["team_id"]);
                    // allTeamId.push(result[j]["team_id"])
                    firebase.database().ref("leagueInfo/" + allLeagueId[i] + "/table/" + j).set({
                        team_name: result[j]["team_name"],
                        team_id: result[i]["team_id"],
                        team_badge: result[j]["team_badge"],
                        overall_league_payed: result[j]["overall_league_payed"],
                        overall_league_W: result[j]["overall_league_W"],
                        overall_league_D: result[j]["overall_league_D"],
                        overall_league_L: result[j]["overall_league_L"],
                        overall_league_PTS: result[j]["overall_league_PTS"],
                    })

                }
            })
        fetch(`https://apiv3.apifootball.com/?action=get_events&from=${minusedDate.toISOString().split('T')[0]}&to=${todayDate}&league_id=${allLeagueId[i]}&APIkey=${apiKey}`)
            .then(response => response.json())
            .then(result => {
                // console.log(result);
                // firebase.database().ref("leagueInfo/" + allLeagueId[i] + "/" + "played").remove()
                for (let j = 0; j < result.length; j++) {
                    firebase.database().ref("leagueInfo/" + allLeagueId[i] + "/" + "played" + "/" + j).set({
                        team_home_badge: result[j]["team_home_badge"],
                        team_away_badge: result[j]["team_away_badge"],
                        match_hometeam_name: result[j]["match_hometeam_name"],
                        match_awayteam_name: result[j]["match_awayteam_name"],
                        match_time: result[j]["match_time"],
                        match_date: result[j]["match_date"],
                        match_id: result[j]["match_id"],
                        match_hometeam_ft_score: result[j]["match_hometeam_ft_score"],
                        match_awayteam_ft_score: result[j]["match_awayteam_ft_score"],
                    })
                }
            })

        fetch(`https://apiv3.apifootball.com/?action=get_events&from=${todayDate}&to=${addedDate.toISOString().split('T')[0]}&league_id=${allLeagueId[i]}&APIkey=${apiKey}`)
            .then(response => response.json())
            .then(result => {
                // console.log(allLeagueId[i]);
                console.log(result);
                firebase.database().ref("leagueInfo/" + allLeagueId[i] + "/" + "upcoming").remove()
                for (let j = 0; j < result.length; j++) {
                    firebase.database().ref("leagueInfo/" + allLeagueId[i] + "/" + "upcoming" + "/" + j).set({
                        team_home_badge: result[j]["team_home_badge"],
                        team_away_badge: result[j]["team_away_badge"],
                        match_hometeam_name: result[j]["match_hometeam_name"],
                        match_awayteam_name: result[j]["match_awayteam_name"],
                        match_time: result[j]["match_time"],
                        match_date: result[j]["match_date"],
                        match_id: result[j]["match_id"],
                    })
                }
            })

        await timer(86400000)
    }
}
// load();

async function load2() {

    for (let j = 0; j < allTeamsId.length; j++) {
        fetch(`https://apiv3.apifootball.com/?action=get_events&from=${todayDate}&to=${addedDate.toISOString().split('T')[0]}&team_id=${allTeamsId[j]}&APIkey=${apiKey}`)
            .then(response => response.json())
            .then(result => {
                for (let i = 0; i < result.length; i++) {
                    firebase.database().ref("teamsById/" + allTeamsId[j] + "/upcoming/" + i).set({
                        match_id: result[i]["match_id"],
                        country_name: result[i]["country_name"],
                        league_name: result[i]["league_name"],
                        league_id: result[i]["league_id"],
                        match_time: result[i]["match_time"],
                        match_hometeam_id: result[i]["match_hometeam_id"],
                        match_hometeam_name: result[i]["match_hometeam_name"],
                        match_hometeam_score: result[i]["match_hometeam_score"],
                        match_awayteam_name: result[i]["match_awayteam_name"],
                        match_awayteam_id: result[i]["match_awayteam_id"],
                        match_awayteam_score: result[i]["match_awayteam_score"],
                        match_hometeam_ft_score: result[i]["match_hometeam_ft_score"],
                        match_awayteam_ft_score: result[i]["match_awayteam_ft_score"],
                        match_hometeam_extra_score: result[i]["match_hometeam_extra_score"],
                        match_awayteam_extra_score: result[i]["match_awayteam_extra_score"],
                        match_hometeam_penalty_score: result[i]["match_hometeam_penalty_score"],
                        match_awayteam_penalty_score: result[i]["match_awayteam_penalty_score"],
                        match_hometeam_system: result[i]["match_hometeam_system"],
                        match_awayteam_system: result[i]["match_awayteam_system"],
                        match_live:result[i]["match_live"],
                        match_date:result[i]["match_date"],
                        match_stadium:result[i]["match_stadium"],
                        match_referee:result[i]["match_referee"],
                        team_home_badge:result[i]["team_home_badge"],
                        team_away_badge:result[i]["team_away_badge"],
                        goalscorer:result[i]["goalscorer"],
                        cards:result[i]["cards"],
                        substitutions:result[i]["substitutions"],
                        lineup:result[i]["lineup"],
                        statistics:result[i]["statistics"],

                    })
                }
                console.log(allTeamsId[j]);
                console.log(result);
            })
        await timer(100)

    }
    console.log("done");
}
load2()
//
// setTimeout(() => {
//     console.log(JSON.stringify(allTeamsId));
// }, 30000);












// // console.log(allLeagueId.length);

