// TODO: add code here
window.addEventListener("load", function () {

    const fetchAstronaut = fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    fetchAstronaut.then(function(response) {
        response.json().then(function(data) {
            console.log(data);

            for (let i = 0; i < data.length; i++) {
                document.getElementById("container").innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>Number: ${(data[i].id)}</h3>
                        <h3> ${data[i].firstName} ${data[i].lastName}</h3>
                        <ul>
                            <li> Hours in space: ${data[i].hoursInSpace}</li>
                            <li> Active: ${data[i].active}</li>
                            <li> Skills: ${data[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${data[i].picture}>
                </div>    
                </br>
                `;

                 
            }
           
            
        });
    });

    // document.addEventListener("click", function () {
    
    // });
});