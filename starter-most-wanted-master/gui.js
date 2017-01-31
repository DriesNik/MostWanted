


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
                initSearch(people);
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
               initSearchByName(people);
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
					var pie = getFamily(people, person);
					
					displayResults(pie);
					
					
					
				}
				
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

	function getFamily(people,idd){
		document.write(idd);
		
		console.log(idd);
    
		
		
		var spouse = getSpouse(people,idd);
		var child = getChildren(people,idd);
		var parents = getParents(people,idd);
		var sibling = getSiblings(people, idd);
		var family= [];
		
		
		family.push(...spouse);
		
		family.push(...child);
		family.push(...parents);
		console.log (parents);
		family.push(...sibling);
		
		return family;
	  
		
	
	}
	
	function getParents(people, person){
    var parentList = people.filter(function (el) {
        return person.parents.includes(el.id);
    });
   
	console.log(parentList);
	console.log(parentList.firstName + " " + parentList.lastName);
    return (parentList.firstName + " " + parentList.lastName);
}
function getSiblings(people, person){
    var siblingList = people.filter(function (el) {
        return el.parents.includes(person.parents);
    });
    siblingList.sort(function (a, b){
        return getAge(b.dob) - getAge(a.dob);
    });
    return siblingList;
}
function getSpouse( people, person){
    var spouse = people.filter(function (el) {
        return el.currentSpouse == person.id;
    });
    return spouse;
}
function getChildren(people, person){
    var childrenList = people.filter(function (el) {
        return el.parents.includes(person.id);
    });
    childrenList.sort(function (a, b){
        return getAge(b.dob) - getAge(a.dob);
    });
    return childrenList;
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
function displayResults(people){
	var nameOnly = [];
	for(var i = 0; i < people.length; i++){
		var fullName = people.firstName + " " + people.lastName;
		nameOnly.push(fullName);
	}
	var joinedNames = nameOnly.join("\n");
    alert(joinedNames);
}

