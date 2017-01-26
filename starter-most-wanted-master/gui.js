function initSearch(data){
	var pete =prompt("What would you like to search for?","Words were here");
	pete.toUpperCase();
	switch(pete)
	{
		case "name":
		initSearchByName(data);
		
		break;
		case "traits":
		initSearchByTraits();
		default:
		var y = arraySplit(data[0]);
		console.log(y);
		
	}
	;
}
function initSearchByName(data){
	var fName =prompt("First Name","");
	var lName =prompt("Last Name","");
	if (fname == "")
	{
		fName= paul;
	}
	if (lname == "")
	{
		lName= paul;
	}
	if((fName+lName == (arraySplit(data,2)+ arraySplit(data,3))))
	{
		console.log(yes)
	}
	
}
function initSearchByTraits(){
	;
}
function displayResults(){
	;
}
function isNumeric() {
	;
}
function getAge(){
	;
}
function getHeight(){
	;
}
function getWeight(){
	;
}
function getEye(){
	;
}
function getOccupation(){
	;
}

function arraySplit(setdata,id)
{
	console.log(setdata.length);
	console.log(setdata);
	var myArry = [];
	var myArry2 = [];
	for (var i in setdata)
	{
		myArry.push(i);
		myArry2.push(setdata[i]);
		
		
	}
	
	
	return myArry2[id];
	
}


function initSearch(people){
    var askIfNameKnow = prompt("Hello, do you know the name of the person you are searching for?")
    switch(askIfNameKnow.toLowerCase())
        {
        case "yes":
                initSearchByName(people);
                break;
        case "no":
                initSearchByTraits(people);
                break;
        default:
                alert("I'm sorry, please enter yes or no.")
                initSearch();
                break;
        }
}
function initSearchByName(people){
   var nameSelection = prompt("Would you like to search by First, Last, or Full name?")
   switch (nameSelection.toLowerCase())
       {
           case "first":
               getFirstName(people);
               break;
           case "last":
               getLastName(people);
               break;
           case "full":
               getFullName(people);
               break;
           default:
               alert("I'm sorry, please enter First, Last, or Full. Thank you.")
               initSearchByName();
               break;
       }
	
}
function getFirstName(people){
    var enteredFirstName = prompt("Please enter the first name of the person you are looking for.")
    searchByFirstName(people,enteredFirstName.toLowerCase());
}
function searchByFirstName(people,enteredFirstName)
{
    for (var i = 0; i <people.length; i++){
    people.filter(function(person){    
        if(person.firstName.toLowerCase() == enteredFirstName)
            {
                return true;
            }
        else
        {
            return false;
 
        }
    });
    }
}
function getLastName(people){
   var enteredLastName =prompt("Please enter the last name of the person you are looking for.")
   searchByLastName(people,enteredLastName.toLowerCase());
}
function searchByLastName(people,enteredLastName)
{
    //for (let i in people){
    people.filter(function(person){
        if(person.lastName.toLowerCase() == enteredLastName)
            {
                return true;
            }
        else
        {
           return false;
        }
    });
    
    }
//}
function getFullName(people){
    var fullName = prompt("Please enter the full name of the person you are looking for.")
    var searchableFullName = fullName.split(" ")
    searchForFullName(people,searchableFullName);
}
function searchForFullName(people,searchableFullName)
{
        people.filter(function(person){
        if(person.firstName.toLowerCase() == searchableFullName[0] && person.lastName.toLowerCase() == searchableFullName[1])
            {
                return true;
            }
        else
        {
           return false;
        }
    });
   
    }

function initSearchByTraits(people){
var searchOption = prompt("Not knowing their name is not an issue, we have other ways of finding them. Other possible search terms are Age, Occupation, Height, Eye color, or even Weight. How would you like to search? Please enter in one of the follow options, age(can be within 5 years), occupation, height, eye color, weight.")
switch(searchOption.toLowerCase())
    {
    case "age":
            ageSearch();
            break;
    case "occupation":
            occupationSearch();
            break;
    case "height":
            heightSearch();
            break;
    case "eye color":
            eyeColorSearch();
            break;
    case "weight":
            weightSearch();
            break;
    default:
            alert("I'm sorry that isn't an accepted search term, please enter either age, occupation, height, eye color, or weight.")
            initSearchByTraits();
            break;
    }
    ;
}
function ageSearch(people){
    var ageRangeSearch =prompt("Do you know their Exact age, or would you like to search within a Range of five years?")
    switch(ageRangeSearch.toLowerCase()){
        case "exact":
            askForExactAge(people);
            break;
        case "range":
            askForAgeRange(people);
            break;
        default:
            alert("I'm sorry that is not a valid selection. Please choose either exact or range.")
            ageRangeSearch(people);       
    }
}
function askForExactAge(people)
{
    var exactAge = prompt("Please enter in their age.")
    searchByExactAge(people, exactAge);
}
function searchByExactAge(people, exactAge)
{
       people.filter(function(person){
        if(person.dob.toLowerCase() == enteredLastName)
            {
                return true;
            }
        else
        {
           return false;
        }
    });
}
function askForAgeRange()
{
    var ageRange = prompt("Please enter in your best guess at their age, we will return all matches that fall within five years above and below that number.")
 searchByAgeRange(people,ageRange);   
}
function searchByAgeRange(people, ageRange)
{}
function askForOccupation(people){
    var occupationAnswer = prompt("Please enter in their occupation.")
    searchByOccupation(people,occupationAnswer);
}
function searchByOccupation(people,occupationAnswer)
{
  people.filter(function(person){
        if(person.occupation.toLowerCase() == occupationAnswer)
            {
                return true;
            }
        else
        {
           return false;
        }
    });   
}
function getHeight(people){
   var heightAnswer = prompt("Please enter in their height in inches.")
   
searchByHeight(people,heightAnswer);
}
function searchByHeight(people,heightAnswer){
     people.filter(function(person){
        if(person.height() == heightAnswer)
            {
                return true;
            }
        else
        {
           return false;
        }
    });
    
}
function getEyeColor(people){
    var eyeColorAnswer = prompt("What color are the eyes of the person you are looking for?")
    searchByEyeColor(people, eyeColorAnswer)
}
function searchByEyeColor(people, eyeColorAnswer)
{
        {
             people.filter(function(person){
        if(person.eyeColor() == eyeColorAnswer)
            {
                return true;
            }
        else
        {
           return false;
        }
    });
    }
}
function getWeight(people)
{
    var weightAnswer = prompt("Please enter their weight in lbs.")
    weightSearch(people,weightAnswer);
}
function weightSearch(people,weightSearch){
    {
             people.filter(function(person){
        if(person.weight() == weightSearch)
            {
                return true;
            }
        else
        {
           return false;
        }
    });
    }
}   
function displayResults(){
	;
}
function isNumeric() {
	;
}
function getAge(){
	;
}
function getHeight(){
	;
}
function getWeight(){
	;
}
function getEye(){
	;
}
function getOccupation(){
	;
}

