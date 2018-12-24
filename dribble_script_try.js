
$(document).ready(function() {
  var $regexFname = /^[a-zA-Z]{3,16}$/i;
  var $regexLname = /^[a-zA-Z]{3,16}$/i; /* for D'souza /^[a-zA-z ,.'-]{3,16}$/i;*/
  var $regexEmailAddr = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/i;
  var $regexPhoneNo = /^[0-9]{10}$/;
    var $regexPassword = /^[a-zA-Z]\w{3,14}$/; //eg: aBc45DSD_sdf   
    var $regexDOB = /^[0,1]?\d{1}\/(([0-2]?\d{1})|([3][0,1]{1}))\/(([1]{1}[9]{1}[9]{1}\d{1})|([2-9]{1}\d{3}))$/;
    var $regexAddr = /\S+/;
    
    var invalidStr = "Invalid ";
    var  selectMsg = "Please select ";    //validate text fields
    function validateTextField(fieldId, msg, minLen, maxLen, regExp) {
      $(fieldId).focusout(function() {
        var $this = $(this);
        var $fieldVal = $this.val();
        var $fieldLen = $this.val().length;

        if ($this === $("#form-id #confirm-password").val()) {  
          console.log("inside confirm pwd");
          if ($this.val() === $("#form-id #password").val()) {
            $this.next('.error-msg').css('visibility', 'hidden');
                  } 
                  else {  
                    $this.next('.error-msg').text(msg).css('visibility', 'visible');
                    
                  }
                } 
                else {
                  if (regExp.test($fieldVal) && $fieldLen >= minLen && $fieldLen <= maxLen) {
               
              $this.next('.error-msg').css('visibility', 'hidden');
              
            } 
            else {
              $this.next('.error-msg').text(msg).css('visibility', 'visible');
              
            }
          }
        }); //focusout
    } //validateTextField func end
    

    validateTextField("#fname", invalidStr + "First name ", 3, 20, $regexFname);
    validateTextField("#lname", invalidStr + "Last name ", 3, 20, $regexLname);
    validateTextField("#emailaddr", invalidStr + "Email Address ", 4, 254, $regexEmailAddr);
    validateTextField("#phone-no", invalidStr + "Phone number ", "10", "10", $regexPhoneNo);
    validateTextField("#password", invalidStr + "Password ", 7, 15, $regexPassword);
    validateTextField("#confirm-password", invalidStr + "Confirm Password ", "7", "15", $regexPassword);
    validateTextField("#dob", invalidStr + "Date of Birth", 10, 10, $regexDOB);
    validateTextField("#addr", invalidStr + "Address", 5, 72, $regexAddr);

    $.ajax({
      type: "GET",
      url: 'http://localhost:3000/person',
      success: function(result) {
        var tableContainer = $(".table-container");
        console.log("GET result: ", result);

        var output =
        "<table><thead><tr><th>First Name</th><th>Last Name</th><th>Email Address</th>" +
        "<th>State</th><th>Date of Birth</th><th>Address</th>" +
        "<th>Gender</th><th>Vehicles owned</th> </thead><tbody>";

        for (var prop in result) {
          delete result[prop].password;
          delete result[prop].id;
          output = output + "<tr>";
          for (var key in result[prop]) {
            if (result[prop].hasOwnProperty(key)) {
              output = output + "<td>" + result[prop][key] + "</td>";
            }
          }
                output = output + "</tr>"; // add tr tr
              }
              output = output + "</tbody></table>";
              tableContainer.html(output);
              $("table").addClass("form-entries");
        } // success func and add error function
    }); //ajax get


    //submit button
    $("#request-button").on("click", function(e) { //use bind click
      e.preventDefault();
      console.log("working!!!");

      var isGenderChecked = $('#form-id input[name=gender]:checked');
       if (isGenderChecked.length > 0) {          
          $('#form-id .single-option .error-msg').css('visibility', 'hidden');
      }
      else {          
        $('#form-id .single-option .error-msg').css('visibility', 'visible');
      }

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
        password: $("#password").val()
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
            delete result.password;
            delete result.id;
            for (var prop in result) {
              if (result.hasOwnProperty(prop)) {
                output = output + "<td>" + result[prop] + "</td>";
              }
            }
            output = output + "</tr>";
            $(".form-entries").append(output);

          },
          error: function(xhr) {
            alert("An error occured while post request: " + xhr.status + " " + xhr.statusText);
          }
        }); //ajax post

    }); //request button

    $("#dob").datepicker({
      maxDate: '0',
      /*setting today's date as max date*/
      minDate: new Date(2017, 12 - 1, 1) /*params: year, month, day, hour, minute, second, millisecond*/
    });

  });