
document.getElementById("submit_button").addEventListener('click',function(){
	
	console.log("working!!!")
	var person = {
			fname: $("#fname").val(),
			lname: $("#lname").val(),
			emailaddr: $("#emailaddr").val(),
			pwd: $("#pwd").val(),
			confirmpwd: $("#confirmpwd").val(),
			states: $("#states").val(),
			dob: $("#dob").val(),		
			addr: $("#addr").val()		
		}

	var jsonData = JSON.stringify(person);

	console.log(jsonData);
	$.ajax({
		url: 'http://localhost:3000/person',
		type: 'post',		
		data: jsonData,
		dataType: 'json',
		contentType: 'application/json'
		/*success: function(){
			console.log("fname ", fname);
		}*/
	});
});



// function makeAjaxCall(){
 
// }


// var form_data = makeAjaxCall(URL, "POST");
// console.log("form_data >> ", form_data);

/*.then(function(respJson){
	console.log(" request", respJson);
 document.getElementById("userid").innerHTML = respJson.login;
 document.getElementById("name").innerHTML = respJson.name;
 document.getElementById("company").innerHTML = respJson.company;
 document.getElementById("blog").innerHTML = respJson.blog;
 document.getElementById("location").innerHTML = respJson.location;
}, function(reason){
	console.log("error in processing your request", reason);
});*/

/*$(document).ready(function(){
	console.log("Hello, jQuery!!!");
	$.ajax({
    url: "form_data.json",
    method: "GET",
    
    success: function(data) {
      console.log('success', data) 
    },
    error: function(xhr) {
      console.log('error', xhr);
    }
  });
});

*/

//post form data
/*$(document).ready(function(){
    $("button").click(function(){
        alert("Value: " + $("#test").val());
    });
});

{
    "employees": [
        {
            "firstName": "John",
            "lastName": "Doe"
        },
        {
            "firstName": "Anna",
            "lastName": "Smith"
        },
        {
            "firstName": "Peter",
            "lastName": "Jones"
        }
    ]
}*/
 /*var viewData = { 
    employees : [] 
};


function onGeneratedRow()
{
    var jsonData = {};
    
        var columnName = "First Name"; //column.metadata.colName;
        jsonData[columnName] = "abcd";
 
    viewData.
    employees.push(jsonData);
 	console.log("viewData: ", JSON.stringify(viewData));
 }

 onGeneratedRow();*/