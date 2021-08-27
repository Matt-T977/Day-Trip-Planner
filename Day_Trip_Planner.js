"use strict"
///code below
//arrays
let destinations = ["Town Square", "The Mall", "Art District", "Downtown", "The Beach"];
let restaurants = ["Irish Pub", "Asian", "BBQ"];
let transportation = ["Limo", "Cab", "Bus"];
let entertainment = ["Live Music", "Comedy Club", "Dancing"];
//Destination randomizer
function plannerDestination(){
    let selectedDestination = destinations[Math.floor(Math.random()*destinations.length)];
    return selectedDestination;
}
//Restaurant randomizer
function plannerRestaurant(){
    let selectedRestaurant = restaurants[Math.floor(Math.random()*restaurants.length)];
    return selectedRestaurant;
}
//Transportation randomizer
function plannerTransportation(){
    let selectedTransport = transportation[Math.floor(Math.random()*transportation.length)];
    return selectedTransport;
}
//Entertainment randomizer
function plannerEntertainment(){
    let selectedEntertainment = entertainment[Math.floor(Math.random()*entertainment.length)];
    return selectedEntertainment;
}
// Day Trip Planner Initializer
function dayTripPlanner(){
    let destination = plannerDestination();
    let restaurant = plannerRestaurant();
    let transportation = plannerTransportation();
    let entertainment = plannerEntertainment();
    let userSatisfactionUnfullfilled = true
    while (userSatisfactionUnfullfilled){
        let userChoice = prompt(`These are your current selections for your Day Trip at ${destination}. You will be dining at ${restaurant} where you shall arrive by ${transportation}. 
        After which you will enjoy ${entertainment} for your entertainment. Are these to your liking or shall we change one of them? Please state yes, destination, restaurant, transportation, or entertainment.`).toLowerCase();
        if(userChoice === "yes"){
            return `Thank you for using the Day Trip Planner, we hope you enjoy your time at ${destination}, while dining at ${restaurant} arriving by ${transportation}, and shall be enjoying ${entertainment}!`
        }
        else if(userChoice === "destination"){
            destination = plannerDestination();
        }
        else if(userChoice === "restaurant"){
            restaurant = plannerRestaurant();
        }
        else if(userChoice === "transportation"){
            transportation = plannerTransportation();
        }
        else if(userChoice === "entertainment"){
            entertainment = plannerEntertainment();
        }
        else{
            console.log("The response you have entered cannot be recognized, please try again.");
        }
    }    
}
let output = dayTripPlanner();
console.log(output);