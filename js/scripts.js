$(function () {
  var array = [];
  $("button#add").click(function() {

    var item = $("input#grocery-input").val();
    console.log(item);
    $("#unsorted").append("<li>" + item + "</li>");
    array.push(item);
    console.log(array);
  });

  $("form#grocery-form").submit(function(event) {
    event.preventDefault();
    array.sort();
    console.log(array);
    var sortedArray = array.map(function(entry) {
      return entry.toUpperCase();
    });
    console.log(sortedArray);
    sortedArray.forEach(function(item) {
      $("#sorted").append("<li>" + item + "</li>");
    });
    $("#sorted").show();
    $(".form-class").hide();
  });



});
