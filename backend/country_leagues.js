var countriesLeaguesId = [];
var allLeagueId = [];
var done = false;
fetch(`https://apiv3.apifootball.com/?action=get_countries&APIkey=${apiKey}`)

    .then(response => response.json())
    .then(result => {
        console.log(result)
        for (let index = 0; index < result.length; index++) {
            countriesLeaguesId.push(result[index].country_id)
            // console.log(countriesLeaguesId[index]);
        }
        console.log("-------------");
        // for (let index = 0; index < countriesLeaguesId.length; index++) {
        //     console.log(countriesLeaguesId[index]);
        // }
        // console.log() 
        done = true;
    }).then(() => {

        console.log("-------------*********");

        for (let index = 0; index < countriesLeaguesId.length; index++) {
            // console.log(index)
            fetch(`https://apiv3.apifootball.com/?action=get_leagues&country_id=${countriesLeaguesId[index]}&APIkey=${apiKey}`)

                .then(response => response.json())
                .then(result => {
                    // console.log(result)
                    for (let i = 0; i < result.length; i++) {
                        // console.log(result[i].league_id);
                        allLeagueId.push(result[i].league_id)
                        firebase.database().ref("countriesLeagues/" + countriesLeaguesId[index] + "/" + i).set({
                            name: result[i].league_name,
                            league_id: result[i].league_id,
                            league_logo: result[i].league_logo

                        })
                    }

                }).then(() => {
                    // console.log(allLeagueId.length);
                    // // console.log("---------------------")
                    // for (let i = 0; i < allLeagueId.length; i++) {
                    //     console.log(allLeagueId[i]) 

                    // }
                    // console.log("-------------"+allLeagueId.length+"-------------") 748
                    // for (let i = 0; i < allLeagueId.length; i++) {
                    //     setTimeout(() => {

                    //     }, 2000);

                    // }
                    console.log(allLeagueId.length);
                    for (let i = 0; i < allLeagueId.length; i++) {
                        console.log(`-----${i}--------`)
                        console.log(allLeagueId[i]);
                        fetch(`https://apiv3.apifootball.com/?action=get_standings&league_id=${allLeagueId[i]}&APIkey=${apiKey}`)
                            .then(response => response.json())
                            .then(result => {
                                console.log(result);
                            })
                    }
                })
        }


    })
// setTimeout(() => {
//     for (let i = 0; i < allLeagueId.length; i++) {
//         console.log(`-----${i}--------`)
//         console.log(allLeagueId[i]);   
//        }
// }, 5000)


//https://apiv3.apifootball.com/?action=get_leagues&country_id=6&APIkey=x

