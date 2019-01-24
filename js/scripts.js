
function translate(str) {

    // for words that start with a vowel:
    if (["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].indexOf(str[0]) > -1) {
        return str=str+"way";
    }
    // for words that start with one or more consonants
   else {
   //check for multiple consonants
       for (var i = 0; i<str.length; i++){
           if (["a", "e", "i", "o", "u"].indexOf(str[i]) > -1){
               var firstcons = str.slice(0, i);
               var middle = str.slice(i, str.length);
               str = middle+firstcons+"ay";
               break;}
            }
    return str;}
}
// user interface logic
$(document).ready(function() {
  $("form#piggy").submit(function(event) {
    event.preventDefault();
    var translateInput =$("input").val();
    console.log(translateInput);
    $("#result").show();
    $(".translate").text(translate(translateInput));
  });
});


// After lunch goals:
// Split the string in business logic side
// then run a for each loop around the entire function to run on each item in array
