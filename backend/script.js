var today=moment().format("yyyy[-]MM[-]DD").toString();

setInterval(() => {
    for (const j of time) {
        fetch(`https://apiv3.apifootball.com/?action=get_events&from=${j}&to=${j}&APIkey=${apiKey}`)
        
        .then(response => response.json())
        .then(result => {

            // console.log(time[index])
            console.log(time.length)
            console.log(j);
            for (let i = 0; i < result.length; i++) {
                firebase.database().ref("match/" + j + "/" + i + "/").set({

                    league_id: result[i].league_id, //
                    league_logo: result[i].league_logo, //
                    league_name: result[i].league_name,//

                    awayTeam_id: result[i].match_awayteam_id,//
                    homeTeam_id: result[i].match_hometeam_id,//
                    awayTeam_name: result[i].match_awayteam_name,
                    homeTeam_name: result[i].match_hometeam_name,
                    homeTeam_score: result[i].match_hometeam_ft_score,//
                    awayTeam_score: result[i].match_awayteam_ft_score,//
                    awayTeam_logo: result[i].team_away_badge, //
                    homeTeam_logo: result[i].team_home_badge,//

                    match_date: result[i].match_date,//
                    match_id: result[i].match_id,//
                    match_time: result[i].match_time,//
                    match_status: result[i].match_status,//

                    isLive: result[i].match_live,


                })
             
                // console.log(result[i].country_name)

            }
        })
      
    }
}, 86400000);
   
setInterval(() => {
    fetch(`https://apiv3.apifootball.com/?action=get_events&from=${today}&to=${today}&APIkey=${apiKey}`)
        
    .then(response => response.json())
    .then(result => {

        // console.log(time[index])
        console.log(result);
        for (let i = 0; i < result.length; i++) {
            firebase.database().ref("match/" + today + "/" + i + "/").set({

                league_id: result[i].league_id, //
                league_logo: result[i].league_logo, //
                league_name: result[i].league_name,//

                awayTeam_id: result[i].match_awayteam_id,//
                homeTeam_id: result[i].match_hometeam_id,//
                awayTeam_name: result[i].match_awayteam_name,
                homeTeam_name: result[i].match_hometeam_name,
                homeTeam_score: result[i].match_hometeam_ft_score,//
                awayTeam_score: result[i].match_awayteam_ft_score,//
                awayTeam_logo: result[i].team_away_badge, //
                homeTeam_logo: result[i].team_home_badge,//

                match_date: result[i].match_date,//
                match_id: result[i].match_id,//
                match_time: result[i].match_time,//
                match_status: result[i].match_status,//

                isLive: result[i].match_live,


            })
         
            // console.log(result[i].country_name)

        }
    })
            
}, 50000);

// console.log(moment().format("yyyy[-]MM[-]DD").toString());