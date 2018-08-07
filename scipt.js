const crime = "https://data.sfgov.org/resource/cuks-n6tp.json?pddistrict=MISSION&dayofweek=Friday&$order=date%20DESC&$where=date%3E%272018-01-01T12:00:00%27&category=TRESPASS"




document.getElementById('btn').addEventListener("click", function(){





$.ajax({
    type: 'GET',
    url: crime,
    dataType: "json",
    success: function(data){
        $.each(data, function(i, crimes){

        
        
        
        var node = document.createElement("li");                
              
                               
        document.getElementById("list").appendChild(crimes);
       node.appendChild(node);  
        });
      
    }
})


        

});