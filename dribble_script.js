

$("#request-button").on("click", function(e) { //use bind click
  e.preventDefault();
  console.log("working!!!");

  var vehicleArr = [];
  //see each loop
  $.each($("input[name='vehicle']:checked"), function() {            
    vehicleArr.push($(this).val());
  });

  var person = {
   fname: $("#fname").val(),
   lname: $("#lname").val(),
   emailaddr: $("#emailaddr").val(),
   pwd: $("#pwd").val(),
   confirmpwd: $("#confirmpwd").val(),
   state: $("#state").val(),
   dob: $("#dob").val(),		
   addr: $("#addr").val(),		
   gender: $("input[name='gender']:checked").val(),
   vehicles: vehicleArr.join(", ")
 };
 console.log("person obj fname: ", person["fname"]);
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

 /*<tr> <td> </td></tr>*/
var tableRow = $(document.createElement('tr'));

for (var key in person) {
  if (person.hasOwnProperty(key)) {
        //console.log(key + " -> " + person[key]);
        tableCol = $(document.createElement('td'));
        tableCol.text(person[key]);
        tableRow.append(tableCol);        
      }
    }
$( "#form-entry-table" ).append(tableRow);
});



$( function() {
  $( "#dob" ).datepicker( {
    maxDate: '0',  /*setting today's date as max date*/
    minDate: new Date(2017, 12 - 1, 1)     /*params: year, month, day, hour, minute, second, millisecond*/    
  } );

} );



/*var tableCol = $(document.createElement('td'));
tableCol.text(person["id"]);
tableRow.append(tableCol);*/


/*datepicker:
$( "#datepicker" ).datepicker( {minDate: '0'} );
$("#mydate").datepicker().datepicker("setDate", new Date());
set today's date to date picker
  $("#mydate").datepicker().datepicker("setDate", new Date());
  */




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