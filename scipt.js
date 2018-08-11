var crimesapi = "";

console.log(crimesapi)
const crime = "https://data.sfgov.org/resource/cuks-n6tp.json?pddistrict=MISSION&dayofweek=Friday&$order=date%20DESC&$where=date%3E%272018-01-01T12:00:00%27&category=" + crimesapi




document.getElementById('btn').addEventListener("click", function(){


var crimes = document.getElementById('crimes').value;

crimesapi = crimes.toUpperCase();

console.log(crimesapi)
$.ajax({
    type: 'GET',
    url: crime,
    dataType: "json",
    success: function(data){
        console.log(data);

        for(var i = 0; i < data.length; i++){
    
      var content = 'address: ' +  data[i].address;

      content += ' Date: ' + data[i].date;

            $(".crime").append('<li>' + content + '</li>');

      
    
        }
    }
});

})