document.addEventListener('DOMContentLoaded', function(){

    //Adding an activity

let activities = [];

// Create a function called addActivity with 3 parameters
function addActivity(date, activity, duration){
activities.push({date: date, activity: activity, duration: duration});
return activities;
}

addActivity("14/12/2018", "Facebook", 30);
addActivity("14/12/2018", "News", 120);
console.log(activities);

//Show my status
function showStatus(){
    let usageLimitMin = 60; //Usage limit
    let calcDuration = 0;
    for (let j = 0; j < activities.length; j++){
        calcDuration += activities[j].duration;
    };
    for(let i = 0; i < activities.length; i++){
    };
    if(calcDuration >= usageLimitMin){ //to get the limit with if/else condition
        console.log("You have reached your limit, no more items for you!");
    }
    else{
        console.log("go for it");
    }
    for (let Extra = 0; Extra < activities.length; Extra++){  
        if (activities[Extra].duration > 30){
            console.log( `${activities[Extra].duration}` + " minutes" + " was way too much for a singe " +  `${activities[Extra].activity}` + " session.");
        }
    }
    return "You have added " +  `${activities.length}`  + " activities. They amount to " +  `${calcDuration}` + " min. of usage."
};

console.log(showStatus(activities));
})