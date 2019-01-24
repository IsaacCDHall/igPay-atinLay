var z=[];
function translate(str) {
  // str = str.toLowerCase();
    // for words that start with a vowel:
    if (["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].indexOf(str[0]) > -1) {
        return str=str+"way";
    }
    // for words that start with one or more consonants
   else {
   //check for multiple consonants
       for (var i = 0; i<str.length; i++){
           if (["a", "e", "i", "o", "u", "A", "E","I", "O", "U"].indexOf(str[i]) > -1){
               var firstcons = str.slice(0, i);
               var middle = str.slice(i, str.length);
               str = middle+firstcons+"ay";
               break;}
            }
    return str;
  }
}
// user interface logic
$(document).ready(function() {
  $("form#piggy").submit(function(event) {
    event.preventDefault();
    let translateInput =$("input").val();
    let splittedTranslate = translateInput.split(' ');
    $("#result").show();
    splittedTranslate.forEach(function(arrItem){
      z += " " + translate(arrItem);
      $(".translate").text(z);
    });
  });
});
// How can i make the first text clear when i submit again without refreshing the page?
