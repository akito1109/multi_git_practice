(function(){
  var card = {
    init: function(){
      card.setColorCode();
    },
    
    setColorCode: function(){
      var cardItem = document.querySelectorAll('.blend-item');
      var cardLength = cardItem.length;
      
      for(var i = 0; i < cardLength; i++){
        var filter = cardItem[i].querySelector('.filter');
        var thisCardColor = window.getComputedStyle(filter).backgroundColor;
        var thisCardColorArr = thisCardColor.match(/\d+/g);
        var colorCode = card.convertHEX(thisCardColorArr);
        
        if(colorCode === '#000000' || colorCode === undefined) {
          var noneColor = cardItem[i].querySelector('.color-code');
          noneColor.innerText = 'none';
          
          continue;
        }
        
        var colorIcon = cardItem[i].querySelector('.color-sample');
        colorIcon.classList.add('is-show');
        colorIcon.style.background = colorCode;
        colorIcon.nextElementSibling.innerText = colorCode;
      }
    },
    
    convertHEX: function(rgb) {
      return "#" + rgb.map(function(value){
        return ("0" + parseInt(value).toString(16)).slice(-2);
      }).join("");
    },
  };
  
  // function init
  card.init();
})();