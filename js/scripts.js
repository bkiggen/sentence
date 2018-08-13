$(function () {
  $("#sentence-form").submit(function(event){
    var array1 = $("#sentence-input").val().split(" ");
    var array2 = [];

    array1.forEach(function(word){
      if(word.length >= 3){
        array2.push(word);
      } else {
      };
    });


    event.preventDefault();
  });



});













// var array = [];
// $("button#add").click(function() {
//
//   var item = $("input#grocery-input").val();
//   console.log(item);
//   $("#unsorted").append("<li>" + item + "</li>");
//   array.push(item);
//   console.log(array);
// });
//
// $("form#grocery-form").submit(function(event) {
//   event.preventDefault();
//   array.sort();
//   console.log(array);
//   var sortedArray = array.map(function(entry) {
//     return entry.toUpperCase();
//   });
//   console.log(sortedArray);
//   sortedArray.forEach(function(item) {
//     $("#sorted").append("<li>" + item + "</li>");
//   });
//   $("#sorted").show();
//   $(".form-class").hide();
// });
