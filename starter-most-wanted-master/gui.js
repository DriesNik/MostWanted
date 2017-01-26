//function initSearch(data){
	//var pete =prompt("What would you like to search for?","Words were here");
	//pete.toUpperCase();
	//switch(pete)
	//{
		//case "name":
		//initSearchByName(data);
		
		//break;
		//case "traits":
		//initSearchByTraits();
		//default:
		//var y = arraySplit(data[0]);
		//console.log(y);
		
	//}
	//;



function initSearch(people){
    var askForName = prompt("name known? yes no")
    switch(askForName.toLowerCase())
        {
        case "yes":
                initSearchByName(people);
                break;
        case "no":
                initSearchByTraits(people);
                break;
        default:
                alert("yes or no")
                initSearch();
                break;
        }
}
function initSearchByName(people){
   var nameChoice = prompt("will you search by first last or full")
   switch (nameChoice.toLowerCase())
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
               alert("last firts full")
               initSearchByName();
               break;
       }
	
}
function getFirstName(people){
    var promptFirstName = prompt("enter first name")
    searchByFirstName(people,promptFirstName.toLowerCase());
}
function searchByFirstName(people,promptFirstName)
{
    for (var i = 0; i <people.length; i++){
    people.filter(function(person){    
        if(person.firstName.toLowerCase() == promptFirstName)
            {
				alert(person.firstName + "\n" + person.lastName +"\n" +person.dob+"\n" +person.weight+"\n" +person.height+"\n" +person.eyeColor+"\n" +person.occupation);
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
				alert(person.firstName + "\n" + person.lastName +"\n" +person.dob+"\n" +person.weight+"\n" +person.height+"\n" +person.eyeColor+"\n" +person.occupation);
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
    if(searchForFullName(people,searchableFullName)== true)
	{
		console.log("hi");
		alert("found him");
	}
	else
	{
		
	}
	
}
function searchForFullName(people,searchableFullName)
{
        people.filter(function(person){
        if(person.firstName.toLowerCase() == searchableFullName[0] && person.lastName.toLowerCase() == searchableFullName[1])
            {
				alert(person.firstName + "\n" + person.lastName +"\n" +person.dob+"\n" +person.weight+"\n" +person.height+"\n" +person.eyeColor+"\n" +person.occupation);
				console.log(person);
				console.log("hi");
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
            ageSearch(people);
            break;
    case "occupation":
            occupationSearch(people);
            break;
    case "height":
            heightSearch(people);
            break;
    case "eye color":
            eyeColorSearch(people);
            break;
    case "weight":
            getWeight(people);
            break;
    default:
            alert(" age occupation height eye color or weight.")
            initSearchByTraits();
            break;
    }
    ;
}
function ageSearch(people){
    var ageRangeSearch =prompt("exact or range")
    switch(ageRangeSearch.toLowerCase()){
        case "exact":
            askForExactAge(people);
            break;
        case "range":
            askForAgeRange(people);
            break;
        default:
            alert("exact or range")
            ageRangeSearch(people);       
    }
}
function askForExactAge(people)
{
    var exactAge = prompt("enter age")
    searchByExactAge(people, exactAge);
}
function searchByExactAge(people, exactAge)
{
       people.filter(function(person){
        if(person.dob == exactAge)
            {
				alert(person.firstName + "\n" + person.lastName +"\n" +person.dob+"\n" +person.weight+"\n" +person.height+"\n" +person.eyeColor+"\n" +person.occupation);
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
    var ageRange = prompt("enter the age  +- 5")
 searchByAgeRange(people,ageRange);   
}
function searchByAgeRange(people, ageRange)
{}
function askForOccupation(people){
    var occupationAnswer = prompt("what is the job")
    searchByOccupation(people,occupationAnswer);
}
function searchByOccupation(people,occupationAnswer)
{
  people.filter(function(person){
        if(person.occupation.toLowerCase() == occupationAnswer)
            {
				alert(person.firstName + "\n" + person.lastName +"\n" +person.dob+"\n" +person.weight+"\n" +person.height+"\n" +person.eyeColor+"\n" +person.occupation);
                return true;
            }
        else
        {
           return false;
        }
    });   
}
function getHeight(people){
   var heightPrompt = prompt("what is the height")
   
searchByHeight(people,heightPrompt);
}
function searchByHeight(people,heightPrompt){
     people.filter(function(person){
        if(person.height() == heightPrompt)
            {
				alert(person.firstName + "\n" + person.lastName +"\n" +person.dob+"\n" +person.weight+"\n" +person.height+"\n" +person.eyeColor+"\n" +person.occupation);
                return true;
            }
        else
        {
           return false;
        }
    });
    
}
function getEyeColor(people){
    var eyeColorPrompt = prompt("enter eye color")
    searchByEyeColor(people, eyeColorPrompt)
}
function searchByEyeColor(people, eyeColorPrompt)
{
        {
             people.filter(function(person){
        if(person.eyeColor() == eyeColorPrompt)
            {
				alert(person.firstName + "\n" + person.lastName +"\n" +person.dob+"\n" +person.weight+"\n" +person.height+"\n" +person.eyeColor+"\n" +person.occupation);
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
    var weightAnswer = prompt("enter weight")
    weightSearch(people,weightAnswer);
}
function weightSearch(people,weightSearch){
    {
             people.filter(function(person){
        if(person.weight == weightSearch)
            {
				alert(person.firstName + "\n" + person.lastName +"\n" +person.dob+"\n" +person.weight+"\n" +person.height+"\n" +person.eyeColor+"\n" +person.occupation);
                return true;
            }
        else
        {
           return false;
        }
    });
    }
}   


function grabInfo(person)
{
	
	person.firstName;
	person.lastName;
	person.ids;
	person.dob;
	person.weight;
	person.height;
	person.eyeColor;
	person.occupation;
}
