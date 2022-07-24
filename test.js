// console.log(allLeagueId.length);
// // 


// fetch(`https://apiv3.apifootball.com/?action=get_events&from=${today}&to=${today}&APIkey=${apiKey}`)

//     .then(response => response.json())
//     .then(result => {

//         // console.log(time[index])
//         console.log(result);
//         for (let i = 0; i < result.length; i++) {
//             firebase.database().ref("match/" + today + "/" + i + "/").set({

//                 league_id: result[i].league_id, //
//                 league_logo: result[i].league_logo, //
//                 league_name: result[i].league_name,//

//                 awayTeam_id: result[i].match_awayteam_id,//
//                 homeTeam_id: result[i].match_hometeam_id,//
//                 awayTeam_name: result[i].match_awayteam_name,
//                 homeTeam_name: result[i].match_hometeam_name,
//                 homeTeam_score: result[i].match_hometeam_ft_score,//
//                 awayTeam_score: result[i].match_awayteam_ft_score,//
//                 awayTeam_logo: result[i].team_away_badge, //
//                 homeTeam_logo: result[i].team_home_badge,//

//                 match_date: result[i].match_date,//
//                 match_id: result[i].match_id,//
//                 match_time: result[i].match_time,//
//                 match_status: result[i].match_status,//

//                 isLive: result[i].match_live,


//             })

//             // console.log(result[i].country_name)

//         }
//     })


// for (const j of time) {
//     fetch(`https://apiv3.apifootball.com/?action=get_events&from=${j}&to=${j}&APIkey=${apiKey}`)

//         .then(response => response.json())
//         .then(result => {

//             // console.log(time[index])
//             console.log(time.length)
//             console.log(j);
//             for (let i = 0; i < result.length; i++) {
//                 firebase.database().ref("match/" + j + "/" + i + "/").set({

//                     league_id: result[i].league_id, //
//                     league_logo: result[i].league_logo, //
//                     league_name: result[i].league_name,//

//                     awayTeam_id: result[i].match_awayteam_id,//
//                     homeTeam_id: result[i].match_hometeam_id,//
//                     awayTeam_name: result[i].match_awayteam_name,
//                     homeTeam_name: result[i].match_hometeam_name,
//                     homeTeam_score: result[i].match_hometeam_ft_score,//
//                     awayTeam_score: result[i].match_awayteam_ft_score,//
//                     awayTeam_logo: result[i].team_away_badge, //
//                     homeTeam_logo: result[i].team_home_badge,//

//                     match_date: result[i].match_date,//
//                     match_id: result[i].match_id,//
//                     match_time: result[i].match_time,//
//                     match_status: result[i].match_status,//

//                     isLive: result[i].match_live,


//                 })

//                 // console.log(result[i].country_name)

//             }
//         })

// }

// firebase.database().ref("matchById/").remove()


// time.forEach(e => {
//     // https://apiv3.apifootball.com/?action=get_events&from=2021-07-12&to=2021-07-12&league_id=1&APIkey=e3554144c5e71116340837a3ffd789e5cf103fe8da6e50dcc0ba99b90bef5db3
//     fetch(`https://apiv3.apifootball.com/?action=get_events&from=${e}&to=${e}&APIkey=${apiKey}`)
//         .then(response => response.json())
//         .then(result => {
//             console.log(e);
//             console.log(result);
//             for (let i = 0; i < result.length; i++) {
//                 firebase.database().ref("matchById/" + result[i]["match_id"] + "/data/").set({
//                     match_id: result[i]["match_id"],
//                     country_name: result[i]["country_name"],
//                     league_name: result[i]["league_name"],
//                     league_id: result[i]["league_id"],
//                     match_time: result[i]["match_time"],
//                     match_hometeam_id: result[i]["match_hometeam_id"],
//                     match_hometeam_name: result[i]["match_hometeam_name"],
//                     match_hometeam_score: result[i]["match_hometeam_score"],
//                     match_awayteam_name: result[i]["match_awayteam_name"],
//                     match_awayteam_id: result[i]["match_awayteam_id"],
//                     match_awayteam_score: result[i]["match_awayteam_score"],
//                     match_hometeam_ft_score: result[i]["match_hometeam_ft_score"],
//                     match_awayteam_ft_score: result[i]["match_awayteam_ft_score"],
//                     match_hometeam_extra_score: result[i]["match_hometeam_extra_score"],
//                     match_awayteam_extra_score: result[i]["match_awayteam_extra_score"],
//                     match_hometeam_penalty_score: result[i]["match_hometeam_penalty_score"],
//                     match_awayteam_penalty_score: result[i]["match_awayteam_penalty_score"],
//                     match_hometeam_system: result[i]["match_hometeam_system"],
//                     match_awayteam_system: result[i]["match_awayteam_system"],
//                     match_live: result[i]["match_live"],
//                     match_date: result[i]["match_date"],
//                     match_stadium: result[i]["match_stadium"],
//                     match_referee: result[i]["match_referee"],
//                     team_home_badge: result[i]["team_home_badge"],
//                     team_away_badge: result[i]["team_away_badge"],
//                     goalscorer: result[i]["goalscorer"],
//                     cards: result[i]["cards"],
//                     substitutions: result[i]["substitutions"],
//                     lineup: result[i]["lineup"],
//                     statistics: result[i]["statistics"],
//                 })
              

//             }
//         })
// });

fetch(`https://apiv3.apifootball.com/?action=get_events&from=${moment().subtract(120, "days").format("yyyy[-]MM[-]DD").toString()}&to=${moment().add(90, "days").format("yyyy[-]MM[-]DD").toString()}&APIkey=${apiKey}`)

.then(response=>response.json())
.then(result =>{
console.log(result);
})

firebase.database().ref("matchById/").remove()
