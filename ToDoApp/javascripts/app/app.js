// Your code goes here.var $ = window.$;
var console = window.console;
//var alert;
var description;
var categories;
var category;
var tabClick;
var categorizeTab;
var setUpClickHandler;
var setUpClickHandlerCat;
var toDo;
var cat;
var main = function () {
        'use strict';
        setUpClickHandler = function (anchor) {
            anchor.click(function() {
                var target = $(this).attr("href");
                $(".active").removeClass("active");
                $(this).addClass("active");
                $("#" + target).addClass("active");
                return false;
            }); 
        };
        //click for: categorize tab
        categorizeTab = function() {
        //categorize click
            setUpClickHandlerCat = function (cat) {
                cat.click(function () {
                    /*content for: categorize tab
                    description = [];
                    categories = [];
                    categories = $(".tab .categorize");
                    */
                    console.log(categories);
                    setUpClickHandlerCat($(".category .tab"));
                });
            };
        };
        //remove   
        $(document).on('click', "#remove", function () {
           $(this).parent("li").fadeToggle("slow", function () {
               $(this).parent("li").remove();
           });
            return false;
        });
        //end content remove  
        //tab:
        tabClick = $(".tabs");
        setUpClickHandler(tabClick);
        $.getJSON("tabs/all.json",  function(data) {
            alert("success");
            data.forEach(function (todo) {
                category = [];        
                description = todo.description;
                category = todo.categories.join(" ");
        //all tab content:
                $("<li id = 'descript'>" + "<button id= 'remove'>" + "x" + "</button>" + "<font size= 6, color= blue>" + description + "</font>"  + 
                    "  " + "<font size= 4, color= red>" + category + "</font>"  + "</li>").appendTo(" #all ul");
                $("<li id = 'cats'>" + "<button id= remove>" + "x" + "</button>" + "<font size= 6, color= blue>" + category + 
                    "<br>" + "<font size= 4, color= black>" + description + "</font>" + "</li>").appendTo("#categorize");
            });
        }); 
//content input:
        $(".submit").click(function () {
                toDo = $("#description").val();
                cat = $("#categories").val().replace(",", "");
                $("<li id = input>" + "<button id= remove>" + "x" + "</button>" + "<font size= 6, color= blue>" + toDo + "</font>" + " " +
                  "<font size= 4, color= red>" + cat + "</font>" + "</li>").prependTo("#all ul");
                $("<li id = input>" + "<button id= remove>" + "x" + "</button>" + "<font size= 6, color= blue>" + cat + 
                  "<br>" + "<font size= 4, color= black>" + toDo + "</font>" + "</li>").prependTo("#categorize");
                alert("Added To List!");
        });
     $('.input').keypress(function(e) {
        if(e.which === 13) {
            jQuery(this).blur();
            jQuery('#submit').focus().click();
            toDo = $("#description").val();
            cat = $("#categories").val().replace(",", "");
            $("<li id = input>" + "<button id= remove>" + "x" + "</button>" + "<font size= 6, color= blue>" + toDo + "</font>" + " " +
              "<font size= 4, color= red>" + cat + "</font>" + "</li>").prependTo("#all ul");
            $("<li id = input>" + "<button id= remove>" + "x" + "</button>" + "<font size= 6, color= blue>" + cat + 
              "<br>" + "<font size= 4, color= black>" + toDo + "</font>" + "</li>").prependTo("#categorize");
            alert("Added To List!");
        }
     });
        setUpClickHandler($(".tabs .tab"));
    };
$(document).ready(main);
