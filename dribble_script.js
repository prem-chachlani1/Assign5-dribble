function makeAjaxCall(url, methodType, callback){
	return $.ajax({
		url : url,
		method : methodType,
		dataType : "json"
	})
}
// git hub url to get btford details
var URL = "http://localhost:3000/posts";

makeAjaxCall(URL, "GET").then(function(respJson){
	console.log(" request", respJson);
 /*document.getElementById("userid").innerHTML = respJson.login;
 document.getElementById("name").innerHTML = respJson.name;
 document.getElementById("company").innerHTML = respJson.company;
 document.getElementById("blog").innerHTML = respJson.blog;
 document.getElementById("location").innerHTML = respJson.location;*/
}, function(reason){
	console.log("error in processing your request", reason);
});

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

