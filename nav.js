window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("menu").style.position = "fixed";
    document.getElementById("menu").style.top = "0";
    document.getElementById("menu").style.background = "black";
    document.getElementById("menu").style.width = "100%";
    // document.getElementById("menu").style.height = "100px";
    // document.getElementById("menu").style.transition = "1s";
    document.getElementById("menu").style.boxShadow = "0 0 30px rgba(0,0,0,.075)";
    document.getElementById("menu").style.left = "0";
    document.getElementById("menu").style.zIndex = "99";
  } else {
    document.getElementById("menu").style.position = "fixed";
    document.getElementById("menu").style.top = "0";
    document.getElementById("menu").style.background = "transparent";
    document.getElementById("menu").style.boxShadow = "none";
    // document.getElementById("menu").style.borderBottom = "";
    document.getElementById("menu").style.zIndex = "99";
  }
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 500) {
    
    // document.getElementById("menu").style.transition = "1s";
    document.getElementById("menu").style.zIndex = "99";
    document.getElementById("menu").style.background = "black";
  }
  else {
   
    document.getElementById("menu").style.zIndex = "99";
    
  }
}