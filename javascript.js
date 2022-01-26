const Body = {
    setColor: function (color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

const Grid = {
    setgird1BoderColor: function (color) {
        document.getElementById('grid1').style.borderColor = color;
    },
    setgird2BoderColor: function (color) {
        document.getElementById('grid2').style.borderColor = color;
    }
}


const H = {
        seth1BoderColor: function (color) {
            document.getElementById('headtitle').style.borderColor = color;
        },
        seth2BoderColor: function (color) {
            document.getElementById('middletitle').style.borderColor = color;
        }
    }

    var Links = {
        setAllaColor : function (color){
          var alist = document.querySelectorAll('a');
          var i = 0;
          while (i < alist.length){
          alist[i].style.color = color;
          i = i + 1 ;
          }
        }
      }

    function P_lefe_borderColor(color){
        document.getElementById('content').style.borderLeftColor = color;
    }

    function nightDayHandler(self) {

        const target = document.querySelector('body');
      
          if(self.value === 'night'){
            Body.setBackgroundColor('black');
            Body.setColor('white');
            
            Grid.setgird1BoderColor('white');
            Grid.setgird2BoderColor('white');
      
            
            H.seth1BoderColor('white');
            H.seth2BoderColor('white');

            P_lefe_borderColor('white');

            self.value = 'day';
      
            Links.setAllaColor('powderblue');
      
          }else{
            Body.setBackgroundColor('white');
            Body.setColor('black');

            Grid.setgird1BoderColor('black');
            Grid.setgird2BoderColor('black');
      
            
            H.seth1BoderColor('black');
            H.seth2BoderColor('black');

            P_lefe_borderColor('black');


            self.value = 'night';
      
            Links.setAllaColor('blue');
         }
        }