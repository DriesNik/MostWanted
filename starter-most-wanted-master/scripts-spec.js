

describe('function lastname check', function(){
	it('add 6 to 2', function(){
		expect(searchByLastName(data,"pafoy")).toEqual(undefined);
	});
});
describe('function lastname check', function(){
	it('add 6 to 2', function(){
		expect(searchByFirstName(data,"pafoy")).toEqual(undefined);
	});
});
describe('function lastname check', function(){
	it('add 6 to 2', function(){
		expect(searchForFullName(data,"jen pafoy")).toEqual(undefined);
	});
});
describe('function getting age', function(){
	it('add 6 to 2', function(){
		expect(getAge("08/22/1992")).toEqual(24);
	});
});
describe('function exact age check', function(){
	it('add 6 to 2', function(){
		expect(searchByExactAge(data,"24")).toEqual(undefined);
	});
});
//
describe('function occupation checking', function(){
	it('add 6 to 2', function(){
		expect(searchByOccupation(data,"24")).toEqual(undefined);
	});
});
describe('function height check', function(){
	it('add 6 to 2', function(){
		expect(searchByHeight(data,"24")).toEqual(undefined);
	});
});

describe('function weight check', function(){
	it('add 6 to 2', function(){
		expect(weightSearch(data,"24")).toEqual(undefined);
	});
});

describe('function eyecolor check', function(){
	it('add 6 to 2', function(){
		expect(searchByEyeColor(data,"24")).toEqual(undefined);
	});
});




var data =
[{
	
		"id": 464142841,
		"firstName": "Jen",
		"lastName": "Paffoy",
		"gender": "female",
		"dob": "4/10/1940",
		"height": 72,
		"weight": 256,
		"eyeColor": "black",
		"occupation": "student",
		"parents": [],
		"currentSpouse": 629807187
	
	
	
}
,
	{
		"id": 982411429,
		"firstName": "Mister",
		"lastName": "Potatoo",
		"gender": "male",
		"dob": "12/18/1952",
		"height": 66,
		"weight": 170,
		"eyeColor": "hazel",
		"occupation": "architect",
		"parents": [],
		"currentSpouse": 595767575
	},
	{
		"id": 595767575,
		"firstName": "Missuz",
		"lastName": "Potatoo",
		"gender": "female",
		"dob": "10/28/1948",
		"height": 59,
		"weight": 137,
		"eyeColor": "blue",
		"occupation": "architect",
		"parents": [],
		"currentSpouse": 982411429
	},
	{
		"id": 693243224,
		"firstName": "Joy",
		"lastName": "Madden",
		"gender": "female",
		"dob": "4/20/1939",
		"height": 69,
		"weight": 199,
		"eyeColor": "hazel",
		"occupation": "doctor",
		"parents": [],
		"currentSpouse": null
	},
	{
		"id": 888201200,
		"firstName": "Mader",
		"lastName": "Madden",
		"gender": "male",
		"dob": "5/6/1937",
		"height": 76,
		"weight": 205,
		"eyeColor": "black",
		"occupation": "landscaper",
		"parents": [],
		"currentSpouse": null
	},
	{
		"id": 878013758,
		"firstName": "Jill",
		"lastName": "Pafoy",
		"gender": "female",
		"dob": "2/8/1972",
		"height": 74,
		"weight": 118,
		"eyeColor": "brown",
		"occupation": "programmer",
		"parents": [401222887],
		"currentSpouse": 294874671
	}


];