
var link = `https://apiv3.apifootball.com/?action=get_countries&APIkey=${apiKey}`

fetch(link).then(response=>response.json()).then(result=>{
    console.log(result)
    for (let i = 0; i < result.length; i++) {
        firebase.database().ref("test1/"+i).set({
            id:result[i].country_id,
            name:result[i].country_name,
            logo:result[i].country_logo
        
       
        })
    }
})