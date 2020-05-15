$(document).ready(function () {
    // global variables
    let lat = 0;
    let long = 0;

    //getting the LAtitude and longitde of currnt location
    navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude;
        long = position.coords.longitude;
        console.log(lat + "and" + long);

        const queryURL = "https://api.windy.com/api/webcams/v2/list/category=beach?key=Xk8T8bb2Y0VrViWUepv5oyaGM5XdDoWE"
    
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function (response) {
            console.log(response);

            for (var i = 0; i < 8; index++) {
                let data = response.results[i];
                console.log(data);

                let webCamCard = `
                
                `;
                
                
            }
            
        }
    
    
    
    
    
    })










}

