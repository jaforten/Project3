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
 
  var setUpJSONTab = function (tab) {
    
    //tab1
    var tab_all = $("<a>"+"All"+"</a>").addClass("tab").attr("href","#");
    $(tab_all).appendTo(".tabs");
    setUpClickHandler(tab_all);
    
    
    //tab2
    var tab_categorized = $("<a>"+"Categorized"+"</a>").addClass("tab").attr("href", "#");
    $(tab_categorized).appendTo(".tabs");
    setUpClickHandler(tab_categorized);
    
    //tab3
    var tab_edit = $("<a>"+"Edit"+"</a>").addClass("tab").attr("href","#");
    $(tab_edit).appendTo(".tabs");
    setUpClickHandler(tab_edit);
    
    //content
    //var content = $("<div>"+""+"</div>").css("font-size","2em").addClass("tab").attr("id","");
    //$(".content").append(content);
  };

 
  $.getJSON("tabs/all.json", setUpJSONTab); 
  setUpClickHandler($(".tabs .tab"));

 
}

$(document).ready(main);