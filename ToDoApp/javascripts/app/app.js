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
  
  var setUpClickHandlerCategory = function (category) {
    category.click(function () {
      var target = $(this).attr("href");
      $(".active").removeClass("active");
      $(this).addClass("active");
      $("#"+target).addClass("active");
      return false;
    });    
  };
//tab:
  var tabclick= $(".tabs");
  setUpClickHandler(tabclick);
  

//content input:
  $(".submit").click(function () {
    
    var description = $("#description").val()
    var categories = $("#categories").val().replace(",","");
    
    $("<li id= input>" + "<button id= remove>" + "x" + "</button>" + "<font size= 6, color= blue>" + description + "</font>" + " " +
      "<font size= 4, color= red>" + categories + "</font>" + "</li>").prependTo("ul");
    
    
    alert("Added To List!");
    
  });
//content display:

  $.getJSON("tabs/all.json",  function(data) {
        alert("success");
        
        data.forEach(function (todo) {
          var label = [{}] 
          var category = []        
          description = todo.description
         
          category = todo.categories.join(" ")
          
          $( "<li id= 'descript'>" + "<button id= 'remove'>" + "x" + "</button>" + "<font size= 6, color= blue>" + description + "</font>"  + 
             "  " + "<font size= 4, color= red>" + category + "</font>"  + "</li>").appendTo("ul");
          
          
           
         
        });
         
  });
  
  //content remove
  
  $(document).on('click', "#remove",function () {
    $(this).parent("li").remove();
    
    return false
  });

  setUpClickHandler($(".tabs .tab"));
};

$(document).ready(main);