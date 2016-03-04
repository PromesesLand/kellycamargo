'use strict';

var header = document.getElementsByTagName("header")[0];

//mostra header
function ShowHeader() {
  var scrollY = 600;
  
  if (window.pageYOffset >= scrollY) {      
      header.className = "slideDown";    
      console.log(header);     
  } else {
    header.className = "none";
  }  
}

//testar window.scroll
function Scroll() {
    window.scrollBy(0, 0);
    console.log("pageXOffset: " + window.pageXOffset + ", pageYOffset: " + window.pageYOffset);
}    

//get json
    var hr = new XMLHttpRequest();
    hr.open("GET", "assets/js/data.json", true);    
    hr.setRequestHeader("Content-type", "application/json", true);    
    hr.onreadystatechange = function() {      
      if(hr.readyState == 4 && hr.status == 200) {
        var data =  JSON.parse(hr.responseText);    
        var produtos = document.getElementById("produtos");        
        for(var obj in data){         
          produtos.innerHTML += "<div class='prod-serv'><img src='"+data[obj].path+"' width='"+data[obj].width+"' height='"+data[obj].height+"'><div class='sobre-serv'><span>"+data[obj].text+"</span></div><div class='text-servicos'><span>"+data[obj].text+"</span></div></div>";   
            console.log(data[obj].text);
        }       
      }
    }        
    hr.send(null);

$(window).scroll(function(e) {
  Scroll();
  ShowHeader();
  e.preventDefault();
});

//scroll anchor
$(function() {
    $('a.page-scroll').click(function(event) {
      var $anchor = $(this);
      
      $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 115
        }, 1500, 'easeInOutExpo');       
        event.preventDefault();
    });    
});

