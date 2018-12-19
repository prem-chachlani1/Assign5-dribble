$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: 'http://localhost:3000/person', 
    success: function(result) {
      var tableContainer = $(".table-container");
      console.log("GET result: ", result);
      
      var output =
      "<table><thead><tr><th>First Name</th><th>Last Name</th><th>Email Address</th>"+
      "<th>State</th><th>Date of Birth</th><th>Address</th>"+
      "<th>Gender</th><th>Vehicles owned</th> </thead><tbody>";
      
      for(var prop in result) {
        delete result[prop].pwd;
        delete result[prop].id;
        output = output + "<tr>"; 
        for (var key in result[prop]) {
          if (result[prop].hasOwnProperty(key)) {
            output = output + "<td>" + result[prop][key] + "</td>";                            
          }
        }
        output = output + "</tr>";
      }
      output = output + "</tbody></table>";
      tableContainer.html(output);
      $("table").addClass("form-entries");
    }
  });


//submit button
$("#request-button").on("click", function(e) { //use bind click
  e.preventDefault();
  console.log("working!!!");
  var vehicleArr = [];

  $.each($("input[name='vehicle']:checked"), function() {            
    vehicleArr.push($(this).val());
  });

  var person = {
   fname: $("#fname").val(),
   lname: $("#lname").val(),
   emailaddr: $("#emailaddr").val(),
   state: $("#state").children("option:selected").val(),
   dob: $("#dob").val(),    
   addr: $("#addr").val(),    
   gender: $("input[name='gender']:checked").val(),
   vehicles: vehicleArr.join(", "),
   pwd: $("#pwd").val()
 };
 console.log("person obj fname: ", person["fname"]);
 var jsonData = JSON.stringify(person);

//ajax post
 $.ajax({
  url: 'http://localhost:3000/person',
  type: 'post',   
  dataType: 'json',
  contentType: 'application/json',
  data: jsonData,
  success: function(result) {
    console.log("POST result", result);
    var output = "<tr>";
    console.log(">> result", result);
    delete result.pwd;  
    delete result.id;
    for (var prop in result) {
      if (result.hasOwnProperty(prop)) {
        output = output + "<td>" + result[prop] + "</td>";                            
      }
    }
    
    output = output + "</tr>";
    $(".form-entries").append(output);

  },
  error: function(xhr){
    alert("An error occured while post request: " + xhr.status + " " + xhr.statusText);
  }

});


}); //request button

$( function() {
  $( "#dob" ).datepicker( {
    maxDate: '0',  /*setting today's date as max date*/
    minDate: new Date(2017, 12 - 1, 1)     /*params: year, month, day, hour, minute, second, millisecond*/    
  } );

} ); //date picker

}); //ready()




//commented code
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



/*
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