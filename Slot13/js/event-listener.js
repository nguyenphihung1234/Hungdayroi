function checkUsername(){                                // Declare function
    var elMsg = document.getElementById('feedback');     // Get feedback element
    if (this.value.length < 5) {                         // If username too short
        elMsg.textContent = 'Username must be 5 characters or more'; //Set msg
}else {                                                                //Otherwise
    elMsg.textContent ='';                                              // Clear msg
 }
}
//the same with chrck password -> let try nhes.
var elUsername.addEventListener('blur', checkUsername, false);