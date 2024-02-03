window.alert(fun());
if('geolocation' in Geolocation){
    navigator.geolocation.getCurrentPosition(
        function(position){
            let lat = position.coords.latitude;
            let log = position.coords.longitude;
        });
}else{

}
function fun(){
    if('geolocation' in Geolocation){
        navigator.geolocation.getCurrentPosition(
            function(position){
                let lat = position.coords.latitude;
                let log = position.coords.longitude;
            });
    }else{
    
    }
}