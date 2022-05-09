
var day = new Date();
//console.log(day);
var arrWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    function daysOfTheWeek(){
      var daysWeek = day.getDay(); 
      //console.log(daysWeek);
      var element = arrWeek[daysWeek];
      console.log(`Today is: ${element}` );
      alert(`Today is: ${element}` );
        }
    

    