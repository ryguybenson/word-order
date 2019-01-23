$(document).ready(function() {
  var strIn = prompt("Enter a sentence: ");


   var words = strIn.split(" ").sort();

   var count = [];
   var compare = [];

   words.forEach(function(word) {
     if (compare.includes(word)) {
       count[compare.indexOf(word)] += 1;
     } else {
       compare.push(word);
       count.push(1);
     }
   })
   compare.forEach(function(final) {
     $("#list").append("<li>" + final + ": " + count[compare.indexOf(final)] + "</li>")
   });
  // const result = words.filter(word =>word == )
  // for (var i = 0; i < words.length - 1; i++) {
  //   for (var j=1; j < words.length -i; j++) {
  //     if (words[i] == words[i+j]) {
  //       hit += 1;
  //       console.log(words[i])
  //
  //       words[i+j] = "";
  //     }
  //   }
  //   $("#list").append(words[i]);
  //   words[i] = "";
  // }


});
