


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
                var famPrompt = prompt( "would you like thier imediate family?");
				if (famPrompt== "yes")
				{
					getFamily(people, person.id);
					
					
					
				}
				
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
   var enteredLastName =prompt("enter last name")
   searchByLastName(people,enteredLastName.toLowerCase());
}
function searchByLastName(people,enteredLastName)
{
    people.filter(function(person){
        if(person.lastName.toLowerCase() == enteredLastName)
            {
				alert(person.firstName + "\n" + person.lastName +"\n" +person.dob+"\n" +person.weight+"\n" +person.height+"\n" +person.eyeColor+"\n" +person.occupation);
                var famPrompt = prompt( "would you like thier imediate family?");
				
				if (famPrompt== "yes")
				{
					getFamily(people, person.id);
					
					
					return true;
				}
				
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
				document.write( person.firstName + "\n" + person.lastName+ "\n" + person.id  +"\n" +person.dob+"\n" +person.weight+"\n" +person.height+"\n" +person.eyeColor+"\n" +person.occupation);
				var famPrompt = prompt( "would you like thier imediate family?");
				if (famPrompt== "yes")
				{
					getFamily(people, person.id);
					
					
					
				}
				
				console.log(person.id);
				console.log("hi");
                return true;
            }
        else
        {
						
           return false;
        }
    });
   
    }

	function getFamily(people,idd){
		
    people.filter(function(person){    
	if (idd == (person.currentSpouse|| person.parent)){
		alert(person.firstName+" " + person.lastName);
		
		return true;
	  
	}
	else{
		return false;
	}
	}
		
	)	
	
	}
	
	
function initSearchByTraits(people){
var searchOption = prompt(" search age occupation height  eye color or weight")
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
            ageSearch(people);       
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
        if(getAge(person.dob) == exactAge)
            {
				
				
				alert(person.firstName + "\n" + person.lastName +"\n" +person.dob+"\n" +person.weight+"\n" +person.height+"\n" +person.eyeColor+"\n" +person.occupation);
                var famPrompt = prompt( "would you like thier imediate family?");
				if (famPrompt== "yes")
				{
					getFamily(people, person.id);
					
					
					
				}
				return true;
            }
        else
        {
			console.log(exactAge);
			console.log(getAge(person.dob));
			console.log("failed");
           return false;
        }
    });
}

function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}
function askForAgeRange(people)
{
    var ageRange = prompt("enter the age  +- 5")
 searchByAgeRange(people,ageRange);   
}
function searchByAgeRange(people, ageRange)
{
	var captop = (ageRange + 5);
	var capbot = (ageRange - 5);
	for( var i = 0; i< 10;i++)
	{
		
		searchByExactAge(people, (ageRange -5 +i));
		console.log(i);
	}
	
	
}
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
                
				var famPrompt = prompt( "would you like thier imediate family?");
				if (famPrompt== "yes")
				{
					getFamily(people, person.id);
					
					
					
				}
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
                var famPrompt = prompt( "would you like thier imediate family?");
				if (famPrompt== "yes")
				{
					getFamily(people, person.id);
					
					
					
				}
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
				
				var famPrompt = prompt( "would you like thier imediate family?");
				if (famPrompt== "yes")
				{
					getFamily(people, person.id);
					
					
					
				}alert(person.firstName + "\n" + person.lastName +"\n" +person.dob+"\n" +person.weight+"\n" +person.height+"\n" +person.eyeColor+"\n" +person.occupation);
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
                var famPrompt = prompt( "would you like thier imediate family?");
				if (famPrompt== "yes")
				{
					getFamily(people, person.id);
					
					
					
				}
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
