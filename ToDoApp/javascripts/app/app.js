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

  //content remove  

//tab:
  var tabclick= $(".tabs");
 
  setUpClickHandler(tabclick);
  
//content input:
  $(".submit").click(function () {
    
    var description = $("#description").val()
    var categories = $("#categories").val().replace(",","");
    
    $("<li id= input>" + "<button id= remove>" + "x" + "</button>" + "<font size= 6, color= blue>" + description + "</font>" + " " +
      "<font size= 4, color= red>" + categories + "</font>" + "</li>").prependTo(" #all ul");
    
    
    alert("Added To List!");
    
  });
//content display: all tab

  $.getJSON("tabs/all.json",  function(data) {
        alert("success");
        
        data.forEach(function (todo) {
           
          var category = []        
          description = todo.description
         
          category = todo.categories.join(" ")
          
          $( "<li id= 'descript'>" + "<button id= 'remove'>" + "x" + "</button>" + "<font size= 6, color= blue>" + description + "</font>"  + 
             "  " + "<font size= 4, color= red>" + category + "</font>"  + "</li>").appendTo("#all ul");
        });
  });
  
 //content display: categorize tab
 var setUpClickHandlerCat = function (cat) {
    cat.click(function () {
      $.getJSON("tabs/all.json", function(data){
        alert("success");
      });
    });
 };
//remove   
  $(document).on('click', "#remove",function () {
    $(this).parent("li").remove();
    
    return false
  });

  setUpClickHandler($(".tabs .tab"));
  setUpClickHandlerCat($(".category .tab"));
};

$(document).ready(main);