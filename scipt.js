
crimes.addEventListener("keyup", function(event){
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("btn").click();
    }
});

function datas(){

    
var crimes = document.getElementById('crimes').value;  

     var crimesapi = crimes.toUpperCase(); 
    
var sfcrimes = ["FRAUD", "WARRANTS", "TRESPASS", "empty"]


for(var i = 0; i < sfcrimes.length; i++){
    
    if(crimesapi === sfcrimes[i]) {
        
    console.log("test")
    init()

        break;

     } if(sfcrimes[i] === "empty"){
         
         alert("Please enter crime categories");
    
     }
}

function init(){

crime = "https://data.sfgov.org/resource/cuks-n6tp.json?pddistrict=MISSION&dayofweek=Friday&$order=date%20DESC&$where=date%3E%272018-01-01T12:00:00%27&category=" + crimesapi

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


}

}