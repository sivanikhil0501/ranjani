var changecolor = function (color) {
    document.getElementById(
        "output-text").style.color
                = color.value;
  }
  document.getElementById('btn').onclick = function() {  
    var markedCheckbox = document.getElementsByName('font'); 
    var res=""; 
    for (var checkbox of markedCheckbox) {  
      if (checkbox.checked)  
      {
        res = res+checkbox.value+",";   
      }
    console.log(res.slice(0,res.length-1));
    document.getElementById( "output-text").style.fontFamily=res.slice(0,res.length-1);
      
    }  
  }