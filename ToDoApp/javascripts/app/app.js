var main = function () {
  var setUpClickHandler = function (anchor) {
    anchor.click(function () {
      var target = $(this).attr("href");
      $(".active").removeClass("active");
      $(this).addClass("active");
      $("#"+target).addClass("active");
      return false;
    });    
  };
//tab:
  var all= $(".tabs");
  setUpClickHandler(all);

//content input:
  $(".submit").click(function () {
    
    var description = $("#description").val()
    var categories = $("#categories").val().replace(",","");
    
    $( "<li id= input>" + description + "</li>").prependTo(".description ul");
    $("<li id= input>" + categories + "</li>").prependTo(".categories ul");
    alert("Added To List!");
    
  });
//content display:

  $.getJSON("tabs/all.json",  function(data) {
        alert("success");
        
        data.forEach(function (todo) {
          var description = [{}] 
          var category = []        
          description = todo.description
          
          category = todo.categories.join(" ")
          
          $( "<li id= 'descript'>" + "<button id= remove>" + "x" + "</button>" + " " + description + "</li>").appendTo(".description ul");
          $("<li id= 'cat'>" +  category + "</li>").appendTo(".categories ul");
          
           
         
        });
         
});

  setUpClickHandler($(".tabs .tab"));
};

$(document).ready(main);